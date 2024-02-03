/**
 * Task-4
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(string){
    let bits = string.split('');
    let count = 0;
    for(const bit of bits){
        if(bit==0){
            count++;
        }
    }
    return count;
}

const string = '01010101010000';
const count = count_zero(string);
console.log(count)