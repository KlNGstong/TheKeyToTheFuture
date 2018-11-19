function numbersFactory(number){
    const obj ={}
    for (let i = 0; i < 1; i++) {
        let data = [number,""]
        for (let j = 9; j > 0; j--) {
            if(data[0] % j == 0){
                j = 9
                data.splice(0,1,data[0] % j)
                data.join(j)
            }
        }
        obj[i] = +data[1]
    }        
    return obj;
}
console.log(numbersFactory(20))
