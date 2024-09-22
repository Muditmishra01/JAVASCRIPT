//var c = 300         // not a good practice 
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}



 console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "mudit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);         

     two()

}

// one()

if (true) {
    const username = "mudit"
    if (username === "mudit") {
        const website = " youtube"
         //console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++ interesting concept about declartion of function in variable ++++++++++++++++++


console.log(addone(5))            // it is correct,because its direct function 

function addone(num){
    return num + 1
}



//addTwo(5)                               // will give error 
const addTwo = function(num){       // because function is stored in variable 
    return num + 2
}