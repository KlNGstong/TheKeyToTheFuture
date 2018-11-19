function verifyAnagrams(first_word, second_word){
    first_word = first_word.replace(/\s/g, '').toLowerCase()
    second_word = second_word.replace(/\s/g, '').toLowerCase()
    let objFirstWord = {}
    let objSecondWord = {}
    for (let i = 0; i < second_word.length; i++) {
        let second = Object.keys(objSecondWord)
        let first = Object.keys(objFirstWord)
        if(first.includes(first_word[i])){
            objFirstWord[first_word[i]]++ 
        } else {
            objFirstWord[first_word[i]] = 1
        }
        if (second.includes(second_word[i])){
            objSecondWord[second_word[i]]++
        } else {
            objSecondWord[second_word[i]] = 1
        }
    }
    second = Object.keys(objSecondWord)
    first = Object.keys(objFirstWord)
    for (let i = 0; i < first.length; i++) {
        if(objFirstWord[first.sort()[i]] != objSecondWord[second.sort()[i]] || first[i] != second[i]){
            return false
        } 
    }
    if(first_word.length != second_word.length){
        return false
    }
    return true
} 
console.log(verifyAnagrams("Programming","Gram Ring Mop"));

