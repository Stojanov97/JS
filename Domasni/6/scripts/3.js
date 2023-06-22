let str = " ";
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        str = `${str} ${i} \n`;
    } else {
        str = `${str}${i}`;
    }
}
console.log(str.trim());