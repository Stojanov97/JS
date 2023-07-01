function product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}
let hasDiscount = (arrayMain, discount, noDiscount) => {
  arrayMain
    .filter((product) => product.hasDiscount == true)
    .forEach((product) => discount.push(product));

  arrayMain
    .filter((product) => product.hasDiscount == false)
    .forEach((product) => noDiscount.push(product));
};

let greaterThan20 = (array) => {
  let greaterThan20 = [];
  array
    .filter((product) => product.price > 20)
    .forEach((product) => greaterThan20.push(product.name));
  return `-Products that cost over 20-\n${greaterThan20.join(", ")}`;
};

let searchCategory = (array, category) => {
  let searchedCategory = [];
  array
    .filter((product) => product.category == category)
    .forEach((product) => searchedCategory.push(product.name));
  if (array == productsOnDiscount) {
    return `-Products that are in ${category} and are on discount-\n${searchedCategory.join(
      ", "
    )}`;
  } else if (array == productsNoDiscount) {
    return `-Products that are in ${category} and are not on discount-\n${searchedCategory.join(
      ", "
    )}`;
  } else {
    return `-Products that are in ${category} category-\n${searchedCategory.join(
      ", "
    )}`;
  }
};

let avg = (array) => {
  let prices = [];
  array.forEach((product) => prices.push(product.price));
  if (array == productsOnDiscount) {
    return `-Average price on products that are not on discount-\n${Math.round(
      prices.reduce((acc, curr) => acc + curr, 0) / array.length
    )}`;
  } else if (array == productsNoDiscount) {
    return `-Average price on products that are not on discount-\n${Math.round(
      prices.reduce((acc, curr) => acc + curr, 0) / array.length
    )}`;
  } else {
    return `-Average price of the products-\n${Math.round(
      prices.reduce((acc, curr) => acc + curr, 0) / array.length
    )}`;
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

let productsOnDiscount = [];
let productsNoDiscount = [];
hasDiscount(products, productsOnDiscount, productsNoDiscount);
console.log(greaterThan20(products));
console.log(searchCategory(productsOnDiscount, "Food"));
console.log(avg(productsOnDiscount));
