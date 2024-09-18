//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions          -->> ye sab objects hi hote hain 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// ++++++++++++++++++++ Stack and Heap +++++++++++++

//stack

let myname = "Mudit"
let anothername = myname
anothername = "Ashok"

console.log(anothername);        //Ashok     // becuse it primitive and is stack
console.log(myname);               // Mudit 

// now heap

let userOne ={
    email:"mudit@gmail.com",
    upi:"user@ici"
}

let userTwo = userOne
userTwo.email = "Ashok@gmail.com"

console.log(userOne.email);   // will give Ashok@gmail.com
console.log(userTwo.email);   // will alos give Ashok@gmail.com    // because it is heap 
