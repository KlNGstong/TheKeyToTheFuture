const signsOf = {
    alex:{
        comedy:"2",
        action:"4",
        fantasy:"1",
        horrors:"5"
    },
    max:{
        comedy:"1",
        action:"3",
        fantasy:"4",
        horrors:"5"
    },
    dima:{
        comedy:"3",
        action:"5",
        fantasy:"4",
        horrors:"6"
    }
}
const justin = {
    comedy:"4",
    action:"4",
    fantasy:"3",
    horrors:"2"
}
let points = {}
let formula = 0
let keysSigns = Object.keys(signsOf)
keysSigns.forEach(function(names){
    Object.keys(names).forEach(function(marks,j){
        formula = formula + Math.pow(+justin[Object.keys(justin)[j]] - +marks,2)
    })  
    points[names] = Math.sqrt(formula)
}) 
let minKey = Object.keys(points)[0]
Object.keys(points).forEach(function(point) {
    if(points[minKey] > points[point]){
        minKey = point
    }
});
console.log(minKey);
