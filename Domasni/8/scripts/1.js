function product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}
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
