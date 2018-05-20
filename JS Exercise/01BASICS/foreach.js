const days=['mon','tue','wed','thur','fri','sat']

days.forEach(function(){console.log("Greeting for the user")})

// the above set of lines is a call back function...here the fuction has no name...


// in the lines below a general function is used and is called ...there is no use of 
// call back function..which was done in the above program......a function with no name 
// is called as the CALL BACK FUNCTION..the above code lacks the fuction name SAYHELLO..
const days=['mon','tue','wed','thur','fri','sat']

let sayhello=function()
{
    console.log("Greeting for the user")
}

days.forEach(sayhello)
