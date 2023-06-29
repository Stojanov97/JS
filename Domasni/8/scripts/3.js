function product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}
let avg = (array) => {
  return Math.round(
    array.reduce((acc, curr) => (acc + curr) / array.length, 0)
  );
};

let checkForAVowel = (array) => {
  array
    .filter((product) => product.hasDiscount == false)
    .forEach((e) => {
      switch (e.name[0]) {
        case "u":
        case "U":
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
          vowelProductsWithoutDiscount.push(e);
      }
    });
  if (vowelProductsWithoutDiscount.length == 0) {
    return `There aren't any products like that`;
  } else {
    return vowelProductsWithoutDiscount;
  }
};
let products = [
  new product("Turbo", "CarParts", false, 30000),
  new product("Wheel", "CarParts", false, 15000),
  new product("Engine", "CarParts", true, 12000),
  new product("Tire", "CarParts", false, 1800),
  new product("Bread", "Food", false, 60),
  new product("Broccoli", "Food", true, 125),
  new product("Tomato", "Food", false, 90),
  new product("Milk", "Food", true, 80),
  new product("Cheese", "Food", false, 600),
  new product("Lolipop", "Food", true, 13),
  new product("Chocolate", "Food", false, 40),
  new product("Pork", "Food", false, 350),
  new product("Detergent", "Chemical", false, 378),
  new product("Soap", "Chemical", true, 120),
  new product("Antiperspirant", "Chemical", true, 150),
];

let greaterThan20 = [];
let productsOnDiscount = [];
let productsOnDiscountPrice = [];
let vowelProductsWithoutDiscount = [];
products
  .filter((product) => product.price > 20)
  .forEach((e) => greaterThan20.push(e.name));
products
  .filter((product) => product.category == "Food")
  .forEach((e) => foods.push(e.name));
products
  .filter((product) => product.hasDiscount == true)
  .forEach((e) => productsOnDiscountPrice.push(e.price));

console.log("-----Products that cost more than 20-----");
console.log(greaterThan20.join(", "));
console.log("-----Products that are food-----");
console.log(foods.join(", "));
console.log("-----Average price of the products that are on discount-----");
console.log(avg(productsOnDiscountPrice));
console.log("-----Products that are not on a discount");
console.log(checkForAVowel(products));
