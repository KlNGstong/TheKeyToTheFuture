const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function checkPangram(text){
    var ALPHABETobj = {}
    var data = text.replace(/[^a-zA-Z]/g, '').toLowerCase().split("")
    for (let i = 0; i < data.length; i++) {
        ALPHABETobj[data[i]] = true
    }
    for (let i = 0; i < ALPHABET.length; i++) {
        if (ALPHABETobj[ALPHABET[i]] !== true || !ALPHABET.length >= data.length) {
            return false
        }
    }
    return true;
}
console.log(checkPangram("abcefghijklmnopqrstuvwxyz"));
