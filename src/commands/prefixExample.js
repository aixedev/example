const { EmbedBuilder, Message, Client } = require("discord.js");

module.exports = {

  slash: false,

  name: ["yardım"],

  /**
   * 
  * @param {Client} client
  * 
  * @param {Message<true>} message
  * 
  * @param {string[]} args
  * 
  */

  async execute(client, message, args) {
    
    const Embed = new EmbedBuilder()

      .setColor("Blurple")

      .setAuthor({ name: `${client.user.username} | Yardım menüsü`, iconURL: client.user.avatarURL() })

      .setDescription(`Prefix komut örneği`)

      .setFooter({ text: message.author.username, iconURL: message.author.avatarURL() })

      .setTimestamp();

    await message.reply({ embeds: [ Embed ] });

  },
  
};
