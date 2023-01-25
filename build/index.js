"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("3.1 football.csv.csv");
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let unitedWins = 0;
for (const match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
        unitedWins++;
    if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
        unitedWins++;
}
console.log(`Man United won ${unitedWins} games`);
