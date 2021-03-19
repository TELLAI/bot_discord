const json1: any = require("./json_word/wordlist_byPOS.json");
const obj1: any = JSON.parse(JSON.stringify(json1));

const json2: any = require("./blagues.json");
const obj2: any = JSON.parse(JSON.stringify(json2));

const { token, PREFIX }: any = require("./config");

const weather = require("weather-js");

import * as ins from "./lib_fonction";

const details = {
  search: "Paris, France", 
  degreeType: "C",
}
export function getWeather() { // promise is used to wait for smth 
  return new Promise((resolve, reject) => { // copy paste , resolve = success, in our case we get a string
      weather.find(details, async (err, result) => {
          let weatherParis = parseResult(err, result);
          // console.log(weatherParis + "WEATHER PARIS")
          if(weatherParis) resolve(weatherParis); // if we got a string we succeeded 
          else reject();
  });
});

}
export function parseResult(err, result)  {
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
export async function searchAndReply(msg) {
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
  export function randWord(){
  const list_word : any = [];
  const ponct : string = " ==> ";
  let count : number = 1;
    for (let i = 0; i < 10; i++) {
      let clé : any = Object.keys(obj1)[
        Math.floor(Math.random() * Object.keys(obj1).length)
      ];
      let prefix : string = ((count).toString()).concat("", ponct)
      let word : string = prefix.concat(obj1[clé][Math.floor(Math.random() * obj1[clé].length)]);
      list_word.push(word);
      count++;
    }
    return list_word;
  }
    export function randBlague(){
    let blague : any = Object.values(obj2)[Math.floor(Math.random() * Object.keys(obj2).length)];
        return blague;
    }
    export async function response(myclient){
    myclient.on("message", (msg) => {
      try {
    
        if (msg.content === 'english'){
            let liste : any = ins.randWord()
            msg.channel.send(liste);
        }
        else if (msg.content === 'hello'){
        msg.reply(`Salut !`);
        }
        else if (msg.content === 'blague'){
        let blague : any = ins.randBlague()
        console.log(typeof(blague))
        msg.channel.send(blague["joke"] + "\n\n" + blague["answer"])
        }
              else if (
                msg.content === "bonne nuit" ||
                msg.content === "ciao" ||
                msg.content === "dodo"
              ) {
                msg.channel.send({ files: ["./images/soleil.gif"] });
              } else if (
                msg.content === "amour" ||
                msg.content === "love" ||
                msg.content === "coeur"
              ) {
                msg.channel.send({ files: ["./images/coeur.gif"] });
              } else if (
                msg.content === "merci" ||
                msg.content === "thanks" ||
                msg.content === "gracias"
              ) {
                msg.channel.send({ files: ["./images/merci.gif"] });
              } else if (
                msg.content === "aurevoir" ||
                msg.content === "bye" ||
                msg.content === "demain"
              ) {
                msg.channel.send({ files: ["./images/bye.gif"] });
              }
               else if (msg.content.startsWith(`${PREFIX}play`)){
                   msg.reply("Play What ?");
               }
              else if (msg.content.includes(`sac`)){
                  msg.channel.send({ files: ["./images/sac.jpg"] });
              }
              else if (msg.content === "meteo"){
                ins.searchAndReply(msg)
              }
            }
              catch(err) {
                console.log("message error: ", err)
            }
    })
}
