 const Discord2 : any =  require('discord.js');

 const myclient2 : any = new Discord2.Client();

const { token, PREFIX } : any = require("./config");

import * as imp from "./lib_fonction";

myclient2.on("ready", () => {
      console.log(`Login as ${myclient2.user.tag}`);
      imp.response(myclient2);
    });
myclient2.login(token);