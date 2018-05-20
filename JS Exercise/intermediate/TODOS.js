let myTodos={
    day:'monday',
    meetings:0,
    meetdone:0
}

let addmeeting=function(todo,meet=0)
{
    todo.meetings=todo.meetings+meet;
}

let meetDone=function(todo,meet=0)
{
    todo.meetdone=todo.meetdone+meet
}

let reset=function(todo)
{
    todo.meetings=0;
    todo.meetdone=0;
}

let getsummary=function(todo)
{
    let left=todo.meetings-todo.meetdone;
    return`you have${left}meetings left`
}

addmeeting(myTodos,4)
addmeeting(myTodos,2)
meetDone(myTodos,5)

console.log(getsummary(myTodos))

