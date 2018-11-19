function symmetric(data) {
    let mass = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if(data[i][j] != 0){
                mass.push(data[i][j])
            }
        }
    }
    mass = mass.sort(function(a, b) {
                        return a - b;
                    });
    for (let i = 0; i < mass.length; i++) {
       for (let j = 0; j < mass.length; j++) {
           if((mass[i] + mass[j]) == 0){
               mass.splice(i,1)
               mass.splice(j-1,1)
               i--
           }
       } 
    }
    if(mass.length == 0){
        return true;
    }
    return false
}
console.log(symmetric([
    [0, 1, 2],
    [-1, 0, 1],
    [-2, -1, 0]]));
