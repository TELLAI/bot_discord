const weather = require("weather-js");

const details = {
    search: "Paris, France", 
    degreeType: "C",
}

// second hand functions which I don't export

function getWeather() { // promise is used to wait for smth 
    return new Promise((resolve, reject) => { // copy paste , resolve = success, in our case we get a string
        weather.find(details, async (err, result) => {
            let weatherParis = parseResult(err, result);
            // console.log(weatherParis + "WEATHER PARIS")
            if(weatherParis) resolve(weatherParis); // if we got a string we succeeded 
            else reject();
    });
});

}

function parseResult(err, result)  {
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
    console.log(fullMeteo);
    return fullMeteo;
    }


module.exports = {
// function I export to use in index.js

    searchAndReply: async function (msg) {
        try {
            if (msg.content === "meteo") { // I need msg and I must have async to wait for the reply from the library
                let fullMeteo = await getWeather(); 
                msg.channel.send(fullMeteo);
                // or reply instead of channel.send
            }
        } catch(err) {
            console.log("message error: ", err)
        }
    }

}





