function convert(numerator, denominator) {
    let data = String(numerator/denominator)
    let count = 0
    let allNumders = {}
    for (let i = 2; i < data.length; i++) {
        let number = ""
        let keys = Object.keys(allNumders)
        for (let j = i; j < data.length; j++) {
            number += data[i]
            if(keus.includdes(number)){

            }
        } 
    }
    return  data[0] + "." + result.join("");
}
console.log(convert(3,8)); // 0.(3)
