function stripedWords(text){
const c = ["b", "c" ,"d", "f"
                        , "g" ,"h" ,"j" ,"t"
                        ,"k", "l" ,"m" ,"n" 
                        ,"p" ,"q", "r" ,"s"
                        ,"w" ,"x", "z" ,"v",undefined]
    const v = [ "a" ,"e" ,"i" ,"o" ,"u" ,"y",undefined]
    const data = text.replace(/[^a-zA-ZА]/gi,'').toLowerCase().split(" ")
    let count = 0
    let control = true
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if(c.includes(data[i][j]) && v.includes(data[i][j+1])){

            } else if(c.includes(data[i][j+1]) && v.includes(data[i][j])){

            } else {
                count += 999
                j = data[i].length
            }
        }
        if(count >= 999){
            count -= 999
        } else {
            count++
        }
    }
    return count;
}
console.log(stripedWords("My name is ..."))
