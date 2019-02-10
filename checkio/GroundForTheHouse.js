function house(plan) {
    const data = plan.split("\n")
    let inWide = []
    let inHeight = [];
    let max = 0
    let min = data[0].length
    data.forEach((str,i) =>{
        str.split("").forEach((sumb,j) =>{
                if(sumb == "0"){
                    return
                }
                if (max < j ){
                    max = j+1
                }
                if(min > j ){
                    min = j
                }
                    InHeight.push(i)
        })
    })
    return ((InHeight[InHeight.length-1]+1 - InHeight[0]) * (max+1 - min));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));