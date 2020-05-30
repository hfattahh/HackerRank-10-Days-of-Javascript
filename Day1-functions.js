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
 * Create the function factorial here
 */

const factorial = (a)=>{
    //calculate factorial using divide and conquer
    if (a === 0){
        return 1;
    }
    else{
        return a * factorial(a -1);
    }
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}