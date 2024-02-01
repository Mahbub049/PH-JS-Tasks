/*
 * Count how many times a string has the letter a or A
*/

const string = 'Muhammad MAhbub Sarwar Shafi';
const nameArr = string.toLowerCase().split('');
let count = 0;
for(let i=0; i<string.length; i++){
    if(nameArr[i] == 'a'){
        count=count+1;
    }
}
console.log('Total a in the string:', count);