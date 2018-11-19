const allThings = {
    math:{name:"math",from:9.00,to:10.00},
    music:{name:"music",from:9.30,to:10.30},
    СS:{name:"СS",from:10.00,to:11.00},
    physics:{name:"physics",from:11.00,to:12.00}
}
const schedule = []
const keysAllThings = Object.keys(allThings)
for (let i = 0; i < keysAllThings.length; i++) {
    const short = allThings[keysAllThings[i]]
    let min = short.to
    let subject = short
    for (let j = i; j < keysAllThings.length; j++) {
        if(short.to < min){
            min = short.to
            subject = short
        }  
    } 
    if(schedule.length == 0) {
        schedule.push(subject)
    } else if ((schedule[schedule.length-1].from +1) ==  subject.from){
        schedule.push(subject)
    }
      
}

console.log(schedule);
