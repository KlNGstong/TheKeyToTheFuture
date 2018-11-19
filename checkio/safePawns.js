function safePawns(data) {
    const letters = ["a","b","c","d","e","f","g","h"]
    let count = 0
    for (let i = 0; i < data.length; i++) {
        const fast = letters.indexOf(data[i][0])
        if(data.includes((letters[fast-1] + String(+data[i][1]-1))) || data.includes(letters[fast+1] + String(+data[i][1]-1))){
            count++
        }
    }
    return count
}
console.log(safePawns(["b4","c4","d4","e4","f4","g4","e5"]));
