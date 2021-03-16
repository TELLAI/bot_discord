const Discord = require('discord.js');
const client = new Discord.Client();

//client is a way to communicate to discord
client.on('ready', () => {
    console.log(`Bot_Maria is here and ready to yell ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (msg.content === "Marco") {
        msg.channel.send("Polo");
        // or reply instead of channel.send
    }
});

client.on("message", (msg) => {
    if (msg.content === "lol") {
        msg.channel.send("mdr!!! On est en France! ");
        // or reply instead of channel.send
    }
});

client.on("message", (msg) => {
    if (msg.content === "Salut" || msg.content === "slt" || msg.content === "Bonjour" || msg.content === "salut" || msg.content === "bonjour") {
        msg.channel.send("🤩 I'm soooooo happy to see YOU!!!!");
        // or reply instead of channel.send
    }
});



// logging in
const { token } = require("./config.json");
client.login(token)