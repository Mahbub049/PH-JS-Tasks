/**
 * Task-1:
 * Write a function to convert temperature from Celsius to Fahrenheit.
*/

function TempConversion(temp){
    let F = (temp * (9/5))+32;
    return F;
}

const temperature = 38.5;
const result = TempConversion(temperature);
console.log(result);