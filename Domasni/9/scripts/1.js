let numbers = [6, 2, 0, 7, 9, 3];

let createList = (array) => {
  let list = document.createElement("ul");
  list.id = "listOfNums";
  list.style.listStyleType = "square";
  array.forEach((element) => {
    let listing = document.createElement("li");
    listing.innerText = element;
    list.appendChild(listing);
  });
  document.body.appendChild(list);
};

let sumOfListNums = (list) => {
  let nizaZaSum = [];
  //   list.children.forEach((child) => {
  //     nizaZaSum.push(Number(child.innerText));   - ne mi e jasno zosto ne raboti vaka
  //   });
  for (i = 0; i < list.children.length; i++) {
    nizaZaSum.push(Number(list.children[i].innerText));
  }
  let summed = nizaZaSum.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let mathEquation = nizaZaSum.join(" + ") + " = " + summed;
  let equation = document.createElement("h2");
  equation.style.color = "green";
  equation.textContent = mathEquation;
  document.body.appendChild(equation);
};

createList(numbers);
sumOfListNums(document.getElementById("listOfNums"));
