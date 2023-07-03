let createTitle = (text, color, fontSize) => {
  let title = document.createElement("h1");
  title.textContent = text;
  title.style.color = color;
  title.style.fontSize = fontSize + "px";
  document.body.appendChild(title);
};

let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Generate Title";
btn.style.margin = "30px";
btn.style.height = "50px";
btn.style.width = "100px";
btn.style.background = "#313131";
btn.style.color = "#eee";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

document.getElementById("btn").addEventListener("click", () => {
  createTitle(
    prompt("Input what you want the title to say"),
    prompt("Input a color for the title"),
    prompt("Input a font size for the title")
  );
});
