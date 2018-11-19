function repeatInside(line) {
    let objLine = {}
    let maxLine = ""

    for (let i = 0; i < data.length; i++) {
        var lineKeys = Object.keys(objLine)
        for (let j = 0; j < data.length; j++) {
            if(lineKeys.includes(data[j])){
                
            } else {
                objLine[data[j]] == 1
                count++
            }
        }
    }
    return maxLine;
}
console.log(repeatInside('aaaaa'));
