let x = 10;
if (true) 
{
let y = 20;
var z = 30;
console.log(x + y + z);
// → 60
}
// y is not visible here as y is a local variable not a global variable....x is a global variable...
//z is declared as var and so it is a global variable
console.log(x + z);
// → 40