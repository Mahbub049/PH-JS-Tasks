/*
 * Count how many times a string has the letter a or A
*/

let string = 'Muhammad mahbub sarwar shafi';
const nameArr = string.split('');
let count = 0;
for(let i=0; i<string.length; i++){
    if(nameArr[i] == ' '){
        nameArr[i+1] = nameArr[i+1].toUpperCase();
        console.log(nameArr[i+1]);
    }
}
string = nameArr.join('')
console.log(string);