const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag}! is here and ready to yell!`);
});



var weather = require("weather-js");

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find(
  { search: "San Francisco, CA", degreeType: "F" },
  function (err, result) {
    if (err) console.log(err);

    // console.log(JSON.stringify(result, null, 2));
    console.log(typeof(result[0]))
    console.log(result[0]["location"]["name"]);
    console.log(result[0]["current"]["temperature"]);
    console.log(result[0]["forecast"][0]['day']);
  }
);

const { token } = require("./config.json");
client.login(token);