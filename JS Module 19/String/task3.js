/*
 * Check whether a string contains all the vowels a, e, i, o, u
*/

const string = 'Muhammad Mahbub Sarwar Shafi';
const nameArr = string.split('');
const vowelsStr = 'a,e,I,o,u'
const vowels = vowelsStr.toLowerCase().split(',');
let count = 0;
for(let i=0; i<string.length; i++){
    for(let j=0; j<vowels.length; j++){
        if(nameArr[i] == vowels[j]){
            count=count+1;
        }
    }
}
console.log('Total vowels in the string:', count);