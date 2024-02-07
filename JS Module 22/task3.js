/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalBudget = laptop * laptopQuantity + tablet * tabletQuantity + mobile * mobileQuantity;
    return totalBudget;
}

const totalBudget = calculateElectronicsBudget(2, 5, 3);
console.log('The total budget is: ',totalBudget);