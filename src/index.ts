import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
// const reader = new MatchReader("3.1 football.csv.csv");
// reader.read();

const csvFileReader = new CsvFileReader("3.1 football.csv.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Liverpool"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
