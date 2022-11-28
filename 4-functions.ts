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