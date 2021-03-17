const Discord =  require('discord.js');

const myclient = new Discord.Client();

const { token } = require("./config.json");

const json = require("./json_word/wordlist_byPOS.json");
const obj = JSON.parse(JSON.stringify(json));

const json2 = require("./blagues.json");
const obj2 = JSON.parse(JSON.stringify(json2));

const list_word = [];
const ponct = " ==> ";
let count = 1;

function randWord(list_word){
  for (let i = 0; i < 10; i++) {
    let clé = Object.keys(obj)[
      Math.floor(Math.random() * Object.keys(obj).length)
    ];
    let prefix = ((count).toString()).concat("", ponct)
    let word = prefix.concat(obj[clé][Math.floor(Math.random() * obj[clé].length)]);
    list_word.push(word);
    count++;
  }
  return list_word;
}

myclient.on('ready', client => {
    console.log(`Login as ${myclient.user.tag}`);
});

function randBlague(){
  blague = Object.values(obj2)[
        Math.floor(Math.random() * Object.keys(obj2).length)
      ];
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
      blague = randBlague()
      msg.channel.send(blague["joke"] + "\n\n" + blague["answer"])
    }
})


myclient.login(token);