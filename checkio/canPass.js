function canPass(data, first, second) {
    var fill = Array(data[0].length+1).join("h").split("")
    data.unshift(fill)
    data.push(fill)
    for (let i = 1; i < data.length-1; i++) {
        data[i].push("h")
        data[i].unshift("h")
    }
    var FigAround = [0,1,-1,0,1,0,0,-1] 
    var iI = first[0]+1
    var iJ = first[1]+1
    while (1 == 1) {
        var control = false
        for (let i = 0; i < FigAround.length; i += 2) {
                if(data[iI][iJ] == data[iI + FigAround[i]][iJ + FigAround[i+1]]){
                    data[iI].splice(iJ,1,"h")
                    iI += FigAround[i]
                    iJ += FigAround[i+1]
                    control = true
                    i = FigAround.length
                }   
        }
        if(iJ == second[1]+1 && iI == second[0]+1){
            return true
        }
        if(control == false){
            return false
        }
    }
}
console.log(
    canPass([[0,0],[0,0]], [0,0], [1,1]));
