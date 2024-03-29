const Discord = require("discord.js");
const Server = require("../../mongoDB/schemas/guildschema");

module.exports = [
  {
      id: 'open-primary',
      authorOnly: true,
  run: async (client, interaction) => {

      const modal = new Discord.ModalBuilder()
        .setCustomId('edit-values')
        .setTitle('Forneça os valores da embed.');
    
      let titleContent = new Discord.ActionRowBuilder().addComponents(
       new Discord.TextInputBuilder()
         .setCustomId('content-title')
         .setLabel('Título da embed.')
         .setStyle(Discord.TextInputStyle.Short)
         .setMaxLength(80)
      )
      
      let descriptionContent = new Discord.ActionRowBuilder().addComponents(
        new Discord.TextInputBuilder()
        .setCustomId('content-description')
        .setLabel('Descrição da Embed.')
        .setStyle(Discord.TextInputStyle.Paragraph),
      ) 
      
      let colorContent = new Discord.ActionRowBuilder().addComponents(
        new Discord.TextInputBuilder()
        .setCustomId('content-color')
        .setLabel('Cor da embed em Hexa.')
        .setStyle(Discord.TextInputStyle.Short)
        .setMaxLength(7)
      )
   
     modal.addComponents(titleContent, descriptionContent, colorContent)
     await interaction.showModal(modal);
    
  }
}, {
  id: 'open-secondary',
  authorOnly: true,
    run: async (client, interaction) => {

      const modal = new Discord.ModalBuilder()
        .setCustomId('edit-values')
        .setTitle('Forneça os valores da embed.');
        
        let thumbnailContent = new Discord.ActionRowBuilder().addComponents(
        new Discord.TextInputBuilder()
        .setCustomId('content-thumbnail')
        .setLabel('Link da Thumbnail.')
        .setStyle(Discord.TextInputStyle.Short),
       )

       let imageContent = new Discord.ActionRowBuilder().addComponents(
        new Discord.TextInputBuilder()
        .setCustomId('content-image')
        .setLabel('Link da imagem.')
        .setStyle(Discord.TextInputStyle.Short),
       )
    
    modal.addComponents(thumbnailContent, imageContent)
    await interaction.showModal(modal);
  }
}, {
  
  id: 'preview',
  authorOnly: true,
  run: async (client, interaction) => {
    
    let values = await Server.findOne({ _id: interaction.guild.id})
    const title = values.title;
    const description = values.description;
    const color = values.color || "#2f3136";
    const thumbnail = values.thumbnail;
    const image = values.image ;

    let embed = new Discord.EmbedBuilder()
    .setDescription(description)
    .setColor(color)

    if (image){
      embed.setImage(image)
    }
    interaction.reply({ embeds: [embed]})
  }
}]
