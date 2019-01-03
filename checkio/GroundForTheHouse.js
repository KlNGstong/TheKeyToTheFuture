function house(plan) {
    const data = plan.split("\n")
    const InWide = []
    const InHeight = [];
    if(data[0] == ""){
        data.shift()  
    }
    let max_min = [0,data[0].length]
    data.forEach((str,i) =>{
        data[i].split("").forEach((sumb,j) =>{
            if(sumb == "#"){
                if (max_min[0] < j){
                    max_min.splice(0,1,j+1)
                }
                if(max_min[1] > j){
                    max_min.splice(1,1,j)
                }
                InHeight.push(i)
            }
        })
    })
    if(InHeight[0] == undefined){
        return 0
    }
    return ((InHeight[InHeight.length-1]+1 - InHeight[0]) * (max_min[0]+1 - (max_min[1])));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));
