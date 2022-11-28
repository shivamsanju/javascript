<div align='center'>
  <h2> TypeScript </h2>
</div>

```TypeScript
/* -------- PRIMITIVE TYPES -------- */

// string, number, boolean
const x: number = 2;
const y: string = 'hello';
const z: boolean = true;



/* ------ ARRAYS ------- */

const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];





/* ------- ANY TYPE ------- */

let obj: any = { x: 0 };
// None of the lines below throw compiler error - any skips type checking
obj.abc = 100;
obj();
obj.foo();


// Automatic type detection - variables
let xx = 'types';  // automaticaly detects types as string






/* ------ FUNCTION TYPES ------- */

const f = (name: string): string => {
    return `My name is ${name}`;
}

function f2(name: string): string {
    return `My name is ${name}`;
}

// Anonymous functions - functions where typescript can detect types
const names: string[] = ['Shivam', 'Satyam', 'Debu'];

names.forEach((name) => { 
    console.log(name.toLowerCase()); // typescript detects type of name automatically
})





/* ------- OBJECT TYPES & OPTIONAL PROPERTIES -------- */

const distance = (pt: {x: number, y: number}) : number => {
    return (pt.x - pt.y);
}


// Optional Properties
const printName = (name: {first: string, last?: string}): void => {
    console.log(name.first + name.last)
}
// Both OK
printName({first: "Shivam"})
printName({first: "Shivam", last: "Sanju"})


function printName2(obj: { first: string; last?: string }) {
    // console.log(obj.last.toUpperCase());  -----> Error - Object is possibly 'undefined'
    
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase()); //OK
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
   





/* --------- UNION TYPES ---------- */

const printId = (id: string | number): void => {
    console.log(id)
    // console.log(id.toUpperCase())  ----> Error: If we use union types we can only use methods which are availaibe on both types

    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

printId('2')  // OK
printId(2)    // Ok
// printId({id: 2})  -----> Error

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}





/* -------- LITERAL TYPES ------------ */

let hello: "hello" = "hello";
// let hello: "hello" = "not hello";; ----> Error

let alignment: "left" | "right" | "center" = "center";
let binaryNumber: 0 | 1 = 1
// let binaryNumber2: 0 | 1 = 3 -------> Error




/* ----------- BIG INT -------------- */
// let bigNumber: bigint = 2000000n; - Available after es2020

  
  
 /* ------- TYPE ALIASES ------- */

// when we want to use types same types for multiple objects or unions
type Point = {
    x: number;
    y: number;
}

function printCord(pt: Point): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCord({ x: 100, y: 100 });


type ID = number | string;
function printID(id: ID): void {
    console.log("Id: " + id)
}
   





/* -------- INTERFACES ------- */
interface Point2 {
    x: number;
    y: number;
}

function printCoord(pt: Point2) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 })






/* -------- INTERFACES  VS TYPES ------- */

// 1. Interfaces can be extended using extends & types can be extended using intersection

interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

type Animal2 = {
    name: string
}

type Dog = Animal2 & {
    honey: boolean
}

// 2. We can add new fields to interfaces

interface Car {
    brand: string
}

interface Car {
    year: number
}

let newCar: Car = {brand: "BMW", year: 2022}




/* ------- TYPE ASSERTIONS ------- */

let someNumber = 2 as number;

  
  
/* -------- IN OPERATOR --------- */
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}





/* --------- INSTANCEOF --------- */
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());    // (parameter) x: Date
    } else {
        console.log(x.toUpperCase());    // (parameter) x: string
    }
}
   




/* -------- ASSIGNMENTS ---------- */
let x3 = Math.random() < 0.5 ? 10 : "hello";    // let x3: string | number

x3 = 2; 
console.log(x3) // let x3: number

x3 = "hi"
console.log(x3) // let x3: string
                            
                            

                            
 /* -------- FUNCTION TYPES --------- */
const a = (fn: (x: string) => void): void => {
    fn("Hello World")
}

a(console.log);



/* ------ CALL SIGNATURES ------ */
// In JavaScript functions can have properties in addition to being callable
// A function is just an object so it can have a property

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6))
}

function greaterThan5(x: number): boolean {
    return (x>5);
}
greaterThan5.description = 'random function';

doSomething(greaterThan5)




/* ---------- OPTIONAL PARAMETERS ---------- */
function printName3(first: string, last?:string): void {
    console.log(first + last)
}

printName3('Shivam')
printName3('Shivam', 'Sanju')




/* ------- Function Types --------- */
function printToConsole2(fn: Function){
    fn("Hi")
}

printToConsole2(console.log)
```
