
  function flatList(data){
    var flat = []
      while(data.length != 0){
        if(Array.isArray(data[0])){
          data = data.shift().concat(data)
        } else {
          flat.push(data.shift())
          }
       }
       return flat
  }
console.log(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]));