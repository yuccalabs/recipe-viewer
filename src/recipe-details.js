const recipesList= JSON.parse(localStorage.getItem("recipes"))

const recipeWrapper=document.querySelector(".wrappercipe")
const displayRecipe=()=>{
    const urlParams=new URLSearchParams(window.location.search)
    const recipeId=+urlParams.get("id")
    const recipeToDisplay=recipesList.find(recipe => recipe.id == recipeId)
    const card = document.createElement('div');
        card.classList.add('recipe-card');
        const image = document.createElement('img');
        image.setAttribute("src" , recipeToDisplay.imageUrl)
        image.setAttribute("width" , "100px")
        image.setAttribute("height" , "100px")
        const title = document.createElement('h2');
        title.textContent = recipeToDisplay.title;

        const categories = document.createElement('p');
        categories.textContent = `Categories: ${recipeToDisplay.categories.join(', ')}`;

        const ingredients = document.createElement('p');
        ingredients.textContent = `ingredients: ${recipeToDisplay.categories.join(', ')}`;
        const instructions= document.createElement('p');
        instructions.textContent = `instructions: ${recipeToDisplay.instructions}`;
        card.appendChild(image)
        card.appendChild(title);
        card.appendChild(instructions)
        card.appendChild(ingredients)
        card.appendChild(categories);

        recipeWrapper.appendChild(card)
}


displayRecipe()