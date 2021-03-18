const json1: any = require("./json_word/wordlist_byPOS.json");
const obj1: any = JSON.parse(JSON.stringify(json1));

const json2: any = require("./blagues.json");
const obj2: any = JSON.parse(JSON.stringify(json2));

const { token, PREFIX }: any = require("./config");

import * as ins from "./lib_fonction";

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
    export function response(myclient){
    myclient.on("message", (msg) => {
    
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
                msg.content === "salut"
              ) {
                msg.channel.send({ files: ["./images/bye.gif"] });
              }
               else if (msg.content.startsWith(`${PREFIX}play`)){
                   msg.reply("Play What ?");
               }
              else if (msg.content.includes(`sac`)){
                  msg.channel.send({ files: ["./images/sac.jpg"] });
              }
    })
}
