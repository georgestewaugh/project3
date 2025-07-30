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

