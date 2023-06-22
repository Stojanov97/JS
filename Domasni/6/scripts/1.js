function maxNum(input) {
    let max = -Infinity;
    for (index in input) {
        if (input[index] > max) {
            max = input[index];
        }
    }
    return max;
}

function minNum(input) {
    let min = +Infinity;
    for (index in input) {
        if (input[index] < min) {
            min = input[index];
        }
    }
    return min;
}
let array = [];
let element = Number(prompt("Enter a number"));
while (!isNaN(element)) {
    array.push(element);
    element = Number(prompt("Enter a number/ To stop inputing numbers in the array just type in a letter"));
}
let max = maxNum(array);
let min = minNum(array);
let sum = max + min;
document.write(`Max: ${max}, Min: ${min}, Sum: ${sum}`);