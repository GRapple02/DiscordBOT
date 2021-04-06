const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path');

const token = require('./config/keys.json');
const lol = require('./api/riot/LoL.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    let content = message.content;
    
    if (content.length < 2)
        return;

    if(content.substr(0,2) === '!!') {
        content = content.substr(2);

        let game = content.split(' ')[0];
        content = content.substr(game.length + 1);

        if (game === 'lol')
            lol.request(message, content);
        else if(game === 'bg')
            message.reply("배그")
        else if (game === 'r6') {
            message.reply('레식')
        }
    }
});

client.login(token.token);