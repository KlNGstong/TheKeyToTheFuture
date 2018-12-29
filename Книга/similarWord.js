<<<<<<< HEAD
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
=======
let data = "Hello"
let allWords = ["Heasdo","Habitually","Hack","Hacking","Hello","Hail","Hail","Hair","Half","Hall","Halo",
                "Hand","Handicap","Handkerchief","Hands","Handsome","Handwriting","Hang","Happened","Happily",]
let obj = {}
for (let i = 0; i < allWords.length; i++) {
    let count = 0
    for (let j = 0; j < allWords[i].length; j++) {
        if(data[j] != undefined){
            if(data[j] == allWords[i][j]){
                count++
            }
        } else {
            count--
        }
    }
    obj[allWords[i]] = count
}
let objKeys = Object.keys(obj)
let max = [obj[objKeys[0]],objKeys[0]]
for (let i = 0; i < objKeys.length; i++) {
    if(max[0] < obj[objKeys[i]]){
        max = [obj[objKeys[i]],objKeys[i]]
    }
}
console.log(max[1]);
>>>>>>> a178cbb4f1787741f25a14b29b2d2e2f96830d53
