
async def SendNameExample(message):
    message = message.content.lower()
    print("message")
    await message.reply("Hello, " + message.author + "!")