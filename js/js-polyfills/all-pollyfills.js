//  map
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            result.push(userFn(this[i], i));
        }

        return result;
    }
}

//  foreach
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        for (let i = 0; i < this.length; i++) {
            userFn(this[i], i);
        }
    }
}

//  filter
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i], i)) {
                result.push(this[i]);
            }
        }

        return result;
    }
}

//  reduce
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (userFn, initalValue) {
        let accumlator = initalValue;
        let startIndex = 0;

        if (initalValue === undefined) {
            if (this.length === 0) {
                throw new TypeError("Reduce of array with no inital value");
            }
            accumlator = this[0];
            startIndex = 1;
        }
        for (let i = startIndex; i < this.length; i++) {
            accumlator = userFn(accumlator, this[i], i, this);
        }
        return accumlator
    }
}

// slice
if (!Array.prototype.mySlice) {
    Array.prototype.mySlice = function (startIndex, endIndex) {
        const result = [];
        if (endIndex === null || endIndex === undefined) {
            endIndex = this.length;
        }
        for (let i = startIndex; i < endIndex; i++) {
            result.push(this[i]);
        }

        return result;
    }
}

// splice
if (!Array.prototype.mySplice) {
    Array.prototype.mySplice = function (startIndex, deleteCount, ...addingElements) {
        let arr = this;
        let removed = [];

        startIndex = startIndex < 0 ? Math.max(arr.length + startIndex, 0) : Math.min(startIndex, arr.length);
        deleteCount = deleteCount === undefined ? arr.length - startIndex : Math.max(0, Math.min(deleteCount, arr.length - startIndex));

        for (let i = 0; i < deleteCount; i++) {
            removed.push(arr[startIndex + i]);
        }

        let itemsAfterDeletion = arr.slice(startIndex + deleteCount);
        let newLength = startIndex + addingElements.length + itemsAfterDeletion.length;

        for (let i = arr.length; i < newLength; i++) {
            arr[i] = undefined;
        }

        let newArr = [...arr.slice(0, startIndex), ...addingElements, ...itemsAfterDeletion];

        arr.length = newArr.length;
        for (let i = 0; i < newArr.length; i++) {
            arr[i] = newArr[i];
        }

        return removed;
    };
}

// concat
if (!Array.prototype.myConcat) {
    Array.prototype.myConcat = function (...arrArgs) {
        const result = [];
        
        for(let i = 0;i<this.length;i++){
            result.push(this[i]);
        }

        for(let i=0;i<arrArgs.length;i++){
            for(let j=0;j<arrArgs[i].length;j++){
                result.push(arrArgs[i][j]);
            }
        }


        return result;
    }
}


//  include
//  blind 
//  find
//  entries
// indexOf

//  #Map - Transforms each element of an array and returns a new array.
// Signature: value,index,array -> newArray

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);
console.log(nums.myMap(n => n * 2));

// #ForEach
// Signature: value,index,array -> oldArr

const num2 = [1, 2, 3];
num2.forEach(e => {
    console.log(e);

});
num2.myForEach(e => { console.log(e); });

// #Filter
// Signature: value,index,array -> newArray

const num3 = [1, 2, 3, 4, 5, 6, 8, 12];
const even = num3.filter(e => e % 2 == 0);
console.log(even);
const myEven = num3.myFilter(e => e % 2 == 0);
console.log(myEven);

// #reduce - Reduces the array to a single value by applying a function iteratively.

// Signature: accumulator,value,index,arr,initalvalue -> result

// accumulator – Stores the accumulated result from previous iterations.
// currentValue – The current element in the iteration.
// index (optional) – The index of currentValue in the array.
// array (optional) – The original array being iterated over.
// initialValue (optional, but recommended) – The starting value for the accumulator.

const num4 = [1, 2, 3, 4, 5, 6, 8, 9];
const sum = num4.reduce((acc, n) => acc + n, 0);
console.log(sum);
const mySum = num4.myReduce((acc, n) => acc + n, 0);
console.log(mySum);

// #Slice - Extarcts Elements into a new array.
// Signature: startIndex,endIndex(excluded) -> newArray

const num5 = [1, 2, 3, 4, 5];
const extractedArr = num5.slice(1);
console.log(extractedArr);
const myExtractedArr = num5.mySlice(1);
console.log(myExtractedArr);


// #Splice - modified the original array
// Signature: start,deletecount,(item1,item2) - Element for insert -> oldArray
const num6 = [1, 2, 3, 4, 5];
num6.splice(1, 2, 5, 6, 7);
console.log(num6);

const num7 = [1, 2, 3, 4, 5]
num7.mySplice(1, 2, 5, 6, 7);
console.log(num7);

// #Concat
// Signature: arr1,arr2 -> newArray

const num8 = [1, 2, 3];
const num9 = [4, 5, 6];
const merged = num8.concat(num9);
console.log(merged);

const num10 = [1, 2, 3];
const num11 = [4, 5, 6];
const myMerged = num10.myConcat(num11, num8,num7);
console.log(myMerged);













