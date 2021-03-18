// configuration
// which functions use when 
const Discord2 = require('discord.js');
const client = new Discord.Client();  
const { token } = require("./config.json");
const importModule = require("./functions.js")
// import searchAndReply from "./functions.js"; //??


client.on('ready', () => {
    console.log(`${client.user.tag}! is here and ready to yell!`);
}); 


client.on("message", (msg) => importModule.searchAndReply(msg));
// (msg) => don't execute now, wait for smth (msg) 





client.login(token);















