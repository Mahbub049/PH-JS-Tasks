/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
*/

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function companySalary(employees){
    let companyPayment = 0;
    for(const employee of employees){
        const individualIncrement = employee.experience * employee.increment;
        const individualSalary = employee.starting + individualIncrement;
        companyPayment += individualSalary;
    }
    return companyPayment;
}

const totalCompanySalary = companySalary(employees);
console.log('Company Has to pay in total:', totalCompanySalary);