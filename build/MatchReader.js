"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(match) {
        return [
            (0, utils_1.dateStringToDate)(match[0]),
            match[1],
            match[2],
            parseInt(match[3]),
            parseInt(match[4]),
            match[5],
            match[6],
        ];
    }
}
exports.MatchReader = MatchReader;
