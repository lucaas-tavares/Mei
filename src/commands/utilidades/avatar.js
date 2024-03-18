const Discord = require('discord.js');
const MeiButton= require('../../functions/buttonBuilder');

module.exports = {
    name: "avatar",
    aliases:["av"],
    description: "🎈 Veja o seu avatar ou de um usuário.",
    category: "utility",
    run: async(client, message) => {
        
        const user = message.mentions.users.first() || message.author;
        const avatar = user.avatarURL({ extension: 'png', dynamic: true, size: 2048 });

        let embed = new Discord.EmbedBuilder()
        .setTitle(`💜 Avatar de ${user.username}`)
        .setColor('#97989a')
        .setImage(avatar)

        if(user.id === message.author.id) {
            embed.setFooter({text: "💀 Apesar de tudo, ainda é você!"})
        }
        
        if(user.id === client.user.id) {
            embed.setFooter({text: "🌺 as vozes dizem que sou eu!"})
        }
        
        message.reply({embeds: [embed]})
    }
}