// The prototype is a reference to another object and is used when a property or method is called on an object

function Person(name,age){
    this.name = name;
    this.age = age;
}

let person = Object.create(Person.prototype);

Person.prototype.sayHello = function(){
    console.log("Hello, my name is"+this.name);
}

person.sayHello();