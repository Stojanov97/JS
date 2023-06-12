var year = parseInt(prompt("Enter a year"));
var result = (year - 4) % 12;
result === 0
  ? alert("Your Chinese Zodiac is - Rat")
  : result === 1
  ? alert("Your Chinese Zodiac is - Ox")
  : result === 2
  ? alert("Your Chinese Zodiac is - Tiger")
  : result === 3
  ? alert("Your Chinese Zodiac is - Rabbit")
  : result === 4
  ? alert("Your Chinese Zodiac is - Dragon")
  : result === 5
  ? alert("Your Chinese Zodiac is - Snake")
  : result === 6
  ? alert("Your Chinese Zodiac is - Horse")
  : result === 7
  ? alert("Your Chinese Zodiac is - Goat")
  : result === 8
  ? alert("Your Chinese Zodiac is - Monkey")
  : result === 9
  ? alert("Your Chinese Zodiac is - Rooster")
  : result === 10
  ? alert("Your Chinese Zodiac is - Dog")
  : alert("Your Chinese Zodiac is - Pig");
