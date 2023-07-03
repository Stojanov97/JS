function recipe(name, ingredientsNum) {
  this.name = name;
  this.ingredientsNum = ingredientsNum;
  this.getIngredients = function () {
    if (this.ingredientsNum > 1) {
      this.ingredients = [];
      for (i = 0; i < this.ingredientsNum; i++) {
        this.ingredients.push(prompt("Enter the ingredient number " + (i + 1)));
      }
    } else {
      this.ingredients = prompt("Enter the ingredient");
    }
  };
  this.getIngredients();
}

let displayRecipe = (recipe) => {
  let recipeDiv = document.createElement("div");
  let recipeName = document.createElement("h2");
  let ingredients = document.createElement("ul");

  recipeDiv.style.background = "#eee";
  recipeDiv.style.width = "150px";
  recipeDiv.style.height = "200px";
  recipeDiv.style.padding = "30px";
  recipeDiv.style.border = "1px solid black";
  recipeDiv.style.display = "flex";
  recipeDiv.style.flexDirection = "column";
  recipeDiv.style.alignItems = "center";
  recipeDiv.style.justifyContent = "center";

  recipeName.textContent = recipe.name;
  recipeDiv.appendChild(recipeName);

  if (Array.isArray(ingredients)) {
    recipe.ingredients.forEach((e) => {
      let ingredient = document.createElement("li");
      ingredient.textContent = e;
      ingredients.appendChild(ingredient);
    });
  } else {
    let ingredient = document.createElement("li");
    ingredient.textContent = recipe.ingredients;
    ingredients.appendChild(ingredient);
  }

  ingredients.style.transform = "translateX(-50%)";
  recipeDiv.appendChild(ingredients);
  document.body.appendChild(recipeDiv);
};

let recipe1 = new recipe(
  prompt("What is the name of the recipe?"),
  prompt("How many ingredients does it have?")
);
displayRecipe(recipe1);
