let weightInChickens = function (weight) {
  let weightInChicken = weight / 0.5;
  let result = document.createElement("p");
  result.style.position = "absolute";
  result.style.left = "50%";
  result.style.top = "50%";
  result.style.transform = "translate(-50%, -50%)";
  result.textContent =
    weight + " kilos equals to " + weightInChicken + " chickens";
  document.body.appendChild(result);
};
document.getElementsByTagName("title")[0].innerText = "Weight in chickens";
weightInChickens(prompt("Enter a weight in kilos"));
