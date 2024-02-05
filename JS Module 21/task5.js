/**
 * Task-5:
 * Generate a random number between 10 to 20.
*/

function randomNum(){
    let min = 10;
    let max = 20;

    let difference = max - min;

    const random = Math.random()*difference;
    const rangeRandom = random + min;

    return rangeRandom;
}

const random = randomNum();
console.log(random);