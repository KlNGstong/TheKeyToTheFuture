function sequence(matrix) {
    let l = matrix.length
    for (let i = 0; i < l ; i++) {
        matrix.push(["g","o","g","g"])
    }
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == matrix[i][j+1] && matrix[i][j] == matrix[i][j+2] && matrix[i][j] == matrix[i][j+3]){
                return true
            }
            if (matrix[i][j] == matrix[i+1][j] && matrix[i][j] == matrix[i+2][j] && matrix[i][j] == matrix[i+3][j]) {
                return true
            }
            if(matrix[i][j] == matrix[i+1][j+1] && matrix[i][j] == matrix[i+2][j+2] && matrix[i][j] == matrix[i+3][j+3]){
                return true
            }
            if(matrix[i][j] == matrix[i+1][j-1] && matrix[i][j] == matrix[i+2][j-2] && matrix[i][j] == matrix[i+3][j-3]){
                return true
            }
        }
    }
    return false;
}
console.log(
    sequence([
        [7, 1, 1, 8, 1, 1],
        [1, 1, 7, 3, 1, 5],
        [2, 3, 1, 2, 5, 1],
        [1, 1, 1, 5, 1, 4],
        [4, 6, 5, 1, 3, 1],
        [1, 1, 9, 1, 2, 1]
    ]));
