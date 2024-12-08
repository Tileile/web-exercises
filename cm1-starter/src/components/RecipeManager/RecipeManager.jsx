import React, { useState } from "react";
import Recipe from "./Recipe";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Handle input change for name
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handle input change for ingredients
  function handleIngredientsChange(event) {
    setIngredients(event.target.value);
  }

  function handleInstructionsChange(event) {
    setInstructions(event.target.value);
  }

  // Add a new recipe to the list
  function addRecipe() {
    if (name.trim() !== "" && ingredients.trim() !== "") {
      setRecipes((r) => [...r, { name, ingredients, instructions }]);
      setName("");
      setIngredients("");
      setInstructions("");
    }
  }

  // Delete a recipe from the list
  function deleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <div className="flex flex-wrap mb-4">
        <input
          type="text"
          className="w-full p-2 rounded-lg my-1 border border-gray-400"
          placeholder="Enter recipe name..."
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="w-full p-2 rounded-lg my-1 border border-gray-400"
          placeholder="Enter ingredients..."
          value={ingredients}
          onChange={handleIngredientsChange}
        />
        <input
          type="text"
          className="w-full p-2 rounded-lg my-1 border border-gray-400"
          placeholder="Enter instructions..."
          value={instructions}
          onChange={handleInstructionsChange}
        />
        <button onClick={addRecipe} className="p-2 rounded bg-blue-500 text-white my-1">Add Recipe</button>
      </div>
      <hr />
      <ol className="flex flex-wrap mb-4">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} deleteRecipe={deleteRecipe} index={index} />
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;