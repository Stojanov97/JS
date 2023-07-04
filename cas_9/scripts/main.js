//AJAX - Asynchronus JavaScript and XML
//XML format so koi komuniciraat frontend i backend
//XML - eXtensible Markup Language
//JSON - JS Object Notation

//XML FILE - poseben file so extezija .xml
/*
<note>
    <to>Filip</to>
    <from>Nikola</from>
    <heading>Domasna</heading>
    Domasna za JS
</note>*/

// let human = {
//   ime: "nesot",
//   prezime: "nesto",
//   email: "email",
//};

//json file - potreben e poseben file .json

/*
{
    "ime":"nesot",
    "prezime":"nesto",
    "niza":["eden","dva","tri"]
}*/

//API - Application Programming Interface

//I nacin AJAX povik - promise

/*
let promise = new Promise((resolve, reject) => {
  if (uslov) {
    resolve();
  } else {
    reject();
  }
});
*/
//pr1
let hasPizza = false;

let pizzaPromise = new Promise((resolve, reject) => {
  if (hasPizza) {
    resolve("I'm bringing pizza");
  } else {
    reject("I am not bringing pizza");
  }
});

pizzaPromise.then((rezultat) => console.log(rezultat));
pizzaPromise.catch((err) => console.log(err));

console.log("Hello");
//sinhron kod koj sto ke se izvrsi vo istiot moment koga
// ke ja pustime aplikacijata i ke se izvrsi pred bilo koj
// asinhron kod bez razlika na koja linija se naogjaat

//pr2
let pecati = () => {
  console.log("Uspesno izvrseno vetuvanje");
};

let p = new Promise((resolve, reject) => {
  let a = 90;
  if (a == 10) {
    resolve();
  } else {
    reject("Failed");
  }
});

p.then(pecati()).catch((a) => {
  console.log(a);
});

//pr3

let p1 = new Promise((resolve, reject) => {
  resolve("p1");
});

let p2 = new Promise((resolve, reject) => {
  resolve("p2");
});

let p3 = new Promise((resolve, reject) => {
  resolve("p3");
});

Promise.all([p1, p2, p3]).then((msg) => console.log(msg));

//pr4
function get(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();

    req.addEventListener("load", () => {
      if (req.status < 400) {
        resolve(req.responseText);
      } else {
        reject("Failed");
      }
    });
    req.addEventListener("error", () => {
      reject(new Error("Network error"));
    });
  });
}

get("https://randomuser.me/api/?results=10")
  .then((data) => {
    console.log("we got the data");
    JSON.parse(data).results.forEach((element) => {
      console.log(element.name.first);
    });
  })
  .catch((error) => console.log(error));

//II nacin - fetch

fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((json) => {
    let users = json.results;
    console.log(users);
    for (user of users) {
      console.log(user.name.first);
    }
  })
  .catch((error) => console.log(error.message))
  .finally(() =>
    console.log(
      "ova ke se izvrsi bez razlika dali povikuvanjeto e dobro ili ne"
    )
  );
//III nacin - async/await

async function getDataFromFetch() {
  try {
    let response = await fetch("https://randomuser.me/api/?results=10");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("sekad se izvrsuva");
  }
}
