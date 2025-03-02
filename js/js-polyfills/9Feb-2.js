// Object.prototype.chai = function () {
//     console.log("Chai");
// }


// const arr = [1, 2, 3];

// if (!Array.prototype.fill) throw new Error('Please update your browser')
// arr.fill()

// if (!Array.prototype.fill) {
//     //Fallback - Polyfill fnc - Backu Function
//     Array.prototype.fill = function () {


//     }
// }

// arr

// const str = 'piyush'

// str

// const obj = { x: 1, length: 1 }

// obj.x


if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const originaArr = this // Array pointer which on it is runned

        for (let i = 0; i < originaArr.length; i++) {
            userFn(originaArr[i], i);
        }
    }
}

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            result.push(value);
        }

        return result;
    }
}

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i])) {
                result.push(this[i]);
            }
        }
        // console.log(result);
        return result;
    }
}

const arr = [1, 2, 3, 4, 5, 6]

// Error: .forEach function does not exist on arr variable.

// Real Signture ko samjo  - No return

const ret = arr.myForEach(function (value, index) {
    console.log(`Value at Index ${index} is ${value}`);
});


// console.log(`Ret is`, ret);

// Signature .map
// Return? - New Array, Each ele Iterate, userFn


const n = arr.map(e => e * 2);
const n2 = arr.myMap(e => e * 3);
// console.log(n);
// console.log(n2);
// console.log(arr);


// Signature .filter
// Return  - new array | input:userfn,
// Agar user ka fnc True return karta hai to use new Array me dal deta hain

const n3 = arr.filter((e) => e % 3 == 0);
const n4 = arr.myFilter((e) => e % 3 == 0);
console.log(n3);
console.log(n4);




