const Client = require('discord.js');
const client = new Client();
const request = require(__dirname + '/src/api/riot/LoL.js');
const config = request(__dirname + '/src/config/lol/appInfo.json');

exports.request = function (message, content) {
    request.get();
}