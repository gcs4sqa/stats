import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport} from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport} from './reportTargets/HtmlReport';

// Create ab object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of tMatchReader and pass in something satisfying
// the 'DataReader' interface 
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//reference matchReader.matches

/*const summary = new Summary(
    new WinsAnalysis('Liverool'),
    //new ConsoleReport()
    new HtmlReport()
)*/

const summary = Summary.winsAnalysisWithHtmlReport('Liverpool');



summary.buildAndPrintReport(matchReader.matches);

