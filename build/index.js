"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// const reader = new MatchReader("3.1 football.csv.csv");
// reader.read();
const csvFileReader = new CsvFileReader_1.CsvFileReader("3.1 football.csv.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let unitedWins = 0;
for (const match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin)
        unitedWins++;
    if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)
        unitedWins++;
}
console.log(`Man United won ${unitedWins} games`);
