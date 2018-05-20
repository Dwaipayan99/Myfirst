//Maps and forof loop in javascript.....
var john={
    name:'i am john',
    age:24,
    isactive:true
}

var sam={
    name:'i am sam',
    age:29,
    isactive:false
}

var marry={
    name:'i am marry',
    age:31,
    isactive:true
}

let users = new Map()

//console.log(typeof users);

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users.size)

console.log(users.get('marry'))

console.log(users.keys())

console.log(users.values())

//forof loop........

for (const key  of users.keys()) {
    console.log(key)
    
}

for (const value  of users.values()) {
    console.log(value.name)
    
}

for (const [key,value]  of users.entries()) {
    console.log(key+'='+value)
    
}


//use forEach .....for performimg the same...and the use of ARROW function...


users.forEach((value,key)=>console.log(key+'='+value.name))


//Array of arrays...
var arrofarr=[['one',1],['two',2],['three',3]]
var newMap = new Map(arrofarr)
console.log(newMap)