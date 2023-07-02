//let niza = [5, 4, 1, 10, 3, 2];

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
//console.log(niza);
//let redicedNiza = niza.reduce((acc, curr) => {
//  //acc - accumulator(vrednost), curr - current(momentalna vrednost na elementot vo nizata - spored indexot)
//  console.log(acc + " " + curr);
//  return acc + curr;
//}, 0);
//console.log(redicedNiza);

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

//9to predavanje

let input = document.getElementById("inputField");
let formBtn = document.getElementById("formBtn");
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
});

let div = document.createElement("div");
div.id = "firstDiv";
div.innerHTML = `<p>ova e paragraf<p/><h1>Naslov<h1/>`;
div.style.color = "red";
div.style.height = "100px";
div.style.width = "100px";
div.style.background = "green";
div.className.add = "";
document.body.appendChild(div);

let studenti = [
  { name: "Hristo", surname: "Gigovski", email: "e1" },
  { name: "Riste", surname: "Stojanov", email: "e2" },
  { name: "Nikola", surname: "Talevski", email: "e3" },
  { name: "Chedomir", surname: "Stefanovski", email: "e4" },
  { name: "Stevica", surname: "Manasievski", email: "e5" },
];

function createTable(niza, naslov) {
  let tabela = document.createElement("table");
  let caption = document.createElement("caption");
  caption.innerText = naslov;
  tabela.appendChild(caption);
  let firstRow = document.createElement("tr");
  for (key in niza[0]) {
    let th = document.createElement("th");
    th.innerText = key;
    firstRow.appendChild(th);
  }
  tabela.appendChild(firstRow);
  for (element of niza) {
    let tr = document.createElement("tr");
    for (kluc in element) {
      let td = document.createElement("td");
      td.innerText = element[kluc]; //vrednost na edno property
      tr.appendChild(td);
    }
    tabela.appendChild(tr);
  }
  tabela.setAttribute("border", "1px");
  document.body.appendChild(tabela);
}

createTable(studenti, "Studenti");
