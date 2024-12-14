const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const recipes = require("./recipes");

app.use(cors());

app.get("/recipe/all", (req, res) => {
  res.json(recipes);
});

app.get("/recipe/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase() === category
  );

  if (filteredRecipes.length === 0) {
    res.status(404).send("No recipes found for this category.");
  } else {
    res.json(filteredRecipes);
  }
});

app.get("/recipe/:dishName", (req, res) => {
  const dishName = req.params.dishName;
  const recipe = recipes.find((recipe) => recipe.dishName === dishName);

  if (!recipe) {
    res.status(404).send("Recipe not found.");
  } else {
    res.json(recipe);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
