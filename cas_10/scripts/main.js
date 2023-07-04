//classes

// function Humam(age, name) {
//   this.age = age;
//   this.name = name;
// }

class human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`The human ${this.name} is sleeping`);
  }
}

let petko = new human("petko", 55);
petko.sleep();
console.log(petko);

class employee extends human {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  work() {
    console.log(`This human is working`);
  }
}

let stanko = new employee("stanko", 45, 800);
console.log(stanko);

class senior extends employee {
  constructor(name, age, salary, workXP) {
    super(name, age, salary);
    this.workXP = workXP;
  }
  teaching() {
    console.log(`This employee is a mentor`);
  }
}

let jasna = new senior("Jasna", 40, 1000, 16);

class programmer extends employee {
  constructor(name, age, salary, tasks) {
    super(name, age, salary);
    this.tasks = tasks;
  }
  workingOnAProject() {
    console.log("The programmer is working on a project");
  }
}
//prevtuvanje na niza bez metodi i bez druga niza
let niza = [1, 2, 3, 4, 5, 6, 7];
for (i = 0; i < parseInt(niza.length / 2); i++) {
  let pom = niza[i];
  console.log(`pomosna: ${pom}`);
  let posleden = niza[niza.length - i - 1];
  console.log(`element na krajot: ${posleden}`);
  niza[i] = posleden;
  niza[niza.length - i - 1] = pom;
  console.log(niza);
}
