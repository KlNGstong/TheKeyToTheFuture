
function isFamily(data) {
  let fathers = []
  let sons = []
  data.forEach(function(item) {
    fathers.push(item[0])
    sons.push(item[1])
  });
  return true
}
  console.log(isFamily([["Logan","Mike"],["Alexander","Jack"],["Jack","Logan"]]
));

