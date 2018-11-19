
function transposeMatrix(data){
    var trMatrix = []
    var fullMatrix = []
    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < data.length; i++) {
            trMatrix.push(data[i][j])
        }
        fullMatrix.push(trMatrix + ",")
    }
    return fullMatrix;
}
console.log(transposeMatrix(
    [[1, 2, 3]
    , [4, 5, 6]
    , [7, 8, 9]]));
