const Discord = require('discord.js')
const MeiButton = require('../../functions/buttonBuilder')

module.exports = {
    name: "mei",
    aliases: ["mei-info"],
    description: "📌 Veja as informações sobre a Mei",
    category: "informations",
    run: async(client, message) => {
        let button = MeiButton([
            {label: "Minha dimensão", style: "Link", url: "https://discord.gg/WRka7bGqQ2"},
            {label: "Me adicione", style: "Link", url: "https://discord.com/oauth2/authorize?client_id=1189612874449031330&permissions=8&scope=bot"}
        ])
       
        let meiInformation = new Discord.EmbedBuilder()
        .setAuthor({name:`${client.user.username}`, iconURL: client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 })})
        .setImage("https://i.imgur.com/NS1GVjf.png")
        .setColor("#a14bee")
        .setDescription(`- 👋**︰**E aí, pequeno viajante, tudo bem? Eu sou a **${client.user.username}** e parabéns, porque a partir de agora, eu serei a sua guardiã.\n
        > Eu surgi através de **desejos nobres** de pequenos viajantes que buscavam por entretenimento e conforto em seus últimos momentos.
        > Fui desenvolvida utilizando a biblioteca [discord.js](https://discord.js.org/) pelo meu sensei **[eu.ikki](https://www.instagram.com/eu.ikki/)**. \n\n- 💜**︰**Atualmente eu possuo **${client.commands.size} comandos**, faço parte de **${client.guilds.cache.size} dimensões** e estou protegendo cerca de **${client.users.cache.size} viajantes**.`)
    
    message.reply({embeds: [meiInformation], components: [button]})
    }
}