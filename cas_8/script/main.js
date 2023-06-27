// let niza = [5, 4, 1, 10, 3, 2];

// niza.forEach((x, i) => {
//   console.log(x); //vrednost
//   console.log(i); //index
// }); //najmnogu se koristi za da se izmine ili ispise edna niza

// //map

// let niza2 = niza.map((x) => x * 2); // da dobieme nova niza koja ke ima porazlicni vrednosti od prvata niza
// console.log(niza2);
// niza2.forEach((x) => console.log(x));
// console.log("///////////////////////////////////");
// let niza3 = niza.map((x, i) => x * 2 + i);
// niza3.forEach((x) => console.log(x));

// //filter

// let kandidati = [
//   { name: "stojan", prezime: "stojanovski", height: 165 },
//   { name: "david", prezime: "davidovski", height: 175 },
//   { name: "elena", prezime: "elenovska", height: 180 },
// ];

// let kandidatiPovisokiOd170 = kandidati.filter((x) => x.height > 170);
// kandidatiPovisokiOd170.forEach((x) => console.log(x.name));

// //sort

// // niza.sort((x1, x2) => x2 - x1); //x1-x2 - ascending x2-x1 - decending
// // console.log(niza);

// //reduce
// console.log(niza);
// let redicedNiza = niza.reduce((acc, curr) => {
//   //acc - accumulator(vrednost), curr - current(index)
//   console.log(acc);
//   return acc + curr;
// }, 0);
// console.log(redicedNiza);

// let proizvod = niza.reduce((x, y) => {
//   return x * y;
// }, 1);

// console.log(proizvod);

window.onload = function () {
  //cel kod treba ovde da se pise namesto da se pisuva defer gore vo head na html
};

//manipulacija so DOM

let idElement = document.getElementById("title");
console.log(idElement);
// console.dir(idElement);
let blockElements = document.getElementsByClassName("block");
console.log(blockElements);
let firstElement = blockElements[0];
console.log(firstElement);

let links = document.getElementsByTagName("a");
console.log(links);
let link = links[0];
console.log(link);

let title = document.querySelector("#title");
let blockElement = document.querySelector(".block");
let blockElements2 = document.querySelectorAll(".block");
let links2 = document.querySelectorAll("a");
console.log(links2);

let naslov = idElement.innerText;
console.log(naslov);

// idElement.innerText = "Zdravo";
console.log(link.attributes[0].value);
// link.attributes[0].value = "https://www.google.com";//prv nacin za menuvanje vrednost na atribu a i zad odavanje

link.setAttribute("href", "https://www.google.com"); // prviot e key a vtoriot e value
link.removeAttribute("href");

function lightOn() {
  document
    .getElementById("light")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
}

function lightOff() {
  document
    .getElementById("light")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
}

//document.getElementById("light_off").onclick = lightOff;

document.getElementById("light_off").addEventListener("click", lightOff);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  document.getElementById("result").innerHTML = `<p>${new Date()}<p/>`;
});
