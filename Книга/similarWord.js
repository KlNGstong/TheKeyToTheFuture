const data = "Hesado"
const allWords = ["Heasdo","Habitually","Hack","Hacking","Hello","Hail","Hail","Hair","Half","Hall","Halo",
                "Hand","Handicap","Handkerchief","Hands","Handsome","Handwriting","Hang","Happened","Happily",]
const obj = {}
allWords.forEach(function(word){
    let count = 0
    word.split("").forEach(function(letter,jInd){
        data[jInd] == letter ? count++ : count--
    }) 
    obj[word] = count
})
let maxKey = Object.keys(obj)[0]
Object.keys(obj).forEach(function(key,i){
    if(obj[maxKey] < obj[key]){
        maxKey = key
    }
})
console.log(maxKey);