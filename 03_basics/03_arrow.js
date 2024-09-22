const user = {
    username: "mudit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);   // gives info about the current context
    }

}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);                   //will give empty {} as it is outside        



// function chai(){
//     let username = "mudit"
//     console.log(this.username);       // here this is not able to access this username
// }

// chai()



// const chai = function () {
//     let username = "mudit"
//     console.log(this.username);   // this can access in objects not in the functions 
// }
// chai()


//IMPORTANT POINTS
// 1)this gives the info about the context,

// 2)if we are using (this) outside the scope of abjects or functions in the node js , 
// it will give the empty {} 

//3) but if we are using (this) in the console of google then it will give many things,
//perform it on the console and it will give window object ,and what we can do in it

//3) we can access the elements through (this), if we are inside objects , 
// but (this) cannot the access element if it is inside the functions,(undefined)


// arrow function 

const chai = () => {
    let username = "mudit"
    console.log(this);
}
chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// } 

// const addtwo = (num1,num2) =>  num1 + num2     // on emore way to do

 const addtwo = (num1,num2) =>  (num1 + num2)   // no need for return here

// const addTwo = (num1, num2) => ({username: "mudit"})  // for objects


console.log(addtwo(3,4))
