//FUNKCII

/*
 function <name> (parameter1, parameter2....){
    <code>
}

<name>(argument1, argument2.......);

*/

function greeting() {
  alert("Hello I'm Riste");
}

// greeting();
// greeting();
// greeting();
// greeting();

function printSum(broj1, broj2) {
  console.log(broj1 + broj2);
}

// printSum(1, 5);
// printSum(56, 56);

function sum(broj1, broj2) {
  console.log(broj1 + broj2);
}
function substract(broj1, broj2) {
  console.log(broj1 - broj2);
}
function multiply(broj1, broj2) {
  console.log(broj1 * broj2);
}
function devide(broj1, broj2) {
  console.log(broj1 / broj2);
}

sum(1, 3);
substract(5, 2);
multiply(3, 3);
devide(25, 5);

function printanje(ime, prezime, godini, isWorking) {
  console.log(`${ime} ${prezime} ima ${godini} i e vraboten: ${isWorking}`);
}

printanje("Riste", "Stojanov", 17, false);

function zbir(broj1, broj2, broj3) {
  var zbirNaTriBroja = broj1 + broj2 + broj3;
  return zbirNaTriBroja;
}

var zbirInt = zbir(1, 1, 1);
console.log(zbirInt);

var novaBrojka = 12 - zbir(1, 4, 5);
console.log(novaBrojka);

function cToF(celsious) {
  var fahrenheit = celsious * 1.8 + 32;
  return fahrenheit;
}
function fToC(fahrenheit) {
  var celsious = (5 / 9) * (fahrenheit - 32);
  //   var celsious = (fahrenheit - 32) / 1.8;
  return celsious;
}

var C = cToF(20);
var F = fToC(68);

console.log(C);
console.log(F);

//globalna i lokalna promenliva
var promenlivaNadvorOdFunkcija = "Globalna promenliva"; //global
var brojka = 14;
function nekojaFunkcija() {
  var promenliva = "lokalna vrednost"; //local
  brojka = 15;
  return brojka;
}
console.log(brojka);
var novBroj = nekojaFunkcija();
console.log(brojka);
// console.log(promenliva);

//var, let, const
//var - ima function scope (site elementi so var prefix se dostapni niz cela funkcija)
//let - ima block scope (dostabna samo vo sklop na eden block)
//const -> ima block scope
const konstanta = "konstantna vrednost"; // ne se menuva
const PI = 3.14;
function nesto() {
  if (true) {
    let color = "red";
  }
  //console.log(color); // ke dade greska bidejki color ne e vo samiot block
}
// console.log(color);
nesto();

//built in functions
// - parseInt()
// - parseFloat()
// - Number()
// - String() -> obratno od number(dobiva brojka i ja menuva vo string)
// site funkcii za nizi i stringovi

//objects

//window.console.log(); //window e object ama ne go pisuvame bidejki se podrazbira deka console.log pripagja na window

// I nacin kreiranje na objekti : Literal notation

let human = {
  ime: "Riste", //ovie se propertinja na objektot
  prezime: "Stojanov",
  godini: 17,
  visina: 178,
  isWorking: false,

  sleep: function () {
    //method od object
    console.log(`${this.ime} ${this.prezime} is sleeping`);
  },
};

console.log(human.ime); //prv nacin da se pretstavi property od object
console.log(`${human.ime} ${human.prezime} ima ${human.godini} godini`);
console.log(human["godini"]); //vtor nacin na pristapuvanje do property od object

human.sleep();

let object = {
  name: "Riste",
  surname: "Stojanov",
  age: 17,
  height: 178,
  hobby: "MTB",
  isWorking: false,
  method: function () {
    if (!this.isWorking) {
      console.log("What do you want to work?");
    } else {
      console.log("Great, what do you do?");
    }
  },
};
console.log(object);
object.method();
