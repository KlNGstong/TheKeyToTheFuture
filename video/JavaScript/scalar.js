let scalar1 = 5
let scalar2 = scalar1
--scalar1
++scalar2
console.dir({scalar1,scalar2})
 
const object1 = { field: 5 }
const object2 = object1
object1.field = 6
console.dir ({ object1, object2 })

// dir / log
//console.log печатает элемент в дереве, подобном HTML
//console.dir печатает элемент в дереве, подобном JSON
