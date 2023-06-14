function makeItPrettier(gender) {
  if (gender < 10) {
    gender = "0" + gender;
  }
  return gender;
}

function genderString(girls, boys) {
  girls = makeItPrettier(girls);
  boys = makeItPrettier(boys);
  if ((boys > 1 && girls < 2) || boys == 0) {
    console.log("There are " + girls + " girl and " + boys + " boys");
  } else if ((boys < 2 && girls > 1) || girls == 0) {
    console.log("There are " + girls + " girls and " + boys + " boy");
  } else if (boys < 2 && girls < 2) {
    console.log("There are " + girls + " girl and " + boys + " boy");
  } else {
    console.log("There are " + girls + " girls and " + boys + " boys");
  }
}
girls = prompt("How many girls are there?");
boys = prompt("How many boys are there?");
genderString(girls, boys);
