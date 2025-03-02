const obj1={
    fname:'HR,',
    lname:'JG',
    getFullName:function(){
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`;
        return this.fname;
    },
};

const obj2 = {
    fname:'Anirudh',
    lname:'Jwala',
    getFullName:function(){
        return `${this.fname} ${this.lname}`
    },
}

// Prototype Inheritance

obj2.__proto__ = obj1;
// obj1.__proto__ = null;

// DRY - Do not repeat yourself

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());

const obj = {};
obj.__proto__; // in browser

const arr = [1,2,3,4,5];
arr.__proto__; // in browser
arr.__proto__.__proto__; // in browser

const s="Hariom";
s.__proto__; // in browser
s.__proto__.__proto__; // in browser


// Syntax Sugar (Cheeni)





