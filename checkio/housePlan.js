function house(plan) {
    const data = plan.replace(/^0+/, '')
    return data.length;
}
console.log(house(`
0000000
##00##0
######0
##00##0
#0000#0
`));
