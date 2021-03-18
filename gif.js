const Discord = require('discord.js'); //remplacer Discord par {Client}
const {TOKEN, PREFIX} = require('./config');
const client = new Discord.Client(); //remplacer Dicord.Client par Client()
// const Canvas = require('canvas');
// client.commands = new Discord.Collection();


client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`);});


client.on('message', msg => { if (msg.content.startsWith(`${PREFIX}play`)) { msg.reply('Play What ?');} });
client.on('message', msg => { if (msg.content.includes(`sac`)) { msg.channel.send({files: ["./images/sac.jpg"]});} });

client.on("message", (msg) => { 
    if (msg.content === "bonne nuit" || msg.content === "ciao" || msg.content === "dodo") 
        {msg.channel.send({files: ["./images/soleil.gif"]});}

    else if (msg.content === "amour" || msg.content === "love" || msg.content === "coeur") 
        {msg.channel.send({files: ["./images/coeur.gif"]});}
    
    else if (msg.content === "merci" || msg.content === "thanks" || msg.content === "gracias") 
    {msg.channel.send({files: ["./images/merci.gif"]});}

    else if (msg.content === "aurevoir" || msg.content === "bye" || msg.content === "salut") 
    {msg.channel.send({files: ["./images/bye.gif"]});}
});

client.login(TOKEN);