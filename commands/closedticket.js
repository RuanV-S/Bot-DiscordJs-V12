const Discord = require('discord.js')

module.exports = {
    name: "fechar",
    description: "closed-ticket",

    async execute(bot, message, args, Discord) {

        if(!message.member.roles.cache.some(role => role.id === "821435814876676158","821435814876676157","821435814876676158","834866738369265715"))
        return message.reply("Você não tem permissão para usar este comando! Bobinho...")

        if (!message.channel.name.includes('ticket-'))
        return message.channel.send('voce nao pode fazer aqui');
        message.channel.delete();
 
    }
}