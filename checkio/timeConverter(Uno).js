function timeConverter(dayTime) {
    let time = dayTime.split(":")
    if(time[0] == "00"){
        return "12" + ":" + time[1] + " a.m."
    }
    if(time[0] == 12){
        return dayTime + " p.m"
    } else if(time[0] < 12){
        if(time[0] < 11){
            return dayTime.slice(1) + " a.m."
        } else {
            return dayTime + " a.m."
        }
    } else{
            return time[0] - 12 + ":" + time[1] + " p.m."
    }
}
console.log(timeConverter('23:15'));
