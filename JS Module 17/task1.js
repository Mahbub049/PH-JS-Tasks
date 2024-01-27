/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 300;
let coke;

if(burgerPrice>500){
    coke = 0;
    console.log('Coke Free');
}
else{
    coke = 30;
    console.log('coke price: '+coke);
}