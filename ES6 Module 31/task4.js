// 1) You have an odd array (array with odd numbers). [1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & & array.mapO method. Hints: add one to any odd number and it will become an even number.

let oddNumbers = [1, 3, 5, 7, 9 ];

for(let i=0; i<oddNumbers.length; i++){
    oddNumbers[i] = oddNumbers[i] + 1;
}

const result = oddNumbers.map(n => n+1);
console.log(result);