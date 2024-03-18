const Discord = require("discord.js")
const User = require('../../mongoDB/schemas/userschema');

module.exports = {
  name: 'set-vip',
  aliases: ["stv"],
  description: '☕ Adicione um vip para um membro!',
  DevOnly: true,
  category: "developers",
  run: async (client, message, args) => {

    let member = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!member) return message.reply("Por favor, mencione um usuário ou forneça um ID de usuário para adicionar o vip.");

    let userDB = await User.findOne({ _id: member.id });
    if (userDB && userDB.vip) {
      return message.reply(`( <:erro:1167968027816513668> ) O/A member <@${member.id}> já tem o vip!`)
    }

    if (userDB) {
        userDB.vip = true;
        userDB.vipExpires = new Date(Date.now() + 1000*60*60*24*30); 
      await userDB.save();
    }

    message.reply(`- \`(\` <a:dance:1170257127995101195> \`)\` - Vip cogumelo foi adicionado a/ao member <@${member.id}>!`)

  }  
}
