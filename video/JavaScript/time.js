const INTERVAL = 500 
let counter = 0 
const MAX_VALUE = 10
let timer = null 
const event = () => {
    if(counter === INTERVAL){
        console.log("The end ")
        clearInterval(timer)
        return
    }
    console.dir("count : " + counter+ ",\n" + "time : " + String(new Date()).split(" ")[4]   )
    counter++
}
console.log("Begin")
timer = setInterval(event,500)

//Что возращает setInterval
// Исполнение функции произойдёт спустя время, указанное в параметре delay
