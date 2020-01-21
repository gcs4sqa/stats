import { CsvFileReader } from './CsvFlleReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

let manUnitedWins = 0;



for ( let match of reader.data){
    if( match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

let liverpoolwins = 0;

for (let match of reader.data){
    if (match[1] === 'Liverpool' && match[5] === MatchResult.HomeWin){
        liverpoolwins++;
    } else if(match[2] === 'Liverpool' && match[5] === MatchResult.AwayWin){
        liverpoolwins++;
    }
    
}

console.log(`Man United won ${manUnitedWins} games.`);

console.log(`liverpool won ${liverpoolwins} games`);