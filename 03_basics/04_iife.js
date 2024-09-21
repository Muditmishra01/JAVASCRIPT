// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mudit')


// global scope se kai baar pollution hoti hai , and to remove that pollutionm we use this IIFE.