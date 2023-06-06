//uslovi

//1 nacin: if else
/* if(uslov){
    naredba;
 }else{
    naredba;
 }*/
/*
 var broj = 10;

 if (broj>=10){
    console.log("ovoj broj E pogolem ili ednakov na deset");
 }else{
    console.log("ovoj broj NE epogolem ili ednakov na deset");
 }*/

/*
var novBroj = parseInt(prompt("Vnesi broj"));
// var novBroj = prompt("Vnesi broj");

if (novBroj == 0) {
  console.log("nulata e cifra");
} else if (novBroj % 2 == 0) {
  console.log("ovoj broj e paren");
} else {
  console.log("ovoj broj e NEparen");
}
*/
/*
if (5 > 3 && 2 < 4) {
  console.log("Dvata iskazi se tocni");
} else {
  console.log("Dvata iskazi ne se tocni");
}
*/
/*
if ((10 > 9 && 4 < 7) || 9 > 12) {
  console.log("gi biva");
} else {
  console.log("ne gi biva");
}
*/
/*
var money = parseFloat(prompt("How much monmey do you have?"));
if (money < 20) {
  console.log("You can buy nothing with " + money + " denars");
} else if (money >= 20 && money < 50) {
  console.log("You can buy a candy with " + money + " denars");
} else if (money >= 50 && money < 200) {
  console.log("You can buy a milk with " + money + " denars");
} else {
  console.log("You can buy a backpack with " + money + " denars");
}
*/
/*
var poeni = prompt("Vnesi bodovi");
if (poeni <= 50) {
  console.log("ocenkata e 1");
} else if (poeni > 50 && poeni < 70) {
  console.log("ocenkata e 2");
} else if (poeni >= 70 && poeni < 80) {
  console.log("ocenkata e 3");
} else if (poeni >= 80 && poeni < 91) {
  console.log("ocenkata e 4");
} else {
  console.log("ocenkata e 5");
}
*/
//2 nacin: ternary operator

// uslov? naredba(if):naredba(else)

// 12 > 4 ? console.log("da") : console.log("ne");

// var ternary = 6;
// var iskaz = ternary % 2 == 0 ? "paren broj" : "neparen broj"; // ? -> if     ;    : -> else
// // console.log(iskaz);
// var iskaz2 = ternary == 0 ? "cifra" : ternary % 2 == 0 ? "paren" : "neparen";
// console.log(iskaz2);

/*
var money = parseFloat(prompt("How much monmey do you have?"));
if (money < 20) {
  console.log("You can buy nothing with " + money + " denars");
} else if (money >= 20 && money < 50) {
  console.log("You can buy a candy with " + money + " denars");
} else if (money >= 50 && money < 200) {
  console.log("You can buy a milk with " + money + " denars");
} else {
  console.log("You can buy a backpack with " + money + " denars");
}
*/
/*
var money = parseFloat(prompt("How much money do you have?"));
var suggestion =
  money < 20
    ? "Nothing"
    : money >= 20 && money < 50
    ? "Candy"
    : money >= 50 && money < 200
    ? "milk"
    : "backpack";
console.log(suggestion);
*/

//3 nacin switch case
/*
var value = parseInt(prompt("vnesi"));

switch (value) {
  case 1:
    console.log("slabo");
    break;
  case 2:
    console.log("okej");
    break;
  case 3:
    console.log("dobro");
    break;
  case 4:
    console.log("mnogu dobro");
    break;
  case 5:
    console.log("odlicno");
    break;
  default:
    console.log("nisto od prethodnoto ne e tocno");
}*/

//vezba
var dayNum = parseInt(prompt("Enter a day number"));
/*
var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

if (dayNum > 7) {
  alert("This day does not exist");
} else {
  alert(days[dayNum - 1]);
}
*/

switch (dayNum) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday");
    break;
  default:
    alert("This day does not exist");
}
