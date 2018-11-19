var alphabet = "abcdefghijklmnopqrstuvwxyz"
function toDecrypt(text, delta) {
    let data = alphabet.split("")
    for (let i = 0; i < 5 ; i++) {
        data = data.concat(data)
    }
    let textT = text.replace(/[^a-zA-Z ]/g, "").split("")
    for (let i = 0; i < textT.length; i++) {
        if(textT[i] != " "){
            if(delta > 0){
                textT.splice(i,1,data[data.indexOf(textT[i]) + delta])
            } else {
                textT.splice(i,1,data[data.lastIndexOf(textT[i]) + delta])
            }
        }
    }
    return textT.join("")
}
console.log(toDecrypt("!d! [e] &f*", -3));