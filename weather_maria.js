const Discord = require('discord.js');
const client = new Discord.Client();

// I make a function for each small function
client.on('ready', () => {
    console.log(`${client.user.tag}! is here and ready to yell!`);
}); // function which checks if I am connected



const weather = require("weather-js");
console.log(typeof weather) // object

// to check if the library still exists, still working the same way is before

weather.find(
    { search: "Paris, France", degreeType: "C" },
    function (err, result) {
    if (err) console.log(err);

    // check if my phrase has keys I need, if there is an input, it is not empty
    // ex if I put METEO, I must receive an answer
    client.on("message", (msg) => {
        if (msg.content === "meteo") {
            msg.channel.send(fullMeteo);
            // or reply instead of channel.send
        }
    });

    // test that json in result has the keys that I need

    const weatherFull = result[0]
    const location = weatherFull["location"]
    const paris = location["name"]
    const weatherInfo = weatherFull["current"] // temp, wind, feelslike etc
    const temp = weatherInfo["temperature"]
    const wind = weatherInfo["windspeed"]
    const feels = weatherInfo["feelslike"]
    const sky = weatherInfo["skytext"]
    const humidity = weatherInfo["humidity"]
    
    const fullMeteo = `Weather in ${paris} today: ${sky}, temperature is ${temp}°C, real feeling is ${feels}°C, humidity level is ${humidity} and the speed of wind is ${wind} km/h. Have a lovely day!`
    // console.log(fullMeteo)// const temperature = 
    // console.log(result[0]["location"]["name"]);
    // console.log(result[0]["current"]["temperature"]);
    // console.log(result[0]["forecast"][0]['day']);
    }
);

const { token } = require("./config.json");
client.login(token);

