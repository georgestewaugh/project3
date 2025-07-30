const obj ={
    name:'george',
    age:27,

 greet() { console.log(`hello ${this.name} is ${this.age} years old`)
}

}
obj.greet();

// This code snippet defines an object with properties and a method to greet the user.

const object ={
    name:'arul',
    age:21,
    hobbies:['fball','cricket', 'coding', 'reading'],
    greets() { 
        console.log(`hello ${this.name} is ${this.age} years old`);
        console.log(`hobbies are ${this.hobbies.join(', ')}`);
    }
}
object.greets();