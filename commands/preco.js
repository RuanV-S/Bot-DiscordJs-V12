const Discord = require ("discord.js");

module.exports = {
    name: "valores",
    description: "valores command",
    author: "Infity Studio.",

    async execute (client, message, args) {       

        let studio = new Discord.MessageEmbed()        
        .setTitle(`Tabela de Preços:`)
        .setDescription(`\n\nLogo: 80,00\nGif para discord: 100,00\nGif para dentro do servidor: 50.00\nLoadscreen Estatica: 150,00\nLoadscreen Animada : 250,00\nBotoes de planos vips: 40,00\nBanner para discord: 30,00`)
        .setFooter(`Atenciosamente Infinity Studio.`)
        .setColor("#1c95ff")        
        .setThumbnail("https://cdn.discordapp.com/attachments/687841977525338248/875169024114307122/Infinity-Logo.png")
        .setTimestamp()
        
        message.channel.bulkDelete(1);
        message.channel.send(studio)
        
    }

}