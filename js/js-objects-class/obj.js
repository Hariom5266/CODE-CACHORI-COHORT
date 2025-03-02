const p1={
    fname:'hariom',
    lname:'joshi',
    address:{
        h:1,
        s:1
    }   
}

const p1KaString = JSON.stringify(p1)
console.log(p1KaString);
let p2 = JSON.parse(p1KaString)
console.log(p2);





