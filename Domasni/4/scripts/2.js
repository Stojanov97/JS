function makeItPrettier(gender) {
  if (gender < 10) {
    gender = "0" + gender;
  }
  return gender;
}

function genderString(girls, boys) {
  girls = makeItPrettier(girls);
  boys = makeItPrettier(boys);
  console.log("There are " + girls + " girls and " + boys + " boys");
}
genderString(4, 7);
