// const Discord = require('discord.js');
// const client = new Discord.Client();  
// const { token } = require("./config.json");
// client.login(token);


// client.on("message", (msg) => {
//     if (msg.content === "!meteo") {
//         msg.channel.send(fullMeteo);
//         // or reply instead of channel.send
//     }
// });

const importFile = require('./functions_weather.js');

const { response } = require('./functions_weather.js');

importFile.parseResult
importFile.findWeather
importFile.response