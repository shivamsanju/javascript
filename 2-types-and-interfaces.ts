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
