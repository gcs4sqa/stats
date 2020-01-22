"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
// Create ab object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of tMatchReader and pass in something satisfying
// the 'DataReader' interface 
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//reference matchReader.matches
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
var liverpoolwins = 0;
for (var _b = 0, _c = matchReader.matches; _b < _c.length; _b++) {
    var match = _c[_b];
    if (match[1] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        liverpoolwins++;
    }
    else if (match[2] === 'Liverpool' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        liverpoolwins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
console.log("liverpool won " + liverpoolwins + " games");
