// singleton
// Object.create

// object literals

const mySym = Symbol("key1")           //give unique id 
//console.log(typeof mySym);           // symbol           



const JsUser = {
    name: "Mudit",
    "full name": "Mudit Mishra",      // [] for outputl also
    [mySym]: "mykey1",                  //[] for symbol
    age: 18,
    location: "lucknow",
    email: "mudit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
//  console.log(JsUser["email"])
// console.log(JsUser["full name"])
// //console.log(JsUser.full name)          //error
//  console.log(JsUser[mySym])
//  console.log(typeof JsUser.mySym)       //undefined


JsUser.email = "mudit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mudit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());