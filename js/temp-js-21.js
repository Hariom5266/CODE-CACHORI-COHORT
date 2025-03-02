// function Animal (name, energy) {
//   let animal = Object.create(Animal.prototype)
//   animal.name = name
//   animal.energy = energy

//   return animal
// }

// Animal.prototype.eat = function (amount) {
//   console.log(`${this.name} is eating.`)
//   this.energy += amount
// }

// Animal.prototype.sleep = function (length) {
//   console.log(`${this.name} is sleeping.`)
//   this.energy += length
// }

// Animal.prototype.play = function (length) {
//   console.log(`${this.name} is playing.`)
//   this.energy -= length
// }

// const leo = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)

// leo.eat(10)
// snoop.play(5)

// console.log(Array.prototype);

// Prototypes are the underlying mechanism through which objects inherit features from one another

// Every object has a prototype, forming a prototype chain. When an object is created, it inherits properties and methods from its prototype, and this chain continues until a prototype with null is reached.

const myObj = {
    city:"New York",
    greet(){
        console.log(`Hello from ${this.city}`);
    },
};

// console.log(Object);
console.log(Object.prototype);
console.log(Object.getPrototypeOf(myObj));

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

let person1 = new Person("Alice", 25);
person1.sayHello(); // Output: Hello, my name is Alice


console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

let obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); 

let cat = { meow: function() { console.log("Meow"); } };
let newCat = {};
Object.setPrototypeOf(newCat, cat);
newCat.meow(); // Output: Meow

console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true


// The prototype chain follows this order:
// person1 → Person.prototype → Object.prototype → null

console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
