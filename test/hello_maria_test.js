const assert = require('chai').assert;
const weather_maria = require('../weather_maria');

const connection = require('../weather_maria.js').connection;
const response = require('../weather_maria.js').response;
const findWeather = require('../weather_maria.js').findWeather;
const parseResult = require('../weather_maria.js').parseResult;
// import { parseResult } from '../weather_maria.js';
// response

describe('testing weather file', function() {
    it('check if fullMeteo is a string datatype', function() {
        let result = parseResult();
        assert.typeOf(result, 'string')
    })


// })


// describe('testing weather file', function() {
//     it('check if fullMeteo is a string datatype', function() {
//         assert.typeOf(findWeather(), 'string')
//     });


// })
