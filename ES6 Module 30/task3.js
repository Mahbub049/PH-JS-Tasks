//Write an arrow function where it will do the following: x^2

const array = [10, 20, 5, 6, 8, 9, 12];

const doMath = (array) => {
    const length = array.length;
    let sum = 0;
    for(let item of array){
        item = item**2;
        sum+=item;
    }
    const avg = sum/length;
    return avg;
}

console.log(doMath(array));