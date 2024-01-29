

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let i = 81;
let sum = 0;

while(i<=131){
    if(i%2!==0){
        sum+=i;
    }
    i++;
}
console.log(sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

i = 206;
sum = 0;

while(i<=311){
    if(i%2==0){
        sum+=i;
    }
    i++;
}
console.log(sum);

/*programming hero*/