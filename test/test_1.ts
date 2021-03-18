var assert = require("assert");

let imp = require("../lib_fonction.js")


describe("Array", function () {
  describe("#indexOf()", function () {
    it("test salutation", function () {
      let res = imp.randWord()
      assert.isString(res);
      
    });
    it("test select_word", function () {
      assert.equal(imp.randBlague().length, 10);
    });
    // it("test select_blague", function () {
    //   assert.equal(rep.select_blague().length, 4);
    // });
  });
});
