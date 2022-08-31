const Discord = require('discord.js')

module.exports = {
    name: "ton",
    description: "open-ticket",

    async execute(bot, message, args, Discord) { 

        if(!message.member.roles.cache.some(role => role.id === "821435814876676158","821435814876676157","821435814876676158","834866738369265715"))
            return message.reply("Você não tem permissão para usar este comando! Bobinho...").then(msg => {setTimeout(() => msg.delete(), 5000)});
          
        if (message.channel.id != "875518901004410940") return message.reply('Use esse comando no chat <#834864219581054996>').then(msg => {setTimeout(() => msg.delete(), 5000)});

        var conteudo = 25
        message.channel.bulkDelete(conteudo)

        const ticket = new Discord.MessageEmbed ()
        .setTitle("**Atendimento • Infinity Studio**")
        .setDescription("Bem-vindo ao Atendimento da Infinity Studio. Reaja no emoji abaixo para podermos ajudar! 🛒\n\n**Ao comprar conosco você concorda com nossos termos e condições.**") //\n\n[📩] ➔ Dúvidas\n\nAo comprar conosco você concorda com nossos termos e condições.**")
        .setImage("https://cdn.discordapp.com/attachments/687841977525338248/875175536467509308/Ticket.png")
        .setFooter("Atenciosamente, Equipe Infinity Studio.")
        .setColor("#1c95ff")
        //var lista = ("📩")
        var lista2 = ("🛒")
        var enviar = await message.channel.send(ticket)
        enviar.react(lista2)  
        //enviar.react(lista)        
        
    }                               
}