const Discord = require('discord.js');
const User = require('../../mongoDB/schemas/userschema')

module.exports = {
    name: "honra",
    aliases: ["rep", "honor"],
    description: "🔮 De sua honra para um viajante.",
    category: "members",
    run: async(client, message, args) => {    
        
        const user = message.mentions.members.first();
        if (!user) return message.reply(client.FormatEmoji(`> - {e:erro} Mencione o viajante que você deseja honrar.`));
        
        let userDB = await User.findOne({_id: user.user.id})
        if (user.user.id === message.author.id) return message.reply(client.FormatEmoji(`> - {e:erro} Você não pode honrar a si mesmo, seria muito narcisismo da sua parte.`));
        
        userDB.honor += 1;
        await userDB.save()
        message.reply(client.FormatEmoji(`> {honor}︰${user.user} acaba de receber uma honra de ${message.author}, agora ele possui **${userDB.honor.toLocaleString()} Honras.**`))        
        
    }
}
