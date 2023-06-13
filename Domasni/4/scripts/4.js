let animal = {
  name: "Bono",
  kind: "Dog",
  speak: function () {
    let line = "Hey bro!!!";
    return line;
  },
};
console.log(`${animal.kind} ${animal.name} says: "${animal.speak()}"`);
