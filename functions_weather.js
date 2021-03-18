const Discord = require('discord.js');
const client = new Discord.Client();   
client.on('ready', () => {
    console.log(`${client.user.tag}! is here and ready to yell!`);
});
const weather = require("weather-js");
const details = {
    search: "Paris, France", 
    degreeType: "C",
}

module.exports = {
    
    response: function(fullMeteo) {
        client.on("message", (msg) => {
            if (msg.content === "meteo") {
                msg.channel.send(fullMeteo);
                // or reply instead of channel.send
            }
        });
    },

    parsing_json: parseResult = (err, result) => {
        if (err) console.log(err);

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
        response(fullMeteo);
        // console.log(fullMeteo)
        // console.log(typeof fullMeteo)
        return fullMeteo;
        },

    get_weather: function findWeather() {
        weather.find(details, (err,result) => parseResult(err, result) 
        );

    }



}
const { token } = require("./config.json");
client.login(token);

// module.exports = {
//     parseResult
// }












// export function Course() {
//     this.id = '';
//     this.name = '';
// };
// import { Course } from './course.js';





// function connection() {
//     // I make a function for each small function
//     client.on('ready', () => {
//         console.log(`${client.user.tag}! is here and ready to yell!`);
//     }); // function which checks if I am connected

// }   
// connection()
