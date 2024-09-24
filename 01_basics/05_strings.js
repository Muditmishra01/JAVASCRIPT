const name = "mudit"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mudit-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-12, 4)
console.log(anotherString);         // important

const newStringOne = "   mudit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mudit.com/mudit%20mishra"

console.log(url.replace('%20', '-'))

console.log(url.includes('sudeep'))

console.log(gameName.split('-'));


//EXTRA FUNCTIONS
// 1) string.prototype.localecompare()

// Case-insensitive comparison
console.log("apple".localeCompare("Apple", undefined, { sensitivity:"base" })); // 0 (ignores case)

//2) string prototype.match()

let str = "The quick brown fox jumps over the quick but lazy dog";
let result = str.match(/quick/g);   // will give list of all matches 

console.log(result);

//without global g wil  give the first match

//3) charAt
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"