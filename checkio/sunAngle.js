function sunAngle(dayTime) {
    let degree = 0
    let time = dayTime.split(":")
    if(+time[0] < 6 || (time[0] > 18 && +time[1] > 0)){
        return "I don't see the sun!"
    }
    let i = [6,0]
    while(i[0] != +time[0] || i[1] != +time[1]) {
        if(i[1] == 60){
            i[1] = 0
            i[0]++
        } else {
            degree += 3.75
            i[1] += 15
        }
    }
    return degree;
}
console.log(sunAngle("18:01"));
