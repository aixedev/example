const { ActivityType, Client } = require("discord.js");

const config = require("../../config.js");

module.exports = {

  name: "ready",

  /**
  * 
  * @param {Client} client
  * 
  */

  async execute(client) {

    console.log(`[CLIENT] Succesfully connected to Discord API.`);

    client.user.setActivity({ name: config.client.bot_status, type: ActivityType.Custom, state: config.client.bot_status })

  },
  
};