var assert = require("assert");
const rep = require("./lib_test.js");
let liste_test = [];
describe("Array", function () {
  describe("#indexOf()", function () {
    it("test salutation", function () {
      assert.equal(rep.salutation("hello"), "salut");
    });
    it("test select_word", function () {
      assert.equal(rep.select_word(liste_test).length, 10);
    });
    // it("test select_blague", function () {
    //   assert.equal(rep.select_blague().length, 4);
    // });
  });
});
