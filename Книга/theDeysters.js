var  start = { 
    cost:{0:20,1:1},
    neighbors:[] // A-B
} 
var C = {
    cost:{0:1},
    neighbors:[] // Finish
}
var B = {
    cost:{0:19},
    neighbors:[] // A-Finish
}
var D = {
    cost:{0:10},
    neighbors:[]
}
var F = {
    cost:{0:1},
    neighbors:[]
}
var finish = 0
start.neighbors.push(C,B)
C.neighbors.push(F)
B.neighbors.push(D)
D.neighbors.push(finish)
F.neighbors.push(finish)
var sumDistance = 0
while(!start == finish){
    var minN = []
    var sumNeighbors = {}
    if(start.neighbors.includes(0)){
        for (let i = 0; i < start.neighbors.length; i++) {
            var min = [start.cost[0]]
            if(start.cost[i] < min) {
                var min = []
                min.push(start.cost[i])
                min.push(i)
              } 
        }
        sumDistance += min[0]
        start = start.neighbors[1]

    } else {
        for (let i = 0; i < start.neighbors.length; i++) {
            var min = start.neighbors[i].cost[0]
            for (let j = 0; j < start.neighbors[i].neighbors.length; j++) {
                if(start.neighbors[i].cost[j] < min) {
                    min = start.neighbors[i].cost[j]
                 }  
            }
            minN.push(min)
        }
        for (let i = 0; i < minN.length; i++) {
            sumNeighbors[i] = minN[i] + start.cost[i]
        }
        var keysDist = Object.keys(sumNeighbors)
        var min = sumNeighbors[keysDist[0]]
        for (let i = 0; i < keysDist.length; i++) {
            if(sumNeighbors[keysDist[i]] < min) {
               min = sumNeighbors[keysDist[i]]
             } 
        }
        sumDistance += +start.cost[+keysDist.find(item => sumNeighbors[item] == min)]
        start = start.neighbors[+keysDist.find(item => sumNeighbors[item] == min)]
        console.log(sumDistance); 
    }
}
console.log(sumDistance); 