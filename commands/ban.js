const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",

    async execute(bot, message, args, Discord) {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Você não pode usar este comando, **TROUXA**!!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if(!reason[0]) return message.channel.send("Informe o motivo");
        if (!reason) reason = "Sem motivo informado";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Banido de **${message.guild.name}**`)
        .setDescription(`**Motivo**: ${reason}`)
        .setColor("#1c95ff")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Informe um usuário!");

        if(!mentionMember) return message.channel.send("Este usuário não é um usuário válido / não está mais no servidor!");

        if(!mentionMember.bannable) return message.channel.send("Não consegui banir este usuário!");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Banido: " + mentionMember.user.tag));
    }
}