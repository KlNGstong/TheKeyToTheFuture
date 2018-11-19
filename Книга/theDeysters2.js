var  start = { 
    name:"start",
    cost:{0:5,1:3},
    neighbors:[] 
} 
var A = {
    name:"A",
    cost:{0:2},
    neighbors:[] 
}
var B = {
    name:"B",
    cost:{0:5,1:2},
    neighbors:[] 
}
var D = {
    name:"D",
    cost:{0:6},
    neighbors:[]
}
var C = {
    name:"C",
    cost:{0:10,1:3},
    neighbors:[]
}
var finish = {
    name:"finish"
}
start.neighbors.push(A,B)
A.neighbors.push(C)
B.neighbors.push(A,D)
D.neighbors.push(finish)
C.neighbors.push(finish,D)
const forCheck = []
const cost = {}
cost[start.name] = 0
forCheck.push(start)
while(0 < forCheck.length) {
        var costCheck = forCheck.shift()
        while (Object.keys(costCheck.cost).length != 0) {
            var min = costCheck.cost[0]
            var index = 0
            for (let j = 0; j < costCheck.neighbors.length; j++) {
                if(costCheck.cost[j] < min){
                    min = costCheck.cost[j] 
                    index = j
                }       
            }
            var costToNode = costCheck.cost[index] + cost[costCheck.name]
            var node = costCheck.neighbors[index].name
            if(!cost[node]){ 
                cost[node] = costToNode
            } else if (cost[node] > costToNode) {
                cost[node] = costToNode
            }
            if(costCheck.neighbors[index].name != "finish"){
                forCheck.push(costCheck.neighbors[index])
            }
            costCheck.neighbors.splice(index,1)
            delete costCheck.cost[index]
        }
    
}
console.log(cost.finish);
alert(cost.finish)


