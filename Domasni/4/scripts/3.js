function humanToDog(human) {
  let dogYears = human * 7;
  alert(dogYears);
}
function dogToHuman(dog) {
  let humanYears = dog / 7;
  alert(humanYears);
}
let dogOrHuman = prompt(
  "Human years to dog years type '1' Dog years to human years type '2'"
);
if (dogOrHuman > 2) {
  do {
    dogOrHuman = prompt(
      "You got it wrong please input '1' or '2'. If you want to calculate human years to dog years type '1' and if you want to calculate dog years to human years type '2'"
    );
  } while (dogOrHuman > 2);
}
let years = prompt("Enter the age");

dogOrHuman == 1 ? humanToDog(years) : dogToHuman(years);
