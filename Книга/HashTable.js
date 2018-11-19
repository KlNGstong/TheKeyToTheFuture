
var voted = []
function checkVoter(name) {
  if (voted[name]) {
    return ("Kick them out!")
  } else {
    voted[name] = true
    return ("let them vote!")
  }
}
console.log(checkVoter("Tom"));
console.log(checkVoter("Bill"))
console.log(checkVoter("Mike"))
console.log(checkVoter("Tom"))