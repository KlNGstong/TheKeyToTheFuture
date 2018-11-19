function countWords(text, words){
    var data = text.toLowerCase()
    var counter = 0
    for (let i = 0; i < data.length; i++) {
        var wordOrNoWord = data[i] 
        for (let j = i+1; j < data.length; j++) {
            wordOrNoWord += data[j]
            if(words.includes(wordOrNoWord)){
                var del = words.indexOf(wordOrNoWord)
                words.splice(del,1)
                counter++
            }
        }
    }
    return counter
}
console.log(countWords("Bananas, give me bananas!!!",["banana","bananas"]));
