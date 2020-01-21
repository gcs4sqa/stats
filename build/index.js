"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFlleReader_1 = require("./CsvFlleReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFlleReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data);
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
var liverpoolwins = 0;
for (var _b = 0, _c = reader.data; _b < _c.length; _b++) {
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
