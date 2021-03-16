const Discord = require('discord.js');
const client = new Discord.Client();

//client is a way to communicate to discord
client.on('ready', () => {
    console.log(`${client.user.tag}! is here and ready to yell!`);
});

const weather = require('weather-js');


// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'Paris, France', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
});







// logging in
const { token } = require("./config.json");
client.login(token)

