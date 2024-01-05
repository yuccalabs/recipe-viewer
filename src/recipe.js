const recipes = [
    {
        id: 1,
        title: 'Banana Coffee Smoothie',
        ingredients: ['1 banana', '1tbsp of dark cacao', '1 tsp of nescafé', '250ml of low fat milk'],
        instructions: 'Put all the ingredients in the blender and mix until the mixture become creamy but not too liquid, and then, put your smoothie into a glass or a jar and enjoy !',
        imageUrl: './images/banana-smothy.jpg',
        categories: ['breakfast', 'snack', 'dessert'],
    },

    {
        id: 2,
        title: 'Cucumber Salad',
        ingredients: ['1 cucumber', '1 tomato', '1 onion', '1 tbsp of olive oil', '1 tbsp of lemon juice', '1 tbsp of salt', '1 tbsp of black pepper'],
        instructions: 'Cut the cucumber, the tomato and the onion into small pieces, then put them in a bowl and add the olive oil, the lemon juice, the salt and the black pepper, and mix all the ingredients together, and finally, put your salad into a plate and enjoy !',
        imageUrl: './images/cucumber-salad.jpg',
        categories: ['lunch', 'dinner', 'snack'],
    },

    {
        id: 3,
        title: 'Healthy banana pancakes',
        ingredients: ["30g of oatmeal", "1 egg", "5 g of dark chocolate chips", "1 Tbsp of Wholemeal flour (or semi wholemeal)", "½ packet of baking powder", "2 to 3 Tbsp of low fat milk", "½ Banana", "1 Tsp of honey"],
        instructions: 'Put in a bowl, the oatmeal, the eggs, the milk, the chocolate chips, the baking powder and the flour, then Mix your ingredients with a fork or in a blender to obtain a creamy texture. Heat a pan with a bit of butter over medium heat. put a half ladle of the pancake preparation and let cook for 2 to 3 minutes per side ( once you see bubbles on the surface turn the pancake). To serve, put the pancakes on a plate, add banana slices and sprinkle with honey! ',
        imageUrl: './images/banana-pancakes.jpg',
        categories: ['breakfast', 'snack', 'dessert'],
    },

];


// load in localStorage
localStorage.setItem('recipes', JSON.stringify(recipes));