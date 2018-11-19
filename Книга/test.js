const obj = {
    name: 'A',
    cost: 5
}

const table = {}
table[obj.name] = obj
// table.A = obj
const table2 = {}
table2[obj.name] = obj

console.log({table, table2})
obj.cost = 10
console.dir('cost = 10', JSON.stringify({table, table2}))
table.A.cost = 225
table.A.newFiels = 'wefwefewf'
console.dir('cost = 225', JSON.stringify({table, table2}))

const d =2