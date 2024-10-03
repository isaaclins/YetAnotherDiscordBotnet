import discord
import json

with open("settings.json") as f:
    data = json.load(f)
    bottoken = data["bottoken"]
    bottoken = data["bottoken"]

intents = discord.Intents.all()
intents.members = True
client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f"We have logged in as {client.user}")


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith("!hello"):
        await message.channel.send("Hello!")


client.run(bottoken)
