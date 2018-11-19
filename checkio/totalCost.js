function totalCost(calls){
    var coin = 0
    for (let i = 0; i < calls.length; i++) {
        var data = +calls[i].split(" ").splice(2,1)
        if((data / 60) != Math.round((data / 60))){
            coin += Math.round(data / 60)+1
        } else {
            coin += (data / 60)
        }   
    }
    return coin;
}
console.log(totalCost([
"2014-01-01 01:12:13 181",
"2014-01-02 20:11:10 600",
"2014-01-03 01:12:13 6009",
"2014-01-03 12:13:55 200"]));
