import fs from "fs";

const matches = fs
  .readFileSync("3.1 football.csv.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((match: string): string[] => {
    return match.split(",");
  });

let unitedWins = 0;

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === "H") unitedWins++;
  if (match[2] === "Man United" && match[5] === "A") unitedWins++;
}

console.log(`Man United won ${unitedWins} games`);
