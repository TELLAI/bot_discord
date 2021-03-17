var json = require("../json_word/wordlist_byPOS.json");
var obj = JSON.parse(JSON.stringify(json));
var json_2 = require("../blagues.json");
var obj_2 = JSON.parse(JSON.stringify(json_2));
module.exports = {
    salutation: function (word) {
        if (word === "hello") {
            var rep = "salut";
            return rep;
        }
    },
    select_word: function randWord(list_word) {
        var count = 1;
        var ponct = " ==> ";
        for (var i = 0; i < 10; i++) {
            var clé = Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
            var prefix = count.toString().concat("", ponct);
            var word = prefix.concat(obj[clé][Math.floor(Math.random() * obj[clé].length)]);
            list_word.push(word);
            count++;
        }
        return list_word;
    },
    select_blague: function randBlague() {
        var blague = Object.values(obj_2)[Math.floor(Math.random() * Object.keys(obj_2).length)];
        return blague;
    }
};
