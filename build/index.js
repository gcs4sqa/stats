"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
// Create ab object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of tMatchReader and pass in something satisfying
// the 'DataReader' interface 
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//reference matchReader.matches
/*const summary = new Summary(
    new WinsAnalysis('Liverool'),
    //new ConsoleReport()
    new HtmlReport()
)*/
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Liverpool');
summary.buildAndPrintReport(matchReader.matches);
