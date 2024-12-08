function Recipe({ recipe, index, deleteRecipe }) {
    return (
        <li key={index} className="p-4 m-2 w-full">
            <h3 className="font-bold text-lg">{recipe.name}</h3>
            <hr />
            <button onClick={() => deleteRecipe(index)} className="p-2 rounded bg-red-500 text-white my-1 float-right">Delete</button>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
        </li>
    );
}

export default Recipe;