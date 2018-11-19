function countingTiles(radius){
    let ret
    let count = 0
    for (let i = 0.9; i < radius; i++) {
        count += 8
    }
    return [0, count]
}
console.log(countingTiles(2.1));
