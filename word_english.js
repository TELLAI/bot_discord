var Discord = require('discord.js');
var myclient = new Discord.Client();
var token = require("./config.json").token;
var json1 = require("./json_word/wordlist_byPOS.json");
var obj1 = JSON.parse(JSON.stringify(json1));
var json2 = require("./blagues.json");
var obj2 = JSON.parse(JSON.stringify(json2));
var list_word = [];
var ponct = " ==> ";
var count = 1;
function randWord(list_word) {
    for (var i = 0; i < 10; i++) {
        var clé = Object.keys(obj1)[Math.floor(Math.random() * Object.keys(obj1).length)];
        var prefix = ((count).toString()).concat("", ponct);
        var word = prefix.concat(obj1[clé][Math.floor(Math.random() * obj1[clé].length)]);
        list_word.push(word);
        count++;
    }
    return list_word;
}
myclient.on('ready', function (client) {
    console.log("Login as " + myclient.user.tag);
});
function randBlague() {
    var blague = Object.values(obj2)[Math.floor(Math.random() * Object.keys(obj2).length)];
    return blague;
}
myclient.on("message", function (msg) {
    if (msg.content === 'english') {
        msg.channel.send(randWord(list_word));
    }
    else if (msg.content === 'hello') {
        msg.channel.send("Salut ! " + msg.member);
    }
    else if (msg.content === 'blague') {
        var blague = randBlague();
        console.log(typeof (blague));
        msg.channel.send(blague["joke"] + "\n\n" + blague["answer"]);
    }
});
myclient.login(token);
