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
    for (let j = 0; j < KeysAll.length; j++) {
        const IKeys = allStations[KeysAll[j]]
        for (let i = 0; i < IKeys.length; i++) {
            if (allStates.includes(IKeys[i])){
                IKeys.splice(i,1)
            } else {
                numberOfStates[KeysAll[i]] = IKeys.length
            }
        }
    }
    let min = numberOfStates[KeysAll[0]]
    let minStation = KeysAll[0]
    for (let m = 0; m < KeysAll.length; m++) {
        if(min < allStations[KeysAll[m]].length){
            min = allStations[KeysAll[m]].length
            minStation = KeysAll[m]
        }
    }
    allStates = allStates.concat(allStations[minStation])
    delete allStations[minStation]
}
console.log(allStates);

