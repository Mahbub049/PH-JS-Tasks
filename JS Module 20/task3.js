/**
 * Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(numbers, size){
    let sum = 0;
    for(const number of numbers){
        sum+=number;
    }

    return sum/size;
}

const numbers = [10, 20, 30, 40, 50];
const average = make_avg(numbers, numbers.length)
console.log(average);