var mike = {
    name :"mike",    
    must:[],
    debitors:[]
}
var alex = {
    name: "alex",
    must: [],
    debitors: []                                                                                                                         
}
var logan = {
    name: "logan",
    must: [],
    debitors: []
}
mike.debitors.push({ person: logan, sum: 43 })
alex.debitors.push({person: mike,sum: 40})
logan.debitors.push({person: alex,sum: 40})
mike.must.push({person: alex,sum: 10 })
alex.must.push({person: logan,sum: 50})
logan.must.push({person: mike,name: 50})
function grath(data) {
    var must = data.must.reduce(function(sum, current) {
        return sum + current.sum;
      }, 0);
    var debitors = data.debitors.reduce(function(sum, current) {
        return sum + current.sum;
      }, 0);
  return (data.name + " : " + "must:" + must + " ," + "debitors:" + debitors)
}
console.log(grath(alex));
console.log(grath(alex));
