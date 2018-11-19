function addFractions(data) {
    let count = 0
    let denominator = 0
    let numerator = 0
   for (let i = 1; count != data.length; i++) {
    count = 0
      data.forEach(function(index) {
        i % index[1] == 0 ? (count++,denominator = i) : undefined
      });
   }
   for (let i = 0; i < count; i++) {
    numerator =  (denominator / data[i][1] * data[i][0]) + numerator
   }
   if(numerator % denominator == 0){
    return (numerator / denominator)
   }
   if(numerator > denominator){
       return (numerator - denominator) + " and " + (numerator - denominator) + "/" + denominator
   } 
   return numerator + "/" + denominator
}
console.log(addFractions([[2, 4], [2, 4]])) // "1 and 1/3";
