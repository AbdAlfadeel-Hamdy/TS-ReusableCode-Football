"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    static fromCsv(fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((match) => {
            return [
                (0, utils_1.dateStringToDate)(match[0]),
                match[1],
                match[2],
                parseInt(match[3]),
                parseInt(match[4]),
                match[5],
                match[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
