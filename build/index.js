"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map(function (row) {
    return row.split(',');
});
var manUnitedWins = 0;
var homewin = 'H';
var awaywin = 'A';
var draw = 'D';
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === homewin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awaywin) {
        manUnitedWins++;
    }
}
var liverpoolwins = 0;
for (var _a = 0, matches_2 = matches; _a < matches_2.length; _a++) {
    var match = matches_2[_a];
    if (match[1] === 'Liverpool' && match[5] === homewin) {
        liverpoolwins++;
    }
    else if (match[2] === 'Liverpool' && match[5] === awaywin) {
        liverpoolwins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
console.log("liverpool won " + liverpoolwins + " games");
