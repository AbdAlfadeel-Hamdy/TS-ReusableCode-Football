import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
// const reader = new MatchReader("3.1 football.csv.csv");
// reader.read();

const csvFileReader = new CsvFileReader("3.1 football.csv.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
