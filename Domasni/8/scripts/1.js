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
  if (greaterThan20.length > 0) {
    return `-Products that cost over 20-\n${greaterThan20.join(", ")}`;
  } else {
    greaterThan20 = "There aren't any";
    return `-Products that cost over 20-\n${greaterThan20}`;
  }
};

let searchCategory = (array, category) => {
  let searchedCategory = [];
  array
    .filter((product) => product.category == category)
    .forEach((product) => searchedCategory.push(product.name));
  if (searchedCategory.length > 0) {
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
  } else {
    searchedCategory = "There aren't any";
    return `-Products that are in ${category} category-\n${searchedCategory}`;
  }
};

let avg = (array) => {
  let prices = [];
  array.forEach((product) => prices.push(product.price));
  if (array == productsOnDiscount) {
    return `-Average price on products that are on discount-\n${Math.round(
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

let startsWithVowel = (array) => {
  let vowelProducts = [];
  array.forEach((product) => {
    switch (product.name[0]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
        vowelProducts.push(`${product.name} - ${product.price}`);
    }
  });
  if (vowelProducts.length > 0) {
    if (array == productsOnDiscount) {
      return `-Products and their price that are on discount and start with a vowel-\n${vowelProducts.join(
        ", "
      )}`;
    } else if (array == productsNoDiscount) {
      return `-Products and their price that are not on discount and start with a vowel-\n${vowelProducts.join(
        ", "
      )}`;
    } else {
      return `-Products and prices that start with a vowel-\n${vowelProducts.join(
        ", "
      )}`;
    }
  } else {
    vowelProducts = "There aren't any";
    return `-Products and prices that start with a vowel-\n${vowelProducts}`;
  }
};

let ascOrDes = (array, way) => {
  let sortedArray = [];
  way == "ascending"
    ? (sortedArray = array
        .sort((x1, x2) => x1.price - x2.price)
        .map((e) => e.name))
    : (sortedArray = array
        .sort((x1, x2) => x2.price - x1.price)
        .map((e) => e.name));
  if (array == productsOnDiscount) {
    return `-Products sorted by ${way} price that are on discount-\n${sortedArray.join(
      ", "
    )}`;
  } else if (array == productsNoDiscount) {
    return `-Products sorted by ${way} price that are not on discount-\n${sortedArray.join(
      ", "
    )}`;
  } else {
    return `-Products sorted by ${way} price-\n${sortedArray.join(", ")}`;
  }
};

let products = [
  new product("Soda", "Beverage", false, 35),
  new product("Beer", "Beverage", false, 80),
  new product("Juice", "Beverage", true, 65),
  new product("Energy Drink", "Beverage", false, 70),
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
console.log(startsWithVowel(productsNoDiscount));
console.log(ascOrDes(products, "ascending"));
