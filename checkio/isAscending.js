function isAscending(items) {
    items.forEach(function name(curValue, i){
        return items[0] >= items[i++]
    });
    return items.some(name);
}
console.log(isAscending([4,5,6,7,3,7,9]));
