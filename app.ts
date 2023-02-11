import Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildPresences,
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
    const { content, author } = message;
    if (!message.author.bot && !message.author.system) {
        if (content.toLowerCase().includes('hello') || content.toLowerCase().includes('util')) {
            message.reply('Hello World! to you ' + author.username);
        }
    }
});

Client.on('messageCreate', async (message) => {
    const { content } = message;
    if (message.author.bot || message.author.system || !message.guild) return;

    if (content.toLowerCase().includes('teste')) {
        const listaDeMembros = await message.guild.members.fetch();
        listaDeMembros.forEach((member) => {
            if (!member.presence) return
            if (!member.presence.activities || member.presence.activities.length === 0) return
            const activity = member.presence.activities[0];
            if (activity.type === Discord.ActivityType.Playing) {
                console.log(`${member.displayName} está jogando ${activity.name}`);
            }
            if (activity.type === Discord.ActivityType.Watching) {
                console.log(`${member.displayName} está assistindo ${activity.details}`);
            }
        });
    }
    
});

Client.login(process.env.DISCORD_TOKEN);