import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
.map((row: string):string[] => {
    return row.split(',')
});

let manUnitedWins = 0;

const homewin = 'H';
const awaywin = 'A';
const draw = 'D';

for ( let match of matches){
    if( match[1] === 'Man United' && match[5] === homewin){
        manUnitedWins++;
    }else if (match[2] === 'Man United' && match[5] === awaywin){
        manUnitedWins++;
    }
}

let liverpoolwins = 0;

for (let match of matches){
    if (match[1] === 'Liverpool' && match[5] === homewin){
        liverpoolwins++;
    } else if(match[2] === 'Liverpool' && match[5] === awaywin){
        liverpoolwins++;
    }
    
}

console.log(`Man United won ${manUnitedWins} games.`);

console.log(`liverpool won ${liverpoolwins} games`);