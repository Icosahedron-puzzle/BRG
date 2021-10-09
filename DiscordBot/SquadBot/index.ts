import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
require('dotenv').config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'dew it') {
        message.reply({
            "content": "Test",
            "embeds": [
                {
                    "description": "Below",
                    "color": 5814783,
                    "fields": [
                        {
                            "name": "Name",
                            "value": "LittleRayne",
                            "inline": true
                        },
                        {
                            "name": "Characters",
                            "value": "GBA\nSun Fac\nSoldier\nSpy\nPoggle",
                            "inline": true
                        },
                        {
                            "name": "Current Gear",
                            "value": "G13\nG12\nG12\nG12\nG12",
                            "inline": true
                        }
                    ]
                }
            ]
        })
    }
})

client.login(process.env.TOKEN)