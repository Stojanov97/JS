//prodolzenie ciklusi

//literal notation
let movie = {
  title: "Random Movie",
  year: 2023,
  stars: ["StarOne", "StarTwo", "StarThree"],
};

let keys = Object.keys(movie); // se kreira niza od keys [title, year, stars]
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = movie[key];
  console.log(`${key}: ${value}`);
  if (Array.isArray(value)) {
    for (let j = 0; j < value.length; j++) {
      console.log(value[j]);
    }
  }
}

let niza = [
  [1, 2, 3],
  [5, 8, 10],
  [11, 23, 41],
];

for (element of niza) {
  for (podElement of element) {
    console.log(podElement);
  }
}

for (kluc in movie) {
  console.log(movie[kluc]);
}
//so for in gi dobivame keys od objektite, i indexite od nizite
//so for of gi dobivame vrednsotite od objektite, i vrednostite od nizite

//break & continue

let denovi = [
  "pondelnik",
  "vtornik",
  "sreda",
  "cetvrtok",
  "petok",
  "sabota",
  "nedela",
];

for (let i = 0; i < denovi.length; i++) {
  if (denovi[i] == "cetvrtok") {
    break;
  }
  console.log(denovi[i]);
}

//continue e za da se skipne nesto pri listanje niz nizata odnosno da go pronajde i da preskokne nekoja naredba vo uslovot odnosno da odi na sledna iteracija
for (let i = 0; i < denovi.length; i++) {
  if (denovi[i] == "cetvrtok") {
    continue;
  }
  console.log(denovi[i]);
}

let artikli = ["leb", "mleko", "puter", "salata"];

function checkForItemInAritkli(item) {
  for (let artikl of artikli) {
    if (artikl === item) {
      console.log(`artiklot ${item} e pronajden`);
      return artikl;
    }
  }
  console.log(`artiklot ne e pronajden vo nizata`);
  return null;
}

checkForItemInAritkli("mleko");

function deleteItem(item) {
  for (let i = 0; i < artikli.length; i++) {
    if (artikli[i] === item) {
      console.log(`Item has been deleted`);
      artikli[i] = null;
      return true;
    }
  }
  return false;
}

let stat = deleteItem("mleko");
console.log(stat);
console.log(artikli);

//prodolzenie za funkcii
// function name (){} -> name()

//anonimni funkcii

let printanje = function () {
  console.log("Hello");
};

printanje();

//arrow funkcii

let nesto = () => {
  console.log(`hello`);
};
nesto();

let sobiranjeSo10 = (a) => a + 10; //moze bez zagradi ako e eden parametar za pocekje treba, a vaka koga ima edna radeba moze da se pisuva vo eden red
console.log(sobiranjeSo10(5));

let proizvod = (broj1, broj2) => {
  result = broj1 * broj2;
  console.log(`${broj1} * ${broj2} = ${broj1 * broj2}`);
  return result;
};

proizvod(3, 5);

function osnovnaFunkcija(...args) {
  console.log(args[2]);
}

osnovnaFunkcija(1, 2, "s", true);

function sobiranje(broj) {
  let vkupno = 0;
  for (let i = 0; i < broj; i++) {
    vkupno += i;
  }
  console.log(vkupno);
}
sobiranje(10);

//rekurzivna funkcija

function sum(num) {
  if (num === 0) {
    return 0;
  }
  return num + sum(num - 1);
}

console.log(sum(5));

function sums(num) {
  if (num === 0) {
    return 0;
  }
  console.log(num);
  return sums(num - 1);
}

sums(6);
//returning function from another function
function calc(operator) {
  switch (operator) {
    case "+":
      return function (number1, number2) {
        return number1 + number2;
      };
    case "-":
      return function (number1, number2) {
        return number1 - number2;
      };
    case "/":
      return function (number1, number2) {
        return number1 / number2;
      };
    case "*":
      return function (number1, number2) {
        return number1 * number2;
      };
    default:
      console.log("error");
      return null;
  }
}

let operacija = calc("-");

console.log(operacija(1, 2));

//function as argument

function greeting() {
  console.log("Hi");
}

function bye() {
  console.log("Bye");
}

function test(number, f1, f2) {
  if (number % 2 == 0) {
    f1();
  } else {
    f2();
  }
}

test(2, greeting, bye);

//function in an array

let nizaOdFunkcii = [greeting, bye, (num1, num2) => num1 + num2, calc];

console.log(nizaOdFunkcii[2](1, 1));

//setTimeout

let timeout = setTimeout(() => {
  alert("Hi");
}, 1000);

clearTimeout(timeout);

//setInterval

let interval = setInterval(() => {
  alert("Interval");
}, 2500);

clearInterval(interval);

//higher order functions - sekogas kako argument dobivaat funkcija

//1. forEach()

artikli.forEach((artikl) => console.log(artikl));

let students = [
  { firstName: "Riste", lastName: "Stojanov" },
  { firstName: "a", lastName: "x" },
  { firstName: "b", lastName: "y" },
];

students.forEach((student) =>
  console.log(`${student.firstName} ${student.lastName}`)
);
