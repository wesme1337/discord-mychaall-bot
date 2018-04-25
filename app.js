const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json")

client.on("ready", () => {
	console.log("Bot initialized");
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
	if(newMember.voiceChannel && newMember.voiceChannel.name == 'The bois'){
		if(newMember.user.username.toLowerCase() == 'mychaall') {
			let channel = client.channels.find('name', 'The bois');
			channel.join().then(connection => {
				let audioFile = 'mychaall' + (Math.floor(Math.random() * 4) + 1) + '.mp3';
				const dispatcher = connection.playFile(audioFile);
				dispatcher.on('end', () => connection.disconnect());
			});
		}
	}
});

client.login(config.token);
