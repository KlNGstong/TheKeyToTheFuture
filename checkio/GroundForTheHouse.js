function house(plan) {
    const data = plan.split("\n")
    const inHeight = [];
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
                    inHeight.push(i)
        })
    })
    return ((inHeight[inHeight.length-1]+1 - inHeight[0]) * (max+1 - min));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));