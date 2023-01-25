import fs from "fs";

const matches = fs
  .readFileSync("3.1 football.csv.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((match: string): string[] => {
    return match.split(",");
  });

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
let unitedWins = 0;

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    unitedWins++;
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    unitedWins++;
}

console.log(`Man United won ${unitedWins} games`);
