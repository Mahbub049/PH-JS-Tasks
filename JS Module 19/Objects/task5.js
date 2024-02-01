let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for (let obj in myObject){
    console.log('key: ',obj, ' | type:', typeof(myObject[obj]));
    // console.log(myObject[obj]);
}