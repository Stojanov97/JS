// da se vnesat dva broja za od koj do koj broj da gi oddeli site neparni broevi i sekoj neparen broj se mnozi so prethodniot

/*
let pocetok = Number(prompt("Vnesi od koj broj da pocne ovaa niza"));
let kraj = Number(prompt("Vnesi do koj broj da odi ovaa niza"));
let proizvod = 1;

while (pocetok <= kraj) {
  if (pocetok % 2 != 0) {
    proizvod *= pocetok;
  }
  pocetok++;
}

console.log(proizvod);
*/

//Ciklusi
// let karakter = prompt("Vnesi Broj");
// let niza = [];

// if (isNaN(karakter)) {
//   //isNaN -> is not a number
//   alert("Ne vnesovte brojka");
// } else {
//   while (!isNaN(karakter)) {
//     niza.push(karakter);
//     karakter = prompt("Vnesete brojka");
//   }
// }
// console.log(niza);

// let brojac = 0;

// // while (brojac < niza.length) {
// //   //console.log(niza[brojac]);
// //   document.write(niza[brojac]); // se ispisuva vo html
// //   brojac++;
// // }

// let brojac2 = 0;
// let zbir = 0;

// while (brojac2 < niza.length) {
//   zbir += Number(niza[brojac2]);
//   brojac2++;
// }

//document.write(zbir);
let cifri = [];

function digitInNumber(input) {
  console.log(`You entered ${input}`);
  while (input > 0) {
    console.log(input % 10);
    input = parseInt(input / 10);
  }
}

function deluxeDigitInNumber(input) {
  console.log(`You entered ${input}`);
  while (input > 0) {
    cifri.push(input % 10);
    input = parseInt(input / 10);
  }
  cifri.reverse();
  let counter = 0;
  while (counter < cifri.length) {
    console.log(cifri[counter]);
    counter++;
  }
}
digitInNumber(1234);
deluxeDigitInNumber(1234);

//Najgolemiot broj vo edna niza

let numbers = [1, -4, 5, 35, 46, 8, 10, 25, 163, -1, 2, 3];

function findLargestNum(input) {
  let brojac = 0;
  let max = -Infinity;
  while (brojac < input.length) {
    if (max < input[brojac]) {
      max = input[brojac];
    }
    brojac++;
  }
  return max;
}

let maxValue = findLargestNum(numbers);
console.log(maxValue);

//power

function sumPow(num1, num2) {
  let result = 0;
  let brojac = num1;
  while (brojac <= num2) {
    result += Math.pow(brojac, 2); // Math e object vo koi ima povekje metodi
    brojac++;
  }
  console.log(result);
}

sumPow(1, 10);

// Do, While

let x = 10;
let suma = 0;

do {
  suma += x;
  x++;
} while (x < 10);
console.log(suma);

//FOR
console.log("////////////////////////////////////////");
for (i = 0; i <= 10; i++) {
  console.log(i);
}

let iminja = ["Filip", "Hristo", "Riste", "Nikola", "Chedomir", "Stevica"];
for (z = 0; z < iminja.length; z++) {
  console.log(iminja[z]);
}

// niza brojki(stringovi) da mu se dade na korisnikot da vense broj od 10-100

let brojki = [
  "nula",
  "eden",
  "dva",
  "tri",
  "cetiri",
  "pet",
  "shest",
  "sedum",
  "osum",
  "devet",
];

//let broj = Number(prompt("Vnesi broj"));
// if (isNaN(broj) || broj < 10 || broj > 99) {
//   console.log("Nevaliden!!!");
// } else {
//   let str = " ";
//   for (let pom = broj; pom > 0; pom = parseInt(pom / 10)) {
//     let cifra = pom % 10; //sme ja dobile cifrata
//     str = " " + brojki[cifra] + str;
//   }
//   console.log(str.trim());
// }

//For of , For in

// ke se povtoruva dodeka ne se izbrojat site elementi od nizata(po element)
for (element of brojki) {
  //iminja[i] == element
  console.log(element);
}

// ke se povtoruva dodeka ne se izbrojat site elementi od nizata(po index)
for (brojka in brojki) {
  console.log(brojka);
}
