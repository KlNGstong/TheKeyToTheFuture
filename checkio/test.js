function getNumbersSum(num){

    return num.toString().split('').reduce(function(a, b) {

        return +a + +b;

    })

}
console.log(getNumbersSum(20))