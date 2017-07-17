function romanNumerals(number) {
  var obj={
    I:1,
    IV:4,
    V:5,
    IX:9,
    X:10,
    L:50,
    XC:90,
    C:100,
    D:500,
    CM:900,
    M:1000
  }
var romanNumebers=Object.keys(obj);
for(var i=romanNumebers.length-1; i > 0; i-- ){
var numb=n/obj[romanNumebers[i]]
if(numb > 0){
  var j=0;
  while (numb > i) {
    mass.push(obj[romanNumebers[i]])
    j++
  }
  var n = n%obj[romanNumebers[i]]
}
}
return "";
}
