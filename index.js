const { Client, Partials, Events,EmbedBuilder,ChannelType,ButtonBuilder,ActionRowBuilder,ButtonStyle, PermissionsBitField } = require("discord.js");

const client = new Client({ intents: 131071, partials: Object.values(Partials).filter((x) => typeof x === "string"), shards: "auto" });

require("./src/handlers/commandHandler.js")(client);

client.login(config.Client.bot_token);