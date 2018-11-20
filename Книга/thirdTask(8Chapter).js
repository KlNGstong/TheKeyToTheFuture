let allStations = {
    kone:["id","nv","ut"],
    ktwo:["wa","id","mt"],
    kthree:["or","nv","ca"],
    kfour:["nv","ut"],
    kfive:["ca","az","fa"]
}

let allStates = []
const numberOfStates = {}
while(allStates.length < 8){
    const KeysAll = Object.keys(allStations)
    KeysAll.map(function(index,j){
        const IKeys = allStations[KeysAll[j]]
        IKeys.map(function (index,i){
            if (allStates.includes(IKeys[i])){
                IKeys.splice(i,1)
            } else {
                numberOfStates[KeysAll[i]] = IKeys.length
            }
        })
    })
        
    let min = numberOfStates[KeysAll[0]]
    let minStation = KeysAll[0]
    KeysAll.map(function(index,m) {
        if(min < allStations[KeysAll[m]].length){
            min = allStations[KeysAll[m]].length
            minStation = KeysAll[m]
        }
    })
    allStates = allStates.concat(allStations[minStation])
    delete allStations[minStation]
}
console.log(allStates);

