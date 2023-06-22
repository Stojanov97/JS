function multiplyDigits(num) {
    while (num > 0) {
        let digit = num % 10;
        array.push(digit);
        num = parseInt(num / 10);
    }
    let product = 1;
    for (digit of array) {
        product *= digit;
    }
    console.log(product);
}
let inputNum = Number(prompt("Enter a number to multiply it's digits"));
let array = [];
while (isNaN(inputNum)) {
    inputNum = Number(prompt("Enter a number to multiply it's digits"));
}
multiplyDigits(inputNum);