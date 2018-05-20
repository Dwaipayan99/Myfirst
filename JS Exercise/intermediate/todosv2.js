let mytodos={
    day:'monday',
    meetings:0,
    meetdone:0,

      addmeet:function(num)
    {
        this.meetings=this.meetings+num;
        console.log(`You have${this.meetings}left`)
    }
}

mytodos.addmeet(4)
