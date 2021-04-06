const {Client} = require('discord.js');
const client = new Client();
const path = require('path');
const request = require(path.join(rootPath, '/src/api/CommonAPI.js'));
const config = require(path.join(rootPath, '/src/config/lol/appInfo.json'));

exports.request = async (message, content) => {
    const args = content.split(' ');
    const header = {
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "discord",
        "X-Riot-Token": `${config.riotKey}`
    };

    let body = {};
    let result;

    switch (args[0]) {
        case 'userInfo':
            body = {"name": args[1]};

            try {
                result = await request.get(`${config.domain}/lol/summoner/v4/summoners/by-name/${body.name}`, header, body);

                message.reply(`소환사명 : ${result.name}\n
                            소환사레벨 : ${result.summonerLevel}`);
            } catch(error) {
                console.log('error :>> ', error);
            }
            
            break;
        default:
            console.log('command[0] :>> ', command[0]);
            console.log('error');
            break;
    }
}