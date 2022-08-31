const Discord = require ("discord.js");
const bot = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION",]});
const config = require ("./config.json");
const enmap = require('enmap');

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

// ACTIVITY BOT
async function sleep(ms) {
    return new Promise(
      (resolve, reject) =>
        setTimeout(() => resolve(), ms)
    )
  }
  async function initLoop() {
    let activities = [
      //``,
      //`Presente ${bot.guilds.cache.size} server(s)`,
      `Nosso discord`,
      `Feito por Entoa#8195, xande#4353`,     
      `Total de ${bot.users.cache.size} membros`
    ]
    
    while (true) {
      for (const activity of activities) {
        await bot.user.setPresence({
          activity: {
            type: 'STREAMING',
            name: activity,
            url: "https://www.twitch.tv/ent0a"
          }
        })
        await sleep(10000)
      }
    }
  }
  bot.on('ready', async () => {
    await initLoop();
});
// ACTIVITY BOT 

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
});

bot.on('guildMemberAdd', member => {

  let channelid = "821435815217332237"
  const embedmember = new Discord.MessageEmbed()
  .setAuthor("Bem vindo(a) ao servidor!")
  .setThumbnail(member.user.avatarURL())
  .setColor('#2c2f33') 
  .setDescription('*Parece que você caiu de paraquedas aqui ' + "<@" + member.id + ">" + ", Qualquer duvida abrá um ticket <#875518901004410940>.*")
  .setFooter(`ID do usuário: ${member.id}`)
  .setTimestamp(new Date())
  
  
  member.guild.channels.cache.get(channelid).send(embedmember);
});

bot.on('guildMemberRemove', member => {

  let channelid = "830591515323400272"
  const embedmember = new Discord.MessageEmbed()
  .setAuthor("Saiu do Servidor!")
  .setThumbnail(member.user.avatarURL())
  .setColor('#2c2f33')
  .setDescription('Eu não sei o que aconteceu ' + "<@" + member.id + ">" + ", mas se quiser voltar, saiba que estamos prontos para te receber!")
  .setFooter(`ID do usuário: ${member.id}`)
  .setTimestamp(new Date())
  
  
  member.guild.channels.cache.get(channelid).send(embedmember);
});


bot.on('messageReactionAdd', async (reaction, user) => {

    const atendimento = "🛒";
      if(user.partial) await user.fetch();
      if(reaction.partial) await reaction.fetch();
      if(reaction.message.partial) await reaction.message.fetch();
  
      if(user.bot) return;

      if(reaction.emoji.name == atendimento) {
          reaction.users.remove(user);

        let usuario = user.username
        let final = usuario.toLowerCase()
       
        let canalzinho = `ticket-${final}`;

          if (reaction.message.guild.channels.cache.find(channel => channel.name === canalzinho)) {
                 return reaction.message.channel.send(`<@${user.id}>, voce ja tem canal mongol`).then(message => {
                  message.delete({ timeout: 7000 })
                }) 

          }

          reaction.message.guild.channels.create(`ticket-${final}`, {
              permissionOverwrites: [
                  {
                      id: user.id,
                      allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                  },
                  {
                      id: reaction.message.guild.roles.everyone,
                      deny: ["VIEW_CHANNEL"]
                  }
              ], 
              type: 'text',
              parent: '821435815754072095', //category
              topic: 'Bem vindo'

          }).then(async feraa => {
              feraa.send(`<@${user.id}>`, new Discord.MessageEmbed()
                  .setTitle("Bem vindo(a)")                  
                  .setDescription("\nSomente você e os administradores possuem acesso a esta sala. Para melhor resolução e remoção de dúvidas inclua o máximo de detalhes o possível.")
                  .setImage("https://cdn.discordapp.com/attachments/687841977525338248/875539391135752212/comandos.png")
                  .setColor("#1c95ff")
                  .setFooter(`Atenciosamente Infinity Studio.`)                  
                  .setTimestamp())
              
          })         
    }
    
  })
  
bot.login(config.token)
