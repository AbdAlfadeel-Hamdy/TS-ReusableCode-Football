import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string): string[] => {
        return match.split(",");
      })
      .map((match: string[]): any => {
        return [
          dateStringToDate(match[0]),
          match[1],
          match[2],
          parseInt(match[3]),
          parseInt(match[4]),
          match[5] as MatchResult,
          match[6],
        ];
      });
  }
}
