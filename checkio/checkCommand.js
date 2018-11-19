function checkCommand(pattern, command){
    let data  = (pattern).toString(2)
    if(data.length < command.length ){
        data = Array((command.length - data.length)+1).join("0") + (pattern).toString(2)
    }
    for (let i = 0; i < data.length; i++) {
       if(data[i] == 0 && command[i] >= 0){

       } else if(data[i] == 1 && /^[a-z]/i.test(command[i])){
           if(command[i] == undefined){
               return false
           }
       } else {
           return false
       }
    }
    return true
}
console.log(checkCommand(3,"a"));
