import { expect } from "chai";

import * as ins from "../lib_fonction";

describe("randWord", function () {
  let res = ins.randWord();
    it("test type of randWord", function () {
      expect(res).to.be.an(`array`);
    });
    it("test length of randWord", function () {
      expect(res.length).to.equal(10);
    });
    it("test type of items of array randWord", () => {
      let num : number = Math.floor(Math.random() * res.length);
    expect(typeof(res[num])).to.equal("string");
    });
})

describe("randBlague", () =>{
  let res : any = ins.randBlague()
  it("test type of return randBlague", ()=>{
    let num: number = Math.floor(Math.random() * res.length);
    expect(typeof(res[num])).to.equal("string");  
})
})

// describe("Convert msg", ()=>{
//   let msg = "blabla"
//   it("test hello", ()=>{
//     let rep = ins.convert_msg(msg, "hello")
//     expect(rep).to.equal("salut");
//   });
//   it("test blague", ()=>{
//     let rep = ins.convert_msg(msg, "blague");
//     expect(rep).to.be.an(`array`);
//   });
//   it("test Parse", ()=>{
//     let dict_1 = {"location": "Aulnay", "current" : "blabla"}
//     let dict_2 = {"name": "SSD"}
//     let dict_3 = {"temperature" : "bla1", "windspeed": "bla2", "feelslike" : "bla3", "skytext" : "bla4", "humidity" : "bla5"}
//     let liste_dict = [dict_1, dict_2, dict_3]
//     let rep = `Weather in Aulnay today: bla4, temperature is bla1°C, real feeling is bla3°C, humidity level is bla5 and the speed of wind is bla2 km/h. Have a lovely day!`
//     expect(ins.parseResult("", liste_dict)).to.equal(rep)
//     })
// })
