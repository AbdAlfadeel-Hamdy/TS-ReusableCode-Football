import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

// const csvFileReader = new CsvFileReader("3.1 football.csv.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("3.1 football.csv.csv");
matchReader.load();

const summaryLiverpool = new Summary(
  new WinsAnalysis("Liverpool"),
  new ConsoleReport()
);
summaryLiverpool.buildAndPrintReport(matchReader.matches);

const summaryChelsea = new Summary(
  new WinsAnalysis("Chelsea"),
  new HtmlReport("chelseaReport")
);
summaryChelsea.buildAndPrintReport(matchReader.matches);
