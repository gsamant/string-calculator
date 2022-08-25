function add(numbers) {
    console.log(numbers);
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}
 
exports.add = add;