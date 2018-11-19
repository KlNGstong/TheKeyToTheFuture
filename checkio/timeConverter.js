function timeConverter(dayTime) {
    const data = dayTime.split(" ")
    const time = data[0].split(":")
    if(data[1] == "p.m."){
        if(time[0] < 12){
            return (String(+time[0] + 12)) + ":" + time[1]
        } else {
            return time[0] + ":" + time[1]
        }
    } else {
        if(time[0] == 12){
            return 00 + ":" + time[1]
        } else {
            if(time[0] < 10){
                return 0 + time[0] + ":" + time[1]
            }
        }
    }
    return '12:30';
}
console.log(timeConverter('7:30 a.m.'));
