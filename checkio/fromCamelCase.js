function fromCamelCase(name) {
    let data = name.split(/(?=[A-Z])/)
    let result = ""
    for (let i = 0; i < data.length; i++) {
        result += data[i].toLowerCase() + "_"
    }
    return result.substring(0, result.length - 1);
}
console.log(fromCamelCase("IPhone"));
