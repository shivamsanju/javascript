<div align='center'>
  <h2> JavaScript Notes </h2>
</div>

### Contents
<hr>

- [TypeScript](./TypeScript/README.md)

- [NodeJs](./NodeJs/Readme.md)

<hr>
<br>

## Objects in JavaScript

- > Object is a unique entity that contains properties and methods.
The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods.

- > Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

- > We can create an object in Javascript in multiple ways (using object literal, using constructor & using Object.create() method)

<br>

#### **Method 1:  Using Object Literal**
```JavaScript
let person = {
    // properties
    first_name:'Mukul',
    last_name: 'Latiyan',
    phone_number : {
        mobile:'12345',
        landline:'6789'
    },

    //method
    getFunction : function(){
        return (`The name of the person is ${this.first_name} ${person.last_name}`) // Both this & person can be used
    },

}

// Accessing the properties 
person.first_name
person['first_name']

// Accessing the methods
person.getFunction()

// Adding properties to objects
person.age = 22
```
<br>

#### **Method 2:  Using Constructor**
```JavaScript
function person(first_name,last_name){
    this.first_name = first_name;
    this.last_name = last_name;

    this.callName = function(){
      console.log(`Hi ${this.first_name}`)
    }
}

//creating new instances of person object
let person1 = new person('Mukul','Latiyan');
let person2 = new person('Rahul','Avasthi');

// accessing properties
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// adding new properties
person1.age = 22
console.log(person1.age) // --> Output: 22
```

<br>

#### **Method 3:  Using Object.create()**
```JavaScript
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I
          studying?: ${this.isStudying}.`)
    }
}

const me = Object.create(coder); // creates a new object (shallow copy)
 
// Shallow vs Deep copy
coder.isStudying = true;
console.log(me.isStudying) // Output - true (since me is a shallow copy)


me.name = 'Mukul'; // name is on me but not on coder
me.isStudying = false; // changing this will not affect coder.isStudying 
me.printIntroduction();