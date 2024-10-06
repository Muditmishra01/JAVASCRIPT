// Dates

let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);     // object 

// let myCreatedDate = new Date(2023, 0, 23)
 let myCreatedDate = new Date(2023, 0, 23, 5, 3, 12) //but in this format write like 0
//let myCreatedDate = new Date("2023-01-14")      //write month from index 1
//let myCreatedDate = new Date("01-14-2023")
 console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()      // will give in milliseconds

 // console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


//CODE FOR GIVE -> DIFFERENCE BETWEEN TIME OF TWO DATES 

let olddate = new Date(2024,9,5,8,15,22)
let currentdate = Date.now()
let time = Math.floor((currentdate - olddate.getTime())/1000)
console.log(time);

let hour = Math.floor(time/(60*60))        // with this we get 26 hr 
console.log(hour);
let min = Math.floor((time - (26*60*60))/60)    // we got 17 min
console.log(min);
let sec = (time - (26*60*60)  - (17*60))
console.log(sec);

console.log(`The total hours from yesterdays time is ${hour} hour and the minutes are ${min} and the remaining seconds are ${sec}`);











