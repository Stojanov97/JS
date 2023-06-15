//prva zadaca
let car = {
  model: "Accord",
  color: "Metalic Black",
  year: 2009,
  fuel: "Gasoline",
  fuelConsumption: 80, //ml na 1 km
  fuelToDistance: function (distance) {
    let fuelNeeded = distance * this.fuelConsumption;
    if (fuelNeeded > 1000) {
      alert("You will need " + fuelNeeded / 1000 + "l");
    } else {
      alert("You will need " + fuelNeeded + "ml");
    }
  },
};
//let distance = prompt("How far would you like to go? (in kilometers)");
//car.fuelToDistance(distance);

// II nacin Constructor notation

let hotel = new Object(); //prazen object == let hotel = {}

hotel.name = "Hilton";
hotel.rooms = 40;
hotel.booked = 25;
hotel.employees = ["Petko", "Stanko", "Marija"];
hotel.owner = {
  name: "Petar", // name e key na property a Petar e value vrednost na propertito
  surname: "Stefanovski",
  age: 56,
};
hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};

console.log(hotel.checkAvailability());
console.log(hotel.owner.name + " " + hotel.owner.surname);
console.log(hotel.employees.join(", "));

// let petko = {
//   ime: "petko",
//   prezime: "prezime",
//   age: 30,
// };
// console.log(petko);
// petko.visina = 180;
// petko.age = 31;
// console.log(petko);

delete hotel.name;
console.log(hotel);

//vezba 2
let trainer = {
  name: "Stefan",
  lastName: "Stefanovski",
  academy: "Semos",
  lecture: "Objects",
};

delete trainer.lecture;
trainer.age = 23;
trainer.getFullName = function () {
  let fullName = this.name + " " + this.lastName;
  return fullName;
  //return this.name + " " + this.lastName;
};

console.log(trainer.getFullName());

//III nacin Constructor notation template

// let petko = {
//   ime: "petko",
//   prezime: "prezime",
//   age: 30,
// };
// let marija = {
//   ime: "marija",
//   prezime: "nesto",
//   age: 21,
// };
// let stanko = {
//   ime: "stanko",
//   prezime: "ustenesto",
//   age: 35,
// };

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

let Hilton = new Hotel("Hilton", 40, 25);
let Meriott = new Hotel("Meriott", 100, 56);

let slobodniSobiNaHilton = Hilton.checkAvailability();
console.log(slobodniSobiNaHilton);

function Human(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

let Stanko = new Human("Stanko", "Stankovski", 15);
let Marija = new Human("Marija", "Mariova", 42);
Marija.mominskoprezime = "Petkovska";

//keyword this

function windowSize() {
  // ovaa funkcija e method na window objektot
  let width = this.innerWidth; // innnerWidrh i innerHeight se propertija na window objektot
  let height = this.innerHeight;
  return [height, width];
}

console.log(windowSize());
//console.log(window);

//Pass by value vs pass by reference

//pass by value - za primitive values bool,int,float,string
let a = 5;
let b = a;
console.log(a);
console.log(b);
a = 10;
console.log(a);
console.log(b);
b = 22;
console.log(a);
console.log(b);

//pass by reference - za slozeni values nizi objekti i sl
let dog = {
  breed: "terier",
  color: "brown",
  name: "Dzeki",
};

let dog2 = dog;
dog2.color = "white";
console.log(dog);
console.log(dog2);

// Ciklusi

// I -> while

/*while(uslov){
    naredba = > cekor
}*/
// cekor1, cekor2, cekor3, cekor4, cekor5 - bez while

let broj1 = 0;
while (broj1 < 10) {
  console.log(++broj1);
}
let brojac = 1;
while (brojac <= 10) {
  console.log(brojac);
  brojac++;
}
//prva iteracija => brojac=1, 1<=10 == true, ispisuva 1, brojac+1=2
//vtora iteracija => brojac=2, 2<=10 == true, ispisuva 2, brojac+1=3
//treta iteracija => brojac=3, 3<=10 == true, ispisuva 3, brojac+1=4
//.....
//deveta iteracija => brojac=9, 9<=10 == true, ispisuva 9, brojac+1=10
//deseta iteracija => brojac=10, 10<=10 == true, ispisuva 10, brojac+1=11
//edinaesta iteracija => brojac=11, 11<=10 == false, zavrsuva

let brojac2 = 1;

while (brojac2 < 10) {
  if (brojac2 % 2 == 0) {
    console.log(brojac2);
  }
  brojac2++;
}

let broj = Number(prompt("Vnesi broj za pocetok"));
let i = broj;
let limit = Number(prompt("Vnesi brojka do kade da broi"));
let zbir = 0;
while (i <= limit) {
  console.log(i);
  zbir += i;
  i++;
}
console.log(zbir);
