# THIS COMPONENT WILL:
# contain the commands for lowering or increasing the volume in steps whilst also being able to set it to a specific value.
# ----------------------
# TODO:
# -lower <int>
# -increase <int>
# -set <int>
# ----------------------

def get_code():
    return """
    # ADDED AUDIO MANIPULATION MODULE
    elif message.content.lower().startswith(".lower"):
        volume = message.content[7:]
        try:
            volume = int(volume)
            if volume < 0:
                await message.channel.send("Volume cannot be negative")
            else:
                # here is the code to lower the volume by the specified amount:
                
    elif message.content.lower() == ".increase":
        volume = message.content[10:]
        try:
            volume = int(volume)
            if volume < 0:
                await message.channel.send("Volume cannot be negative")
            else:
                # Increase the volume by the specified amount

                
    elif message.content.lower().startswith(".set"):
        volume = message.content[4:]
        try:
            volume = int(volume)
            if volume < 0:
                await message.channel.send("Volume cannot be negative")
            else:
                # Set the volume to the specified amount
    """