import Discord from 'discord.js';
import dotenv from 'dotenv';
import { Options } from './src/classes/Options';
import Jokenpo from './src/classes/Jokenpo';
import Game from './src/classes/Game';
import AcharNumeroNoArray from './src/utils/utils';

dotenv.config();

const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildPresences,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.Guilds,
    ], partials: [
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent,
    ],
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

    if (content.toLowerCase().includes('listar')) {
        const listaDeMembros = await message.guild.members.fetch();
        listaDeMembros.forEach((member) => {
            if (!member.presence) return;
            if (!member.presence.activities || member.presence.activities.length === 0) return;
            const activity = member.presence.activities[0];
            console.log(activity);
            
            if (activity.type === Discord.ActivityType.Playing) {
                console.log(`${member.displayName} está jogando ${activity.name}`);
            }
            if (activity.type === Discord.ActivityType.Watching) {
                console.log(`${member.displayName} está assistindo ${activity.details}`);
            }
        });
    }

});

const regEx = /\bpedra\b|\bpapel\b|\btesoura\b/;

// Por padrao joga 3 rounds para depois exibir o resumo
let gameList = new Game();

Client.on('messageCreate', async (message) => {
    const { content } = message;
    const msg = content.toLowerCase();

    if (message.author.bot || message.author.system || !message.guild) return;

    // Sempre antes de cada jogo ve se vc quer jogar por rounds ex.: 10 rounds
    if (msg.includes('rounds')) {
        const num = AcharNumeroNoArray(msg.split(' '));
        if (num) {
            gameList = new Game(num);
        }
    }

    // Cada mensagem verifica por regex se escolheu pedra papel tesoura e gera a resposta do bot
    if (regEx.test(msg)) {
        let game: Jokenpo;

        if (msg === 'pedra') {
            game = new Jokenpo(Options.Pedra);
        }
        else if (msg === 'papel') {
            game = new Jokenpo(Options.Papel);
        }
        else {
            game = new Jokenpo(Options.Tesoura);
        }

        message.reply(`${game.computerChoiceText} \n${game.GetResultado()}`);

        gameList.addNewJokenpo(game);
    }

    // Quando terminado todos os rounds exibe o resultado e pergunta quantos rounds gostaria de jogar
    if (gameList.finished) {
        message.reply(gameList.summary);
        message.reply('Quantos rounds gostaria de jogar?');
        gameList = new Game();
    }
});

Client.on('presenceUpdate', async (oldP, newP) => {

    const channel = await Client.channels.fetch('1072336531282473011', {});
    // console.log(`presenceUpdate: ${oldP} | ${newP}`);

    const textChannel = channel as Discord.TextChannel;

    if (!newP.activities || newP.activities.length === 0) return;

    const activity = newP.activities[0];
    if (activity.type === Discord.ActivityType.Playing) {
        textChannel.send(`Alá! ${newP.user?.username} está jogando ${activity.name}`);
    }
    if (activity.type === Discord.ActivityType.Watching) {
        textChannel.send(`Alá! ${newP.user?.username} está assistindo ${activity.details}`);
    }

    // console.log(`Canais: ${canais}`);
});

Client.login(process.env.DISCORD_TOKEN);