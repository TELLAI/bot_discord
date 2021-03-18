const assert = require('chai').assert;
// const assert = require("assert");
const importFile = require('../functions_weather.js');


describe('testing weather file', function() {
    it('check if fullMeteo is a string datatype', function() {
        assert.equal(importFile.parsing_json, 'string')
    }),

    it("test response", function () {
        assert.equal(importFile.response("meteo"), fullMeteo);
    });

})


// describe('testing weather file', function() {
//     it('check if fullMeteo is a string datatype', function() {
//         assert.typeOf(findWeather(), 'string')
//     });


// })
