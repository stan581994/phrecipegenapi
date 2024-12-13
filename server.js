const express = require("express");
const app = express();
const port = 5000;
const recipes = require("./recipes");

app.get("/recipe/all", (req, res) => {
  res.json(recipes);
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
