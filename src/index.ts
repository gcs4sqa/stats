import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// Create ab object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of tMatchReader and pass in something satisfying
// the 'DataReader' interface 
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//reference matchReader.matches


let manUnitedWins = 0;
for ( let match of matchReader.matches){
    if( match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

let liverpoolwins = 0;

for (let match of matchReader.matches){
    if (match[1] === 'Liverpool' && match[5] === MatchResult.HomeWin){
        liverpoolwins++;
    } else if(match[2] === 'Liverpool' && match[5] === MatchResult.AwayWin){
        liverpoolwins++;
    }
    
}

console.log(`Man United won ${manUnitedWins} games.`);

console.log(`liverpool won ${liverpoolwins} games`);