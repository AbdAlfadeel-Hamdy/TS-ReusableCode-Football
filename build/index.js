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
console.log(matches);
