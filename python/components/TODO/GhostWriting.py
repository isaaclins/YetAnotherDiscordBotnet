# THIS COMPONENT WILL:
# write a given string as the keyboard.
# ----------------------
# TODO:
# -ghostwrite <String>

def get_code():
    return """
elif message.content.lower().startswith(".ghostwrite"):
    import pyautogui
    # Here is the code to write a given string as the keyboard
    content = message.content[13:]
    pyautogui.typewrite(content)
    await message.channel.send("```diff\n+ Ghostwriting\n```")
    
"""