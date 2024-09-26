const myObj = {       // for object we use for in loop
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"

}

// for (const key in myObj) {
//    console.log(key)
// }
// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`)
//  }

 // can we use for in in the arrays
 const programming = ["js","rb","pyhton","cpp"]

 for (const key in programming) {
   console.log(programming[key])         // to get value we use the programming[key]
 }
 // in array if we are using the for in then we and print the key then we will get the (INDEX)

 // but as we knew that we get the direct value if using the for of loop in  the array 

// FOR IN in the maps -> we cannot use the for in in maps because it is not iterable through it

