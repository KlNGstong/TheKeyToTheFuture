function transposeMatrix(data) {
    for (let i = 0; i < data.length; i++) {
        var length = data[i].length
        for (let j = 0; j < length; j++) {
            data[j].push(data[i].shift())
        }
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].length == 0){
            data.splice(i,1)
            i--
        }
    }
    return data
}
console.log(transposeMatrix([[5,5,0,7],[5,4,8,3],[8,7,0,7]]));
