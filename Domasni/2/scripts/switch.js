var year = parseInt(prompt("Enter a year"));
var result = (year - 4) % 12;

switch (result) {
  case 0:
    alert("Your Chinese Zodiac is - Rat");
    break;
  case 1:
    alert("Your Chinese Zodiac is - Ox");
    break;
  case 2:
    alert("Your Chinese Zodiac is - Tiger");
    break;
  case 3:
    alert("Your Chinese Zodiac is - Rabbit");
    break;
  case 4:
    alert("Your Chinese Zodiac is - Dragon");
    break;
  case 5:
    alert("Your Chinese Zodiac is - Snake");
    break;
  case 6:
    alert("Your Chinese Zodiac is - Horse");
    break;
  case 7:
    alert("Your Chinese Zodiac is - Goat");
    break;
  case 8:
    alert("Your Chinese Zodiac is - Monkey");
    break;
  case 9:
    alert("Your Chinese Zodiac is - Rooster");
    break;
  case 10:
    alert("Your Chinese Zodiac is - Dog");
    break;
  default:
    alert("Your Chinese Zodiac is - Pig");
    break;
}
