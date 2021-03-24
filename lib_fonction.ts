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
export function parseResult(err, result) : string {
  if (err) console.log(err);

  const weatherFull : string = result[0]
  const location : string = weatherFull["location"]
  const paris : string = location["name"]
  const weatherInfo : string = weatherFull["current"] // temp, wind, feelslike etc
  const temp : string = weatherInfo["temperature"]
  const wind : string = weatherInfo["windspeed"]
  const feels : string = weatherInfo["feelslike"]
  const sky : string = weatherInfo["skytext"]
  const humidity : string = weatherInfo["humidity"]
  
  const fullMeteo : string = `Weather in ${paris} today: ${sky}, temperature is ${temp}°C, real feeling is ${feels}°C, humidity level is ${humidity} and the speed of wind is ${wind} km/h. Have a lovely day!`
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

  export function randWord(): string[]{
  const list_word : string[] = [];
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
  export function convert_msg(msg : any, txt : string){
    try {
      if (txt === "english") {
        let liste: any = ins.randWord();
        msg.channel.send(liste);
        return liste;
      } else if (txt === "hello") {
        msg.channel.send(`Salut !`);
        return `Salut !`;
      } else if (txt === "blague") {
        let blague: any = ins.randBlague();
        msg.channel.send(blague[0] + "\n\n" + blague[1]);
        return blague;
      } else if (
        txt === "bonne nuit" ||
        txt === "ciao" ||
        txt === "dodo"
      ) {
        msg.channel.send({ files: ["./images/soleil.gif"] });
        return "./images/soleil.gif";
      } else if (
        txt === "amour" ||
        txt === "love" ||
        txt === "coeur"
      ) {
        msg.channel.send({ files: ["./images/coeur.gif"] });
        return "./images/coeur.gif";
      } else if (
        txt === "merci" ||
        txt === "thanks" ||
        txt === "gracias"
      ) {
        msg.channel.send({ files: ["./images/merci.gif"] });
        return "./images/merci.gif";
      } else if (
        txt === "aurevoir" ||
        txt === "bye" ||
        txt === "demain"
      ) {
        msg.channel.send({ files: ["./images/bye.gif"] });
        return "./images/bye.gif";
      } else if (txt.includes(`sac`)) {
        msg.channel.send({ files: ["./images/sac.jpg"] });
        return "./images/sac.jpg";
      }
    } catch (err) {
      console.log("message error: ", err);
    }

  }
    export function randBlague(): string[]{
    const full_blague : any = Object.values(obj2)[Math.floor(Math.random() * Object.keys(obj2).length)];
    const blague: string[] = [full_blague["joke"], full_blague["answer"]];
        return blague;
    }
    export async function response(myclient){
    myclient.on("message", (msg) => {
      if (msg.content === "meteo"){
        ins.searchAndReply(msg);
      }
      else {
        const texte : string = msg.content
      convert_msg(msg, texte)
      }
      
    })
}
