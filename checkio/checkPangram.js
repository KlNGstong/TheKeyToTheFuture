const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
function checkPangram(text){
    const contrl = []
    text.replace(/[^a-zA-Z]/g, '').toLowerCase().split("").forEach((letter)=>{
        if(!contrl.includes(letter)){
            contrl.push(letter)
        }
    })
    if(contrl.length == ALPHABET.length ){
        return true;
    }
    return false
}
console.log(checkPangram("The quick brown fox jumps over the lazy dog."));
