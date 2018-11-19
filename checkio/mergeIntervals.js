function mergeIntervals(intervals) {
    let data = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let abb = [data[data.length-1],intervals[i]]
        if(abb[0][1] < abb[1][1]){
            if((abb[1][0] == abb[0][1]+1 || abb[1][0] == abb[0][1])&& abb[1][0] <= abb[1][1]){
                data.splice(abb[0],1,[abb[0][0],abb[1][1]])
            } else if(abb[1][0] < abb[0][1] && abb[1][1] > abb[0][1]){
                data.splice(abb[0],1,[abb[0][0],abb[1][1]])
            } else {
                data.push(abb[1])
            }
        }
    }
    if(data[0] == undefined){return []}
    return data;
}
console.log(mergeIntervals([]));
