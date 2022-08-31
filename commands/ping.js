const Discord = require('discord.js')

module.exports = {
    name: "ping", 
    description: "ping command",

    async execute(bot, message, args, Discord) {

        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓 Ping API \`${Date.now() - message.createdTimestamp} ms\``);

        message.channel.send(ping) //so it replys to the `.ping` command
    }
}