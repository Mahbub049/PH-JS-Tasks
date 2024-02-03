/**
 * Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function oddEven (number){
    if(number % 2==0){
        return number/2;
    }
    return number*2;
}

console.log(oddEven(21));