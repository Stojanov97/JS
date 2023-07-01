let universalSelector = document.getElementsByTagName("*");
let divs = document.querySelectorAll("div");
let firstDiv = document.getElementById("first");
let title = document.querySelector("#myTitle");
let paragraphs = document.querySelectorAll(".paragraph");
let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "violet",
  "pink",
  "orange",
  "#eee",
  "aqua",
  "white",
];
let counter = 0;
for (i = 0; i < universalSelector.length; i++) {
  let element = universalSelector[i];
  element.style.boxSizing = "border-box";
}

divs.forEach((div) => {
  div.style.width = "400px";
  div.style.height = "120px";
  div.style.background = "#eee";
  div.style.color = "black";
  div.style.padding = "10px";
  div.style.margin = "10px";
});
paragraphs.forEach((paragraph) => {
  paragraph.style.fontSize = "1.3rem";
});

paragraphs[0].textContent = "Hover on me to change colors";
title.textContent = "I am black";

firstDiv.addEventListener("mouseover", () => {
  firstDiv.style.background = "#000000";
  firstDiv.style.color = "#eee";
  title.style.color = "green";
  title.textContent = "I am green";
  blinkingText = setInterval(() => {
    paragraphs[0].style.color = colors[Math.floor(Math.random() * 10)];
  }, 100);
  paragraphs[0].textContent = "I am changing colors";
});
firstDiv.addEventListener("mouseout", () => {
  firstDiv.style.background = "#eee";
  firstDiv.style.color = "#000";
  title.style.color = "#000";
  clearInterval(blinkingText);
  paragraphs[0].style.color = "#000";
  paragraphs[0].textContent = "Hover on me to change colors";
  title.textContent = "I am black";
});

divs[1].style.background = "#565656";
divs[1].style.color = "#eee";
divs[1].style.height = "150px";

paragraphs[1].style.fontSize = "19px";
paragraphs[1].textContent =
  "I have changed from 'No really, It's easy!' to this";
document.getElementsByTagName("text")[0].innerHTML =
  "<p>new paragraph</p> the text tag is under here";

divs[2].childNodes[1].textContent = "Let's play catch";
divs[2].childNodes[1].style.padding = "0 0 60px 0";
divs[2].style.height = "300px";
divs[2].style.width = "500px";
divs[2].style.background = "lime";
divs[2].style.position = "absolute";
divs[2].childNodes[3].textContent = "Catch me!";
divs[2].childNodes[3].addEventListener("mouseover", () => {
  counter % 3 == 0
    ? ((divs[2].childNodes[3].style.float = "right"),
      (divs[2].childNodes[3].style.top = `-${Math.floor(
        Math.random() * 60
      )}px`),
      (divs[2].childNodes[3].style.right = `${Math.floor(
        Math.random() * 60
      )}px`),
      (divs[2].childNodes[3].style.left = "auto"))
    : counter % 3 == 1
    ? ((divs[2].childNodes[3].style.float = "left"),
      (divs[2].childNodes[3].style.top = `-${Math.floor(
        Math.random() * 60
      )}px`),
      (divs[2].childNodes[3].style.left = `${Math.floor(
        Math.random() * 60
      )}px`))
    : ((divs[2].childNodes[3].style.position = "relative"),
      (divs[2].childNodes[3].style.top = `${Math.floor(Math.random() * 60)}px`),
      (divs[2].childNodes[3].style.right = `-${Math.floor(
        Math.random() * 20
      )}px`));
  counter++;
});
divs[2].childNodes[3].style.color = "purple";
