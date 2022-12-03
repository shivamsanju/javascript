<div align='center'>
  <h2> JavaScript Notes </h2>
</div>

### Links
<hr>

- [TypeScript](./TypeScript/README.md)

- [NodeJs](./NodeJs/Readme.md)

<br>
<br>

## Objects in JavaScript
---------------------------

- Object is a unique entity that contains properties and methods.
The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods.

- Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

- We can create an object in Javascript in multiple ways (using object literal, using constructor & using Object.create() method)

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
function createPersonObject(first_name, last_name){
    let newObj = {}
    newObj.first_name = first_name;
    newObj.last_name = last_name;
    return newObj
}

let person = createPersonObject('Rahul', 'Latiyan')
```
Javascript has a concept of constructor to save us from writing such functions
```JavaScript
function Person(first_name,last_name){
    // var this = {}  --> handled by js when we use "new" keyword 
    this.first_name = first_name;
    this.last_name = last_name;

    this.callName = function(){
      console.log(`Hi ${this.first_name}`)
    }
    // return this   --> handled by js when we use "new" keyword 
}

//creating new instances of person object
let person1 = new Person('Mukul','Latiyan');
let person2 = new Person('Rahul','Avasthi');

// accessing properties
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// adding new properties
person1.age = 22
console.log(person1.age) // --> Output: 22
```
- Constructors are just normal functions which are used to create objects

- Constructors are called with new keyword. This keyword tells javascript that the called function is a constructor.

- By convention first letter of constructor function name is kept capital.

> Calling normal functions with new keyword works but we cannot call constructor functions without new keyword.

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
```
 <br> <br>

## Keyword - 'this' 
-----------------------
- The reference of this keyword changes based where it is being used

**Method 1: Calling the function directly**
```JavaScript
function foo () {
    console.log(this) // references global object (browser: window, nodejs: global)
}

// Note : In node global object is "global" or "globalThis"

global === globalThis 
global !== Object // "Object" is a function

// This keyword is not valid inside arrow functions
let foo = () => {
    console.log(this) // this is an empty object here
}
```

**Method 2: When function is inside an object**
```JavaScript
const foo = {"prop": "HI"}

foo.bar = function(){
    console.log(this) // reference foo object
}

foo.bar = () => {
    console.log(this) // this is an empty object here
}


// Inside a constructor
function Bicycle (tirePressure) {
    this.tirePressure = tirePressure // this points to new constructor object
    this.inflateTires = function () {
        this.tirePressure += 3; // this points to the outside object (here bicycle1)
    }
}

let bicycle1 = new Bicycle()
bicycle1.inflateTires()
```

**Method 3: Calling the function using new keyword**
```JavaScript
function foo () {
    this.name = "Shivam"
    console.log(this) // this referes newly created object i.e. {}
}

new foo()
```
**Method 4: Calling the function using .call()**
```JavaScript
function foo () {
    console.log(this) // this referes to passed object inside call else global
}

let obj = {"name": "S"}
foo.call(obj)
```
<br> <br>

## Prototypes
---------------
- Prototypes are objects that are created whenever we define a function.

- When we create new functions on this object, a new reference is created to the parent prototype object for each new object

```JavaScript
function User(name){
    this.name = name;
    this.life = 100;
}

User.prototype // return an empty object

let user = new User("Shivam") // This creates a new reference to the prototype object and stores in __proto__ 
user.__proto__ === User.prototype  // true

let user2 = new User("Satyam")
user.__proto__ === User.prototype === user2.__proto__  // true
```

- We can add new properties to the already created objects using the prototype
```JavaScript
function User(name){
    this.name = name;
    this.life = 100;
}

let user = new User("Shivam")
let user2 = new User("Satyam")

User.prototype.punch = function (targetUser) {
    targetUser.life -= 5;
}   

console.log(user.punch)  // refers to function punch

user.punch(user2)

console.log(user2.life) // 95
```
<br> <br>

## Classes in JavaScript
-------------------------
- Classes are just syntactical sugar in ES6. Internally they are just constructor functions which create objects.

```JavaScript
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    walk () {
        console.log(this.name + " is walking....")
    }
}

let a = new Animal('Franky', 2)
console.log(a.name) // Franky
console.log(a.age) // 2
a.walk() // Franky is walking....
```

**Inheritance in JavaScript**

```JavaScript
//Inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}

class student extends person{
    constructor(name,id){
        //super keyword for calling the above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}

let student1 = new student('Mukul',22);
console.log(student1.toString());
```
> The Person and Student object both have same method (i.e toString()), this is called **Method Overriding**. 

> Method Overriding allows a method in a child class to have the same name and method signature as that of a parent class. 

> In the above code, the super keyword is used to refer to the immediate parent class’s instance variable. 
































































































