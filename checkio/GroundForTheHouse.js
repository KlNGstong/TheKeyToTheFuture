function house(plan) {
    const data = plan.split("\n")
    const InWide = []
    const InHeight = [];
    let max = 0
    let min = data[0].length
    data.forEach((str,i) =>{
        str.split("").forEach((sumb,j) =>{
                if (max < j && sumb == "#"){
                    max = j+1
                }
                if(min > j && sumb == "#"){
                    min = j
                }
                    InHeight.push(i)
                    return 
        })
    })
    return ((InHeight[InHeight.length-1]+1 - InHeight[0]) * (max+1 - min));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));
