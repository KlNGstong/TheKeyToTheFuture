const data = "Hello"
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
let objKeys = Object.keys(obj)
let maxKey = objKeys[0]
objKeys.forEach(function(key,i){
    obj[maxKey] < obj[key] ? maxKey = key : undefined
})
console.log(maxKey);