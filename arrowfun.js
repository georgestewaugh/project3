const name="george";
let age=27;
const hobbies=["fball","cricket"];

age=28;

//   name = "john"; // This will throw an error because 'name' is a constant

function sumarizer(username,userage,userhobbies) {
    return 'name is :'+username +
    '   age is :'+ userage + 
    '   hobbies are '+userhobbies;
}

        console.log(sumarizer(name, age, hobbies));
// arrow functions//

const add = (a,b) => 
    {
    return a+b 
 };
console.log(add(5, 10)) ;
// arrow function with single parameter

const addOne = a => a + 1;
const addTwo = (a, b) => a + b;
const addrandom =(a,b) => a*b;


console.log(addOne(5));
console.log(addTwo(2, 7));
console.log(addrandom(2, 7));