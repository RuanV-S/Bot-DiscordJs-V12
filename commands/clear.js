module.exports = {
    name: 'del',
    description: "del message!",

    async execute(bot, message, args, Discord) {

        if(!args[0]) return message.reply("Digite a quantidade de mensagens para apagar!");
        if(isNaN(args[0])) return message.reply("Digite um valor real!");

        if(args[0] > 100) return message.reply("Limite maximo de 100 mensagens por vez!")
        if(args[0] < 1) return message.reply("Digite um valor de mensagens para deletar!")

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages);
        return message.reply(`**Foram apagadas ${args} mensagens **`) // ${message.author}
        })
        message.channel.bulkDelete(1);
    }
}