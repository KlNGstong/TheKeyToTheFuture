let nNumber = [999, 999]
function nearestSquare(number) {
    for (let i = 1; i < number; i++) {
        const FNumber  = i*i
            if(nNumber[0] > FNumber - number && FNumber > number){
                nNumber = [FNumber - number , FNumber]
<<<<<<< nearest
            }
        } else {
            if(nNumber[0] > number - FNumber){
=======
            } else if(nNumber[0] > number - FNumber){
>>>>>>> local
                nNumber = [number - FNumber , FNumber]
        }
    }
    return nNumber[1];
}
console.log(nearestSquare(25));
