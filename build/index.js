"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync("3.1 football.csv.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((match) => {
    return match.split(",");
});
let unitedWins = 0;
for (const match of matches) {
    if (match[1] === "Man United" && match[5] === "H")
        unitedWins++;
    if (match[2] === "Man United" && match[5] === "A")
        unitedWins++;
}
console.log(`Man United won ${unitedWins} games`);
