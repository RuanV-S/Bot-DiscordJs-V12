const Discord = require ("discord.js");

module.exports = {
    name: "termos",
    description: "termos command",
    author: "Infity Studio.",

    async execute (client, message, args) {       

        let studio = new Discord.MessageEmbed()        
        .setTitle(`Termos e Condições:`)
        .setDescription(`\n\nNossos trabalhos se tratam de processos criativos e um pacote completo leva de 2 a 3 semanas para ser feito, sempre mandamos previews com intenção de sempre querer colocar em pratica o que você tem em mente.\n\nNão faremos COPIAS ou PLÁGIOS de nenhum trabalho que seja nosso ou não.
        Prezamos pela originalidade em cada trabalho podendo haver pontos de inspirações em um tema ou arte já feita.\n\nPrimeiramente, ao comprar nossos produtos, você aceita o termo que impossibilita qualquer tipo de reembolso após o inicio da criação de um produto, alem disso, precisamos que seja muito preciso ao descrever oque espera receber de nós.\n\n**Como assim ?**\n\nDescreva com o máximo de detalhes oque deseja por em pratica, sempre disponibilizaremos previews para que você possa visualizar se esta tudo de acordo com o que esperava.\n\nUma vez o trabalho pronto, não haverá possibilidade de mudança ou alterações de nenhum tipo.
        \n\nTrabalhamos como uma fila, damos o prazo de 2 a 3 semanas para o termino do trabalho, porem, podemos entregar antes desse prazo, então, tenha paciência no aguardo dos seus produtos, a não ser que tenha interesse de adquirir o <@&847523991187226634> , que faz com que o seu lugar da fila vá para frente de todos, e iremos dedicar 100% no seu trabalho e entregar o quanto antes.`)
        .setFooter(`Atenciosamente Infinity Studio.`)
        .setColor("#1c95ff")        
        .setThumbnail("https://cdn.discordapp.com/attachments/687841977525338248/875169024114307122/Infinity-Logo.png")
        .setTimestamp(new Date())
        
        message.channel.bulkDelete(1);
        message.channel.send(studio)
        
    }

}