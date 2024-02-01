/*
 * Count how many times a string has the letter a
*/

const string = 'Muhammad Mahbub Sarwar Shafi';
const nameArr = string.split('');
let count = 0;
for(let i=0; i<string.length; i++){
    if(nameArr[i] == 'a'){
        count=count+1;
    }
}
console.log('Total a in the string:', count);