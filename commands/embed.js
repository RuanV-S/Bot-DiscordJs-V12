const Discord = require ("discord.js");

module.exports = {
    name: "embed",
    description: "embed command",
    author: "Infity Studio.",

    async execute (client, message, args) {
        
        if(!message.member.roles.cache.some(role => role.id === "822264219813675008"))
        return message.reply("Você não tem permissão para usar este comando! Bobinho...")

        let mensagem = args.join(' ');
       // let titulo = args.join(' ');
        // if (!titulo[0]) return message.channel.send("Informe um titulo!");
       //  if (!titulo) titulo = "Insira um titulo";
        if (!mensagem) mensagem = "Informe a mensgem a ser enviada!";
        if (!mensagem[0]) return message.channel.send(`${message.author} Use o comando *embed titulo mensagem* !`);

        let studio = new Discord.MessageEmbed()
        .setAuthor(`Equipe Infinity Studio`)
        .setTitle(``)
        .setDescription(`${mensagem}`)
        .setFooter(`Atenciosamente Infinity Studio.`)
        .setColor("#2f3136")        

  
        message.channel.bulkDelete(1);
        message.channel.send(studio)
        
    }

}