const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kick command",

    async execute(bot, message, args, Discord) {

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Você não pode usar este comando, **TROUXA**!!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if(!reason[0]) return message.channel.send("Informe o motivo");
        if (!reason) reason = "Sem motivo informado";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`Expulso de **${message.guild.name}**`)
        .setDescription(`**Motivo**: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Informe um usuário!");

        if(!mentionMember) return message.channel.send("Este usuário não é um usuário válido / não está mais no servidor!");

        if(!mentionMember.kickable) return message.channel.send("Não consegui expulsar este usuário!");

        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("Eu não podia chutar esse usuário! Desculpe...");
        }
    }
}