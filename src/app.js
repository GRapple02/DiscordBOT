const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./config/keys.json')

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}');
});

client.on('message', msg => {
    let content = msg.content;
    if(content[0] === '!') {
        content = content.slice(1);

        if (content === 'lol')
            msg.reply("롤")
    }
});

client.login(token.token);