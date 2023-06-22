let firstArray = [1, 2, 3, 4, 5];
let secondArray = [];
for (digit of firstArray) {
    secondArray.unshift(digit);
}
console.log(firstArray);
console.log(secondArray);