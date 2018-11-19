function isAscending(items) {
    var PNumber = items[0]
    for (let i = 1; i < items.length; i++) {
        if(PNumber >= items[i]){
            return false
        }
    }
    return true;
}
console.log(isAscending([9, 10, 99, 123456]));
