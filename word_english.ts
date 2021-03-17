const Discord : any =  require('discord.js');

const myclient : any = new Discord.Client();

const { token } : any = require("./config.json");

const json1 : any = require("./json_word/wordlist_byPOS.json");
const obj1 : any = JSON.parse(JSON.stringify(json1));

const json2 : any = require("./blagues.json");
const obj2 : any = JSON.parse(JSON.stringify(json2));

const list_word : any = [];
const ponct : string = " ==> ";
let count : number = 1;

function randWord(list_word : any){
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

myclient.on('ready', client => {
    console.log(`Login as ${myclient.user.tag}`);
});

function randBlague(){
  let blague : any = Object.values(obj2)[Math.floor(Math.random() * Object.keys(obj2).length)];
      return blague;
    }

myclient.on("message", (msg) => {
 
    if (msg.content === 'english'){
        msg.channel.send(randWord(list_word));
    }
    else if (msg.content === 'hello'){
      msg.channel.send(`Salut ! ${msg.member}`);
    }
    else if (msg.content === 'blague'){
      let blague : any = randBlague()
      console.log(typeof(blague))
      msg.channel.send(blague["joke"] + "\n\n" + blague["answer"])
    }
})


myclient.login(token);