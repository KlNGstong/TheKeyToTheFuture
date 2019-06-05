function isAscending(items) {
    let ret = items.map(function (curValue,i) {
        if(items[0] >= items[i++]){
            return false
        } else {
            return true
        }
    })
    if(ret.splice(1,items.length).includes(false)){
        return false;
    }
    return true;
}
console.log(isAscending([-5, 10, 99, 123456]));
