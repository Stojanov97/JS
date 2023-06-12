var year = parseInt(prompt("Enter a year"));
var result = (year - 4) % 12;
if (result === 0) {
  alert("Your Chinese Zodiac is - Rat");
} else if (result === 1) {
  alert("Your Chinese Zodiac is - Ox");
} else if (result === 2) {
  alert("Your Chinese Zodiac is - Tiger");
} else if (result === 3) {
  alert("Your Chinese Zodiac is - Rabbit");
} else if (result === 4) {
  alert("Your Chinese Zodiac is - Dragon");
} else if (result === 5) {
  alert("Your Chinese Zodiac is - Snake");
} else if (result === 6) {
  alert("Your Chinese Zodiac is - Horse");
} else if (result === 7) {
  alert("Your Chinese Zodiac is - Goat");
} else if (result === 8) {
  alert("Your Chinese Zodiac is - Monkey");
} else if (result === 9) {
  alert("Your Chinese Zodiac is - Rooster");
} else if (result === 10) {
  alert("Your Chinese Zodiac is - Dog");
} else {
  alert("Your Chinese Zodiac is - Pig");
}
