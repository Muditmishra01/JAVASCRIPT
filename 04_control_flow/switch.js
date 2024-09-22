
const month = "april"

switch(month){
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("february")
        break;
    case "march":
        console.log("march")
        break;                         
    case "april":
        console.log("april is the month")
        break;   
    
    default:
        console.log("this is the default case")
        break;
}

// break is mandatory because , if not used then after matching the specified case
// it will run all the case below it 