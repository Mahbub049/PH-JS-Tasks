/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let price = 800;
let age = 62;
let isStudent = false;

if(isStudent == true && age){
    price -= price*(50/100);
    console.log(price);
}
else if(age < 10 && isStudent== false){
    price = 0;
    console.log('Free for Children');
}
else if(age >= 60 && isStudent==false){
    price -= price*(15/100);
    console.log(price);
}
else{
    price = 800;
    console.log(price);
}