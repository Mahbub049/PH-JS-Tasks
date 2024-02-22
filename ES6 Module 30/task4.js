//Write an arrow function where it will do the following: 
//It will take two array inputs 
//Combine the two arrays and assign them in a new array 
//Find the maximum number from the new array and return the result

const roll = [1, 2, 3, 4, 5];
const age = [22, 24, 26, 18, 22];

const combine = (rollArr, ageArr) => {
    const combined = [...roll, ...age];
    const max = Math.max(...combined);
    return max;
}

const result = combine(roll, age);
console.log(result);


