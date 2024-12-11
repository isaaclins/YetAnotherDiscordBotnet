# THIS COMPONENT WILL:
# contain the commands for changing the current working directory, listing the contents of the current directory, and displaying the current working directory.
# ----------------------
# TODO:
# -cd <path>
# -ls
# -pwd
# ----------------------

def get_code():
    return """
    # ADDED FILE BROWSER MODULE
    elif message.content.lower().startswith(".cd"):
        try:
            os.chdir(message.content[4:])
            await message.channel.send(f"Changed directory to {os.getcwd()}")
        except FileNotFoundError:
            await message.channel.send("Invalid Path")
    elif message.content.lower() == ".pwd":
        await message.channel.send(f"Current Directory: {os.getcwd()}")
    elif message.content.lower() == ".ls":
        await message.channel.send(f"Contents of {os.getcwd()}:\n{os.listdir()}")
    """