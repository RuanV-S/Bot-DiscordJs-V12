const Discord = require('discord.js')

module.exports = {
    name: "toff",
    description: "open-ticket",

    async execute(bot, message, args, Discord) {

    if(!message.member.roles.cache.some(role => role.id === "821435814876676158","821435814876676157","821435814876676158","834866738369265715"))
        return message.reply("Você não tem permissão para usar este comando! Bobinho...").then(msg => {setTimeout(() => msg.delete(), 5000)});
 
    if (message.channel.id != "875518901004410940") return message.reply('Use esse comando no chat <#834864219581054996>').then(msg => msg.delete(5000));  
 
        var conteudo = 25
        message.channel.bulkDelete(conteudo)
        let sicon = message.guild.iconURL;

        const ticket = new Discord.MessageEmbed ()
        .setTitle("**Atendimento • Infinity Studio**")
        .setDescription("O nosso atendimento está **indisponível** no momento, tente novamente em breve..")
        .setFooter("Bot developed by xande#4353 & Entoa#8195", sicon)
        .setColor("#002ad4")
        .setThumbnail("https://cdn.discordapp.com/attachments/687841977525338248/865239680650706984/Walppaperdiscord.png")
        .setTimestamp()
        message.channel.send(ticket)
    }
}