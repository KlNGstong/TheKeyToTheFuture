function house(plan) {
    const data = plan.split("\n")
    const InWide = []
    const InHeight = [];
    if(data[0] == ""){
        data.shift()  
    }
    data.forEach((und,i) =>{
        data[i].split("").forEach((und,j) =>{
            if(data[i][j] == "#"){
                InWide.push(j+1) 
                InHeight.push(i)
            }
        })
    })
    let max = 0
    let min = InWide[0]
    if(InHeight[0] == undefined){
        return 0
    }
    InWide.forEach(function(index){
        if(index > max){
            max = index 
        }
        if(min > index){
            min = index 
        } 
    });
    return ((InHeight[InHeight.length-1]+1 - InHeight[0]) * (max - (min-1)));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));
