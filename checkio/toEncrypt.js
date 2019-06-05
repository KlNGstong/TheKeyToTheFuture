function toEncrypt(text, delta) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    text = text.split('')
    text.forEach(function (curValue,i) {
        alphabet = alphabet.concat(alphabet)
        if(delta > 0 && curValue != " "){
            text.splice(i,1,alphabet[alphabet.indexOf(curValue) + delta])
        } else if(curValue != " ") {
            text.splice(i,1,alphabet[alphabet.lastIndexOf(curValue) + delta])
        }
    }) 
    return text.join('')
}
console.log(toEncrypt("important text",10));
