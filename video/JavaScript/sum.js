const add = (a, b) => a + b
console.log("Add numbers : 5 + 2 = " + add(5,2));
console.log("Concatenate: \"5\" + \"2\" = " + add('5','2')); //поучему  тут 52?
console.log("Concatenate: 5 + \"2\" = " + add(5,'2')); //поучему  тут 52?

console.log("Subtraction: 5 + (-2) = " + add(5,-2));

// как происходит преобразование типов в выражениях
//Если a имеет тип string ,а b имеет тип number ,то выражение переабразовуеться в тип srting
//Если а имеет тип number,а b имеет тип number ,то выражение переабразовуеться в тип numbere
