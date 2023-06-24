let firstNames = ["Teodor", "Bojan", "Andrej", "Jovan", "Vlatko"];
let lastNames = [
  "Toshev",
  "Stojanov",
  "Angelovski",
  "Dimitrovski",
  "Stojkovski",
];
let fullNames = [];

function makeFullNames(firstNames, lastNames) {
  for (index in firstNames) {
    let name = `${firstNames[index]} ${lastNames[index]}`;
    fullNames.push(name);
  }
  fullNames.sort();
  fullNames.forEach((element) => {
    console.log(element);
  });
}

makeFullNames(firstNames, lastNames);
