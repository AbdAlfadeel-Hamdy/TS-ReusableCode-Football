import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
// const reader = new MatchReader("3.1 football.csv.csv");
// reader.read();

const csvFileReader = new CsvFileReader("3.1 football.csv.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let unitedWins = 0;
for (const match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    unitedWins++;
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    unitedWins++;
}

console.log(`Man United won ${unitedWins} games`);
