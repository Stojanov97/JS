let findNumber = (number, array) => {
  let i = 0;
  array.forEach((element) => {
    if (element == number) {
      i++;
    }
  });

  return `There is ${i} occurrences of number ${number} in the array`;
};

let array1 = [4, 7, 8, 15, 17, 8, 6, 12, 3, 15];
let array2 = [4, 6, 9, 19, 20, 13, 23, 6, 5, 2, 3, 9, 4];
let array3 = [11, 13, 5, 42, 32, 3, 8, 0, 4, 1, 0, 4, 5, 5, 3];

console.log(findNumber(19, array1));
console.log(findNumber(4, array2));
console.log(findNumber(5, array3));
