// basically looping on arrays 

const coding = ["js", "ruby", "java", "python", "cpp"]      //working on for each 

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){       // alag se function bna ke use kr skte hain 
//     console.log(item);
// }

// coding.forEach(printMe)       // yaha use kiya hai

// coding.forEach( (item, index, arr)=> {      // srif item nahi , aur bhi bhej skte hain
//     console.log(item, index, arr);
// } )

const myCoding = [                   // inside array if there are objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {            // using for each for  each object 
    
    console.log(item.languageName);
} )

