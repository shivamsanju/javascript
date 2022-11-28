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