function hammingDistance(n, m){
    let count = 0
    let nh = (n).toString(2).split("")
    let mh = (m).toString(2).split("")
    if(n > m){
       mh = Array((nh.length - mh.length)+1).join("0").split("").concat((m).toString(2).split(""))
    } else {
       nh = Array((mh.length - nh.length)+1).join("0").split("").concat((n).toString(2).split(""))
    }
    for (let i = 0; i < mh.length; i++) {
        if(mh[i] != nh[i]){
            count++
        }
    }
    return count
}
console.log(hammingDistance(117, 17)); // 3
