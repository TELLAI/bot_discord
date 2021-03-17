const json : any = require("../json_word/wordlist_byPOS.json");
const obj : any = JSON.parse(JSON.stringify(json));
const json_2 : any = require("../blagues.json");
const obj_2 : any = JSON.parse(JSON.stringify(json_2));

module.exports = {
  salutation: function (word : string) {
    if (word === "hello") {
      const rep = "salut";
      return rep;
    }
  },
  select_word: function randWord(list_word : any) {
    let count = 1;
    const ponct = " ==> ";
    for (let i = 0; i < 10; i++) {
      let clé = Object.keys(obj)[
        Math.floor(Math.random() * Object.keys(obj).length)
      ];
      let prefix = count.toString().concat("", ponct);
      let word = prefix.concat(
        obj[clé][Math.floor(Math.random() * obj[clé].length)]
      );
      list_word.push(word);
      count++;
    }
    return list_word;
  },
  select_blague: function randBlague() {
    let blague = Object.values(obj_2)[
      Math.floor(Math.random() * Object.keys(obj_2).length)
    ];
    return blague;
  },
};
