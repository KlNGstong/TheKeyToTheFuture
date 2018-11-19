function doubleSubstring(data) {
    const obj = {}
    for (let i = 0; i < data.length; i++) {
        let word = ''
        for (let j = i; j < data.length; j++) {
            word += data[j]
            if(Object.keys(obj).includes(word)){
                obj[word][0] += 1
            } else {
                obj[word] = [0,word.length]
            }
        }
    }
    const oKeys = Object.keys(obj)
    let max = 0
    let index = 0
    for (let i = 0; i <  oKeys.length; i++) {
        let fastI = obj[oKeys[i]][0] * obj[oKeys[i]][1]
        if(fastI > max){
           max = fastI
           index = obj[oKeys[i]][1]
        }
    }
    return index
}
console.log(doubleSubstring('aghtfghkofgh'));
