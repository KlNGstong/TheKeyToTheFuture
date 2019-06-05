function safePawns(data) {
    const letters = ["a","b","c","d","e","f","g","h"]
    let count = 0
    data.forEach(function (curValue,i) {
        const fast = letters.indexOf(curValue[0])
        let short =  String(+curValue[1]-1)
        if(data.includes(letters[fast-1] + short) || 
           data.includes(letters[fast+1] + short)){
            count++
        }    
    }); 
    return count
}
console.log(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]));
