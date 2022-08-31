const Discord = require ("discord.js");

module.exports = {
    name: "parceria",
    description: "parceria command",
    author: "Infity Studio.",

    async execute (client, message, args) {       

        let studio = new Discord.MessageEmbed()        
        .setTitle(`Como ser Parceiro:`)
        .setDescription(`\n\n **Nossos parceiros tem benefícios, entre eles desconto de até 10% na sua primeira compra, acesso antecipado aos conteúdos e previews em tempo real dos trabalhos.**\n\n**Como faço para ser parceiro ?**
        \n*Se sua cidade tem interesse em parceria ou foi convidada por nós, você pode ser um dos nossos parceiros, tendo um servidor que contém 2k de membros.*\n\n**Quais termos para ser parceiro ?**\n *Ao fechar parceria conosco a cidade deve se responsabilizar em criar cargos de Parceiros/Designers para os criadores ''iRekkon e Black'' no Discord do servidor e ao inserir qualquer conteúdo nosso na city deve divulgar nosso trabalho nos marcando e postando o link do nosso Discord, Além disso pode opcionalmente criar uma sala para a divulgação do Infinity Studio.*`)
        .setFooter(`Atenciosamente Infinity Studio.`)
        .setColor("#1c95ff")        
        .setThumbnail("https://cdn.discordapp.com/attachments/687841977525338248/875169024114307122/Infinity-Logo.png")
        .setTimestamp()
        
        message.channel.bulkDelete(1);
        message.channel.send(studio)
        
    }

}