// Function to display recipes on the page
function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    // Retrieve recipes from localStorage (in a real scenario)
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Get the search input and category filter values
    const searchInput = document.getElementById('search').value.toLowerCase();
    const categoryFilter = document.getElementById('category').value.toLowerCase();

    storedRecipes.forEach((recipe) => {
        // Check if the recipe matches the search criteria and category filter
        if (
            (searchInput === '' || recipe.title.toLowerCase().includes(searchInput)) &&
            (categoryFilter === '' || recipe.categories.includes(categoryFilter))
        ) {
            const card = document.createElement('div');
            card.classList.add('recipe-card');

            const title = document.createElement('h2');
            title.textContent = recipe.title;

            const categories = document.createElement('p');
            categories.textContent = `Categories: ${recipe.categories.join(', ')}`;

            card.appendChild(title);
            card.appendChild(categories);
            recipeContainer.appendChild(card);
        }
    });
}

// Initial display of recipes when the page loads
window.onload = () => {
    displayRecipes();

    // Attach event listeners for search and category filter changes
    document.getElementById('search').addEventListener('input', displayRecipes);
    document.getElementById('category').addEventListener('change', displayRecipes);
};
