const fetch = require("node-fetch");

const { token_api } = require("./config.json");

fetch("https://www.blagues-api.fr/api/random", {
  headers: {
    Authorization: `Bearer token_api`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data[id]);
    /* Expected output:
    {
        "id": 1,
        "type": "dev",
        "joke": "Un développeur ne descend pas du métro.",
        "answer": "Il libère la RAM..."
    }
    */
  });
