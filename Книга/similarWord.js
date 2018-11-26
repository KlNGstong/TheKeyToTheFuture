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
