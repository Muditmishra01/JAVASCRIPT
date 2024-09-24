// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {            // for of works in array 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {          // also works in string 
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()            // for of also works in map 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {              // cna use [] in the iterator to seperate 
    // console.log(key, ':-', value);
}

const myObject = {         // for of do not works in the objects 
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


for (const element of arr) {          // my example 
    console.log(element);
    
}