const Discord = require('discord.js');
const client = new Discord.Client();  
const { token } = require("./config.json");

import * as imp from "./functions_weather.js";

client.on("ready", () => {
    console.log(`Login as ${client.user.tag}`);
    imp.message(client);
});

export function message(fullMeteo) {
    client.on("message", async (msg) => {
        try {
            if (msg.content === "meteo") {
                let fullMeteo = await imp.getWeather();
                console.log(fullMeteo) // returns undefined 
                msg.channel.send(fullMeteo);
                // or reply instead of channel.send
            }
        } catch(err) {
            console.log("message error: ", err)
        }
    });
}

imp.parseResult
imp.getWeather
imp.message

client.login(token);