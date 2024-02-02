/**
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person';
let words = statement.split(' ');
let revWords = [];

for(const word of words){
    revWords.unshift(word);
}

let revStatement = revWords.join(' ');
console.log(revStatement);