const Discord =  require('discord.js');

const myclient = new Discord.Client();

const { token } = require("./config.json");

const json = require("./json_word/wordlist_byPOS.json");
const obj = JSON.parse(JSON.stringify(json));

const list_word = [];
const ponct = " ==> ";
let count = 1;

for (let i = 0; i < 10; i++) {
  let clé = Object.keys(obj)[
    Math.floor(Math.random() * Object.keys(obj).length)
  ];
  let prefix = ((count).toString()).concat("", ponct)
  let word = prefix.concat(obj[clé][Math.floor(Math.random() * obj[clé].length)]);
  list_word.push(word);
  count++;
}

myclient.on('ready', client => {
    console.log(`Login as ${myclient.user.tag}`);
});

myclient.on("message", (message) => {
    if (message.content === 'english'){
        message.channel.send(list_word);
    }
    else if (message.content === 'hello'){
      message.channel.send("Salut !")
    }
})


myclient.login(token);