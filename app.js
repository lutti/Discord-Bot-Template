const Discord = require('discord.js');
const { token } = require('./config.json');

const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.Guilds
    ], partials: [
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent
    ]
});

Client.on('ready', (client) => {
    console.log('This bot is now online: ' + client.user.tag);
});

Client.on('messageCreate', (message) => {
    const { content } = message;
    if (!message.author.bot) {
        if (content.toLowerCase().includes('hello') || content.toLowerCase().includes('util')) {
            message.reply('Hello World!');
        }
    }
});

Client.login(token);