const Discord = require ("discord.js");

module.exports = {
    name: "pagamento",
    description: "pagamento command",
    author: "Infity Studio.",

    async execute (client, message, args) {       

        let studio = new Discord.MessageEmbed()        
        .setTitle(`Formas de Pagamento:`)
        .setDescription(`\n\n**Aceitamos as seguintes formas de pagamentos:**\n\n<:pix:837145041147265024> **PIX**\n<:mercado:837145081051611216> **MERCADO PAGO**\n<:Boleto:837144997400281188> **BOLETO BANCÁRIO**\n\n\n*Em caso de compra via Boleto Bancário, será preciso enviar o comprovante e após o pagamento ser confirmado(demora entorno de 24hrs após o pagamento), será iniciado o procedimento, para realização do seu pedido.*`)
        .setFooter(`Atenciosamente Infinity Studio.`)
        .setColor("#1c95ff")        
        .setThumbnail("https://cdn.discordapp.com/attachments/687841977525338248/875169024114307122/Infinity-Logo.png")
        .setTimestamp()
        
        message.channel.bulkDelete(1);
        message.channel.send(studio)
        
    }

}