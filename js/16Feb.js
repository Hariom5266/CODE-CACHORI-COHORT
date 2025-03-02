Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
    // this.name -> here name is pointed to the name of the fnc
}

function masalaChai() { }
function gingerChai() { }

function greet(name) { // here name is placeholder or parameter
    return `Hello ${name}`;
}

// greet("Hitesh");
// greet("Hariom").describe; // output =>
greet.describe("Hariom");  // hariom is argument
// greet.describe();
masalaChai.describe();

// fnc declaration
function add(a,b){
    return a+b;
}

// fnc express
const substract = function(a,b){
    return a-b;
}

// arrow fnc
const mutiply = (a,b)=>a*b

// First class fnc -> Tier-1 -> higher order fnc
// there is no difference between fnc or number, fnc can be return
function applyOperation(a,b,operation){
    return operation(a,b)
}

const result = applyOperation(5,4,(x,y)=>x/y)
// console.log(result);

// clouser
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}

const counter = createCounter()
console.log(counter);
console.log(counter());


function onef(){
    let myName = "hariom";
}

// console.log(myName); // not scope of the myName

// IIFE - Immediately Invoked Function Expression
(function(){
    console.log("Hariom"); 
})();

// here name of fnc e.g., test doesnt make a sense
(function test(){
    console.log("Test");
})();






