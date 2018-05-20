const newtodos=[{title:'Buy Bread',
isdone:true},{
    title:'Go to Gym',
    isdone:false,
},{
    title:'Upload youtube videos',
    isdone:false,
}]

const thingsdone = newtodos.filter((todo)=>{
    return todo.isdone===true
})

console.log(thingsdone)