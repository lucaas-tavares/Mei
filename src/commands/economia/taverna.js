const Discord = require('discord.js');
const banner = require('../../constants/shop.json')
const MeiButton = require('../../functions/buttonBuilder')

module.exports = {
    name: "taverna",
    aliases: ["shop", "tv"],
    description: "🌌 Compre items na taverna",
    category: "economy",
    run: async(client, message, args) => {

        let embed = new Discord.EmbedBuilder()
        .setTitle(client.FormatEmoji("{e:tavern} Taverna Dimensional"))
        .setDescription(client.FormatEmoji(`> {dance}**︰${message.author.username}**, bem vindo(a) a Taverna, aqui você pode encontrar **vários resquicios** e **itens** de outras dimensões`))
        .setColor("#97989a")

        let button = MeiButton([
            {label: "Banners", customId: `[banner. ${message.author.id}]`, style: "Secondary"}
        ])

        message.channel.send({embeds: [embed], components: [button]})
    }
}
