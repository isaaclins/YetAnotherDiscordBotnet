import discord
from discord.ext import commands
from discord.ext.commands import Bot

intents = discord.Intents.all()
intents.members = True
client = discord.Client(intents=intents)