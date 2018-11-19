
  function indexPower(data, n){
    if(data[n]==undefined){
      return -1;
    }
    if(data[n]==0){
      return 1;
    }
    var number=Math.pow(data[n],n);

  return number;
}
console.log(indexPower([1, 2, 3, 4], 2));

