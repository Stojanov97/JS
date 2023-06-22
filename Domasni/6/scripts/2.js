let firstNames = ["Filip", "Hristo", "Nikola", "Chedomir", "Stevica", "Riste"];
let lastNames = ["Trajanovski", "Gigovski", "Talevski", "Stefanovski", "Manasievski", "Stojanov"];
let fullNames = [];

function makeFullNames(firstNames, lastNames) {
    for (index in firstNames) {
        let name = `${Number(index)+1}. ${firstNames[index]} ${lastNames[index]}`;
        fullNames.push(name);
    }
    console.log(fullNames);
}

makeFullNames(firstNames, lastNames);