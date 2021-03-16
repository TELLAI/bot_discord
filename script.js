
const json = require("./json_word/wordlist_byPOS.json");
const obj = JSON.parse(JSON.stringify(json));

// console.log(
//   Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)]
// );

// console.log(
//   Object.values(obj)[Math.floor(Math.random() * Object.values(obj).length)]
// );
const list_word = []
for(let i=0; i < 10; i++){
  let clé = Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
  let word = obj[clé][Math.floor(Math.random() * obj[clé].length)];
  list_word.push(word)
}

console.log(list_word)