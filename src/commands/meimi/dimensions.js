const Discord = require('discord.js');
const MeiButton = require('../../functions/buttonBuilder')

module.exports = {
  name: "guild-info",
  aliases: ["gf", "guild", "ginfo"],
  description: '☕ Ver informações de servidores que a meimi gerência.',
  DevOnly: true,
  category: "developers",
  run: async (client, message, args) => {

    const embed = new Discord.EmbedBuilder()
      .setTitle('Info - Dimensões [❗]')
      .setDescription('## ﹝💜﹞・Atenção!!\n> - Apertando o botão abaixo mostrará algumas informações armazenadas no banco de dados sobre as dimensões onde resido.')
      .setColor("#2f3136");

      let servers = MeiButton([{
        label: "Ver lista",
        customId: `[guild-info, ${message.author.id}]`,
        style: "Danger",
        emoji: "📜",
      }]);


    message.channel.send({ embeds: [embed], components: [servers] });
  }
};
