import { strict as assert } from "assert";
import { randBlague } from "../lib_fonction";
import "mocha";

import * as ins from "../lib_fonction";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("test salutation", function () {
      let res = ins.randWord();
      assert.isString(res);
    });
    it("test select_word", function () {
      assert.equal(ins.randBlague().length, 10);
    });
    // it("test select_blague", function () {
    //   assert.equal(rep.select_blague().length, 4);
    // });
  });
});
