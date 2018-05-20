const mytodos=[{title:"Buy Bread",
isdone:true},{
    title:"Go to gym",
    isdone:false,},{
        title:"Upload youtube videos",
        isdone:true
    }]

    const thingsdone = mytodos.filter((todo)=>{
     return   todo.isdone===true
    })

    console.log(thingsdone)