function twoTeams(data) {
    var firstShip = []
    var secondShip = []
    var keysData = Object.keys(data)
    keysData.forEach(function (item){
        if(data[item] < 20 || data[item] > 40){
            firstShip.push(item)
        } else {
            secondShip.push(item)
        }
    });
    return [firstShip.sort(),secondShip.sort()]
}
console.log(twoTeams({
    'Smith': 34,
    'Wesson': 22,
    'Coleman': 45,
    'Abrahams': 19
    }));
