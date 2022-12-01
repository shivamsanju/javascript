<div align='center'>
  <h2> TypeScript Notes </h2>
  <hr>
</div>

<br>

## Primitive Types
```TypeScript
// string, number, boolean
const x: number = 2;
const y: string = 'hello';
const z: boolean = true;
```
<br>

## Arrays
```TypeScript
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
```
<br>

## Any 
```TypeScript
let obj: any = { x: 0 };

// None of the lines below throw compiler error - any skips type checking
obj.abc = 100;
obj();
obj.foo();
```
<br>

## Automatic type detection - variables
```TypeScript
let xx = 'types';  // automaticaly detects types as string
```
<br>

## Function Types
```TypeScript
const f = (name: string): string => {
    return `My name is ${name}`;
}

function f2(name: string): string {
    return `My name is ${name}`;
}
```
<br>


## Anonymous functions - functions where typescript can detect types
```TypeScript
const names: string[] = ['Shivam', 'Satyam', 'Debu'];

names.forEach((name) => { 
    console.log(name.toLowerCase()); // typescript detects type of name automatically
})
```
<br>

## Object Types & Optional Properties
```TypeScript
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
    console.log(obj.last.toUpperCase());  // Error - Object is possibly 'undefined'
    
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase()); //OK
    }
    console.log(obj.last?.toUpperCase()); // Modern JavaScript syntax
}
```  
<br>


## Union Types

```TypeScript
const printId = (id: string | number): void => {
    console.log(id.toUpperCase())  // Error: If we use union types we can only use methods which are availaibe on both types

    if (typeof id === "string") {
        console.log(id.toUpperCase()); // In this branch, id is of type 'string'
    } else {
        console.log(id); // Here, id is of type 'number'
    }
}

printId('2')  // OK
printId(2)    // Ok
printId({id: 2})  // ----> Error



function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and ")); // Here: 'x' is 'string[]'
    } else {
        console.log("Welcome lone traveler " + x); // Here: 'x' is 'string'
    }
}
```
<br>

## Literal Types
```TypeScript
let hello: "hello" = "hello";
let hello: "hello" = "not hello"; // ----> Error

let alignment: "left" | "right" | "center" = "center";
let binaryNumber: 0 | 1 = 1
let binaryNumber2: 0 | 1 = 3  // ----> Error
```
<br>


## Big Int
```TypeScript
let bigNumber: bigint = 2000000n; // Available after es2020
```
<br>


## Type Aliases
```TypeScript

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
```
<br>

## Interfaces
```TypeScript
interface Point2 {
    x: number;
    y: number;
}

function printCoord(pt: Point2) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 })
```
<br>

## Interfaces vs Types

- Interfaces can be extended using extends & types can be extended using intersection
```TypeScript
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
```

- We can add new fields to interfaces
```TypeScript
interface Car {
    brand: string
}

interface Car {
    year: number
}

let newCar: Car = {brand: "BMW", year: 2022}
```
<br>

## Type Assertions
```TypeScript
let someNumber = 2 as number;
```
<br>

## In Operator
```TypeScript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
```
<br>

# Instance Of
```TypeScript
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());    // (parameter) x: Date
    } else {
        console.log(x.toUpperCase());    // (parameter) x: string
    }
}
```
<br>

## Assignments
```TypeScript
let x3 = Math.random() < 0.5 ? 10 : "hello";    // let x3: string | number

x3 = 2; 
console.log(x3) // let x3: number

x3 = "hi"
console.log(x3) // let x3: string
```
<br>

## Function Types
```TypeScript
const a = (fn: (x: string) => void): void => {
    fn("Hello World")
}

a(console.log);
```
<br>

## Call Signatures
- In JavaScript functions can have properties in addition to being callable
- A function is just an object so it can have a property

```TypeScript
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
```
<br>

## Optional Parameters
```TypeScript
function printName3(first: string, last?:string): void {
    console.log(first + last)
}

printName3('Shivam')
printName3('Shivam', 'Sanju')
```
<br>

## Function Type
```TypeScript
function printToConsole2(fn: Function){
    fn("Hi")
}

printToConsole2(console.log)
```
