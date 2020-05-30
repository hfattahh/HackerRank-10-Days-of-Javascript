'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let unvowel_list = [];
    const vowel_list = 'aeiouAEIOU';
        for (const element of s) {
            if (vowel_list.indexOf(element) !== -1){
                console.log(element);}
            else{
                unvowel_list.push(element);        
            }
        }
        for(const element of unvowel_list){
            console.log(element);
        }

}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}