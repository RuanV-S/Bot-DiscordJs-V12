const Discord = require ("discord.js");

module.exports = {
    name: "comandos",
    description: "commands",
    author: "Infity Studio.",

    async execute (client, message, args) {

        let commands = new Discord.MessageEmbed()
        .setAuthor(`Equipe Infinity Studio`, "https://cdn.discordapp.com/attachments/817783503764717568/835619137761706024/ticket.png")
        .setTitle(`**COMANDOS**`)
        .setDescription(`\n ** • embed [mensagem] =>** enviar mensagem via bot (administrador); \n ** • ban [@membro] [motivo] =>** banir membro; \n **• del [valor] =>** apagar mensagem(ns); \n **• ping =>** ver o ping do bot; \n **• fechar =>** fechar os tickets (administrador); \n **• kick [@membro] [motivo] =>** expulsar membro; \n **• valores =>** verificar os precos; \n **• ton =>** abrir o ticket (administrador); \n **• toff =>** fechar ticket (administrador); \n **• parceria =>** como ser parceiro; \n **• valores =>** valores dos produtos; \n ** • termos =>** nossos termos; \n ** • pagamento =>** formas de pagamentos; `)
        .setFooter(`Atenciosamente Infinity Studio.`)
        .setColor("#RANDOM")
        //.setImage(client.user.displayAvatarURL("https://cdn.discordapp.com/attachments/817783503764717568/835619137761706024/ticket.png"))
        .setThumbnail("https://cdn.discordapp.com/attachments/817783503764717568/835619137761706024/ticket.png")
        .setTimestamp()

        message.channel.bulkDelete(1);
        message.channel.send(commands)
        
    }

}