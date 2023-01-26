"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader("3.1 football.csv.csv");
reader.read();
let unitedWins = 0;
for (const match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin)
        unitedWins++;
    if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)
        unitedWins++;
}
console.log(`Man United won ${unitedWins} games`);
