import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export class CsvFileReader {
  data: MatchData[] = [];
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
      .map((match: string[]): MatchData => {
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
