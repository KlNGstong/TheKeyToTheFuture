function house(plan) {
    const data = plan.split("\n")
    const InWide = []
    const InHeight = [];
    data[0] == "" ? data.shift() : undefined    
    data.forEach((und,i) =>{
        data[i].split("").forEach((und,j) =>{
            data[i][j] == "#" ? (InWide.push(j+1) , InHeight.push(i)) : undefined 
        })
    })
    let max = 0
    let min = InWide[0]
    if(InHeight[0] == undefined){
        return 0
    }
    InWide.forEach(function(index){
        index > max ? max = index : undefined
        min > index ? min = index : undefined
    });
    return ((InHeight[InHeight.length-1]+1 - InHeight[0]) * (max - (min-1)));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));
