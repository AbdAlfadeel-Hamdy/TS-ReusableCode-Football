import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
const reader = new CsvFileReader("3.1 football.csv.csv");
reader.read();

let unitedWins = 0;
for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    unitedWins++;
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    unitedWins++;
}

console.log(`Man United won ${unitedWins} games`);
