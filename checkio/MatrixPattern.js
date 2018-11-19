function matrix(pattern, data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let count = 0
            let indexs = []
            let d = [i,j]
            let jPat = 0
            for (let iPat = 0; iPat < pattern.length; iPat++) {
                for (let jPat = 0; jPat < pattern[iPat].length; jPat++) {
                    if(data[d[0]] == undefined){
                        jPat = pattern[0].length
                        iPat = pattern.length-1
                    } else {
                        if(pattern[iPat][jPat] == data[d[0]][d[1]]){
                            count++
                            indexs.push(iPat)
                            indexs.push(jPat)
                            d[1]++
                        }
                    }
                }
                d[1] = j
                d[0]++
            }
            if(count == (pattern.length * pattern[0].length)){
                for (let s = 0; s < indexs.length; s += 2) {
                    if(data[indexs[s]][indexs[s+1]] == 0){
                        data[indexs[s]].splice(indexs[s+1],1,2)
                    } else {
                        data[indexs[s]].splice(indexs[s+1],1,3)
                    }
                }
            }
        }
    }
    return data;
}
console.log(matrix([[0,1,0],[1,1,1]],
    [[0, 1, 0, 1, 0],
     [1, 1, 1, 0, 0],
     [0, 1, 0, 1, 1],
     [1, 1, 1, 1, 0],
     [0, 1, 1, 0, 0]]));
    // for (let i = 0; i < data.length-1; i++) {
        //    for (let j = 0; j < data[i].length-1; j++) {
        //        const iIf = [data[i][j],data[i][j+1]]
        //        const jIf = [data[i+1][j],data[i+1][j+1]]
        //        const indexs = [[i,j],[i,j+1],[i+1,j],[i+1,j+1]]
        //        if(iIf.join("") === pattern[0].join("") && jIf.join("") === pattern[1].join("")){
        //           for (let d = 0; d < indexs.length; d++) {
        //               if(data[indexs[d][0]][indexs[d][1]] == 0){
        //                 data[indexs[d][0]].splice(indexs[d][1],1,2)
        //               } else {
        //                 data[indexs[d][0]].splice(indexs[d][1],1,3)
        //               }
        //           }
        //        }
        //    }
        // }