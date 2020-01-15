const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjYyMzQ0MDgwNDcwMDQ4Nzc5.Xh-i6Q.A5rM6Pc81rLWg_2X63IIA2Tqi-4);
