/**
 * Task-3:
 * Write a function to count the number of vowels in a string.
*/

function countVowel (sentense, length){
    const lowerSen = sentense.toLowerCase();
    let count = 0;
    for(i=0; i<length; i++){
        if(lowerSen[i].includes('a')||lowerSen[i].includes('e')||lowerSen[i].includes('i')||lowerSen[i].includes('o')||lowerSen[i].includes('u')){
            count++;
        }
        
    }
    return count;
}

const sentense = 'I am Mahbub';
const length = sentense.length;
const vowels = countVowel(sentense, length);
console.log(vowels);