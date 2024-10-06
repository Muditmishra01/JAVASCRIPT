const score = 400
 console.log(score);

const balance = new Number(100)               // isme datatype bhi deta hai
 console.log(balance);

 //console.log(balance.toString().length);       // conversion
 //console.log(balance.toFixed(3));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));       // will give 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));      
 //console.log(Math.ceil(4.2));
 //console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());              // gives number between 0  to 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // very good formula 



let time = Date.now()
console.log(Math.floor(time/1000))


// CODE FOR MAKING AN 6 digit OTP -----------

console.log(Math.random()* (999999 - 100000 + 1) + 100000);



