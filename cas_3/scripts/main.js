var prvProdukt = "turbina";
var vtorProdukt = "karburator";
var tretProdukt = "karter";

var delovi = [];
var prvNacin = ["turbina", "karburator", "karter"];
var vtorNacin = new Array("turbina", "letva", "karburator", "karter");

console.log(prvNacin[1]);
console.log(prvNacin[3]); //undefined bidejki ne postoi

console.log(vtorNacin.length);

var deloviNiza = [
  "blok",
  "glava",
  "remen",
  "bregasta",
  "radilica",
  "alternator",
  "injektor",
  "turbina",
  "bombina",
  "intercooler",
  "perka",
];

var nizaNaRazlicniElementi = ["string", 1, 4.5, false, [1, 2, 3, 4]]; //vo js nizite mozat da se sostojat or razlicni elementi
console.log(deloviNiza);
console.log(nizaNaRazlicniElementi[1]);
console.log(nizaNaRazlicniElementi[4][0]);

var deletedElements = [];

// pop -> brisenje na posledniot element od nizata

var deletedElement = deloviNiza.pop();
console.log(deloviNiza);
console.log(deletedElement);

// shift -> brisenje na prviot element od nizata

var prvDeletedElement = deloviNiza.shift();
console.log(prvDeletedElement);
console.log(deloviNiza);

// push -> dodavanje na element na kraj na nizata

deloviNiza.push("karter");
console.log(deloviNiza);
deletedElements.push(deletedElement, prvDeletedElement);
console.log(deletedElements);
// unshift -> dodavanje na element na pocetok od nizata

deloviNiza.unshift("filer");
console.log(deloviNiza);
var karter = deloviNiza.pop();
deletedElements.unshift(karter);
console.log(deloviNiza);
console.log(deletedElements);

// toString -> ja ispisuva nizata kako string

console.log("Elementi na ovaa niza se: " + deloviNiza.toString());

// slice -> prikazuva doreden del od nizata, prviot parametar e od kade da pocne, a vtoriot e kade da zavrsi (bez toj parametar)

console.log(deloviNiza.slice(2, 6));

//splice - (2 parametri) -> prviot parametar e od koj element da pocne so brisenje a vtoriot e kolku elementi od nizata da izbrise

console.log(deloviNiza);
deloviNiza.splice(3, 4);
console.log(deloviNiza);

// splice - (3 parametri) -> prviot parametar e od koj element da pocne so brisenje a vtoriot e kolku elementi od nizata da izbrise, a tretiot parametar e sto ke se dodade

deloviNiza.splice(1, 0, "test", "test2"); // dokolku vtoriot parametar e 0 nema da brise nisto i ke gi dodade >=3 parametrite na pozicijata od prviot parametar
// a dokolku vtoriot parametar e >0 togas ke izbrise tolku elementi i od prviot parametar ke vidi od koja pozicija da gi dodade >=3
console.log(deloviNiza);

// includes -> proveruva dali elementot postoi vo nizata

console.log(deloviNiza.includes("turbina"));
console.log(deloviNiza.includes("orevi"));

// sort -> gi sortira elementite vo nizata po prvite bukvi ili brojki

console.log(deloviNiza.sort());
console.log(deloviNiza);
console.log(deloviNiza.reverse()); // ja ispisuva nizata obratno odnosno moze da se koristi za decending sortiranje
console.log(deloviNiza);

// join -> gi ispisuva elementite na nizata so separator koj nie go zadavame

console.log(deloviNiza.join(", "));
console.log(deloviNiza);

// concat -> spojuva poveke nizi

var niza = [1, 2, 3, 4, 5];
var spoenaNiza = deloviNiza.concat(
  deletedElements,
  niza,
  nizaNaRazlicniElementi
);
console.log(spoenaNiza);

// indexOf -> go naogja indexot na zadadeniot element vo nizata

console.log(spoenaNiza.indexOf("slusi")); // dokolku barame nekoi element koj ne postoi ke se ispise -1
console.log(spoenaNiza.indexOf(1));

// funkcii so stringovi

console.log("Riste: 'Ke odam na rabota'");
var riste = "ke odam na rabota";
console.log("Riste: " + riste);
console.log(
  `Riste: '${riste} i ja iskreirav ovaa niza: ${deloviNiza.join(", ")}'`
);

var hello = " hello world and how you doin' hello ";

// substriong -> isto kako slice samo za stringovi
console.log(hello.substring(1, 9));

// substr -> prviot parametar od kade da pocne a vtoriot uste kolku da prikaze
console.log(hello.substr(1, 8));

// replace -> promena na karekter od stringot (samo prviot sto ke go najde)
console.log(hello);
hello = hello.replace("hello", "Hello");
// hello = hello.replace("hello", "Hello");
console.log(helloNiza);

// trim -> gi brise praznite mesta na pocetokot i krajot od stringot

hello = hello.trim();
console.log(hello);

// split -> go deli stringot po daden splitter i kreira niza

var nizaOdStringovi = hello.split(" ");
console.log(nizaOdStringovi);

// ispusuvanje na karakter od stringot isto kako element od nizata
console.log(hello[6]);

// typeof na niza e object
console.log(typeof deloviNiza);
