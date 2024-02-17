// Function to display recipes on the page
const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    // Retrieve recipes from localStorage (in a real scenario)
    

    recipes.forEach((recipe) => {
        const link=document.createElement("a")
        link.setAttribute("href",`recipe-details.html?id=${recipe.id}`)
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        const title = document.createElement('h2');
        title.textContent = recipe.title;

        const categories = document.createElement('p');
        categories.textContent = `Categories: ${recipe.categories.join(', ')}`;

        card.appendChild(title);
        card.appendChild(categories);
        link.appendChild(card)
        recipeContainer.appendChild(link);
        
    });
}

// Initial display of recipes when the page loads
window.onload = displayRecipes(storedRecipes);


//form
const searchForm=document.querySelector(".searchForm")
const select=document.querySelector("select")

let selectedVal;

select.addEventListener("change",(e)=>{
    e.preventDefault()
    selectedVal=e.target.value
})

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';
    const searchQuery=document.querySelector(".searchForm input").value
    //launch search
    console.log(searchQuery)
    if(!selectedVal) return alert("select a categorie please !")
    if(!searchQuery) return alert("query is empty")
    // Retrieve recipes from localStorage (in a real scenario)
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const resultedArr=storedRecipes.filter(r => r.title.includes(searchQuery))
    console.log(resultedArr)
    if(!resultedArr.length) {
        recipeContainer.innerText="no items found"
        return
    }

    displayRecipes(resultedArr)
})
