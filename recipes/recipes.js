const recipes = [
  {
    author: "Provo High Culinary Students",
    url: "",
    isBasedOn: "",
    cookTime: "30 Min",
    datePublished: "2016-10-16",
    tags: ["Waffles", "Sweet Potato", "Side"],
    description: "Savory waffles made with sweet potato with a hint of ginger",
    image: "./images/sweet-potato-waffle-md.jpg",
    recipeIngredient: [
      "2 separated eggs",
      "1/4 C Oil",
      "1/4 tsp salt",
      "1/4 tsp Cayenne pepper",
      "3/4 C milk",
      "1 Tbsp Brown Sugar",
      "2 tsp Shredded Ginger",
      "3/4 C Mashed Sweet Potatoes",
      "1 Tbsp Minced Shallots",
      "1 Tbsp Baking Powder",
      "1 Tbsp Chives",
      "1/4 C Cornmeal",
      "1 C Flour"
    ],
    name: "Sweet Potato Waffles",
    prepTime: "30 Min",
    recipeInstructions: [
      "Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.",
      "Next add the cornmeal, chives, and flour and baking powder.",
      "Whip the egg whites until stiff and fold in.",
      "Cook until golden brown in a waffle iron. Serve with butter and wilted greens or honey."
    ],
    recipeYield: "6 waffles",
    rating: 4
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "20 min",
    datePublished: "",
    tags: ["Chicken", "Entree"],
    description: "Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully.",
    image: "./images/chicken-curry.jpg",
    recipeIngredient: [
      "2 Chicken Tenders, Cubed",
      "4 Mushrooms, Sliced",
      "1/2 C Whipping Cream",
      "1-2 Tbsp Stone Ground Mustard",
      "1 tsp Lemon Juice",
      "Salt and Pepper to taste",
      "1 C Rice, uncooked",
      "4-5 oz Fresh Green Beans"
    ],
    name: "Creamy Mushroom Chicken",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 1 1/2 cups of water to a pan and bring to a boil. Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.",
      "Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through.",
      "Pour in cream, mustard, salt, and pepper. Stir. On medium heat, simmer until it thickens.",
      "While preparing sauce, wash the beans, trim the ends, and steam the beans.",
      "Serve sauce over rice, with the green beans on the side."
    ],
    recipeYield: "3 servings",
    rating: 4.5
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "30 min",
    datePublished: "2018-09-19",
    tags: ["Potatoes", "Side"],
    description: "Easy and delicious oven roasted potatoes that go great with almost anything.",
    image: "./images/roasted-potatoes.webp",
    recipeIngredient: [
      "3-4 Medium Potatoes",
      "1 Tbsp Olive oil",
      "2 tsp Italian Seasoning",
      "1/2 tsp Salt",
      "1/2 tsp Ground Black Pepper",
      "1-2 tsp Hot Sauce (optional)"
    ],
    name: "Roasted Potatoes",
    prepTime: "10 min",
    recipeInstructions: [
      "Preheat oven to 400 deg F.",
      "Wash and thinly slice the potatoes.",
      "Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.",
      "Toss the potatoes in the spice mixture to evenly coat then spread over a baking sheet.",
      "Bake for 30 min or until the desired level of crispiness is achieved."
    ],
    recipeYield: "",
    rating: 4
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "20 min",
    datePublished: "2018-09-19",
    tags: ["Southwest", "Entree"],
    description: "Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.",
    image: "./images/black-beans-and-rice.jpg",
    recipeIngredient: [
      "1 Medium Onion, diced",
      "2 Cloves Garlic, minced",
      "1 Tbsp Olive oil",
      "1 Can Black Beans (15oz)",
      "1 Can Diced Tomatoes (15oz)",
      "1/8 tsp Cayenne Pepper (optional)",
      "2 C Brown Rice (uncooked)",
      "Grated Cheese",
      "Tortilla Chips"
    ],
    name: "Black Beans and Rice",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 4 cups water to a saucepan and bring to a boil. Add rice, stir, cover, and reduce heat to low.",
      "In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.",
      "Stir in the drained black beans, undrained tomatoes, and cayenne.",
      "Bring to a boil, then reduce heat and simmer uncovered for 15 min.",
      "Serve over rice, topped with grated cheese and tortilla chips."
    ],
    recipeYield: "4 servings",
    rating: 3
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "30 min",
    datePublished: "2018-09-19",
    tags: ["Chicken", "Entree", "Indian"],
    description: "Quick and easy chicken curry recipe made with easy to find ingredients.",
    image: "./images/chicken-curry.webp",
    recipeIngredient: [
      "4 Slices Bacon",
      "1 clove Garlic",
      "2 Tbsp Flour",
      "1 C water",
      "1 C Milk",
      "3 Tbsp Tomato Paste",
      "1/2 C Apple Sauce",
      "3-4 tsp Curry Powder",
      "2 tsp Chicken Bouillion",
      "3/4 C Sour Cream",
      "1-2 C Chicken, cubed",
      "2 C Rice, uncooked"
    ],
    name: "Chicken Curry",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 3 cups water to a saucepan and bring to a boil. Add rice, stir, cover, and reduce heat to low.",
      "Cook bacon until crisp, drain reserving 1 Tbsp of bacon drippings, crumble bacon and set aside.",
      "Cook chicken and cube.",
      "Blend flour into bacon drippings then stir in the milk until the flour is well mixed. Stir in water, applesauce, tomato paste, curry, bouillion, and garlic.",
      "Bring to a boil, then reduce heat and simmer until rice is done.",
      "Before serving add crumbled bacon, chicken, and stir in sour cream. Serve over rice."
    ],
    recipeYield: "5 servings",
    rating: 5
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "11 min",
    datePublished: "2018-09-19",
    tags: ["Dessert"],
    description: "Delicious soft chocolate chip cookies with coconut.",
    image: "./images/chocolate-chip-cookies.jpg",
    recipeIngredient: [
      "1 Lb butter, softened",
      "1 C white sugar",
      "3 Eggs",
      "1 1/2 C Brown sugar",
      "1 tsp Baking soda",
      "1 tsp Vanilla extract",
      "1/4 tsp Salt",
      "5 C Flour",
      "2 C Chocolate Chips",
      "1 C Shredded Coconut"
    ],
    name: "Chocolate Chip Cookies",
    prepTime: "15 min",
    recipeInstructions: [
      "Preheat oven to 350F.",
      "Cream butter, white sugar, and eggs together.",
      "Add brown sugar, salt, baking soda, and vanilla. Mix well.",
      "Add flour, chocolate chips, and coconut. Mix well.",
      "Place on baking sheet in rows of 1-1.5 inch balls of dough.",
      "Bake for 11-12 minutes."
    ],
    recipeYield: "8 dozen",
    rating: 5
  },
  {
    author: "Ester Kocht",
    url: "https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/",
    isBasedOn: "",
    cookTime: "45 min",
    datePublished: "2023-10-10",
    tags: ["Dessert", "German"],
    description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet.",
    image: "./images/german-gooseberry-cake.jpg",
    recipeIngredient: [
      "Cake ingredients",
      "Cream ingredients",
      "Crumble ingredients"
    ],
    name: "Crumb Cheesecake",
    prepTime: "30 min",
    recipeInstructions: [
      "Prepare the base.",
      "Prepare the crumble.",
      "Bake until golden brown."
    ],
    recipeYield: "12 servings",
    rating: 5
  },
  {
    author: "AllRecipes",
    url: "https://www.allrecipes.com/recipe/12409/apple-crisp-ii/",
    isBasedOn: "",
    cookTime: "45 min",
    datePublished: "2023-10-10",
    tags: ["Dessert"],
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    image: "./images/apple-crisp.jpg",
    recipeIngredient: [
      "10 C apples, cored and sliced",
      "1 C white sugar",
      "1 Tbsp white flour",
      "1 tsp ground cinnamon",
      "3 Tbsp water",
      "1 C rolled oats",
      "1 C flour",
      "1 C brown sugar",
      "1/4 tsp baking powder",
      "1/4 tsp baking soda",
      "1/2 C butter, melted"
    ],
    name: "Apple Crisp",
    prepTime: "30 min",
    recipeInstructions: [
      "Preheat the oven to 350 degrees F.",
      "Place sliced apples in a baking dish.",
      "Combine topping ingredients and sprinkle evenly over apples.",
      "Bake until golden brown."
    ],
    recipeYield: "12 servings",
    rating: 4
  }
];

function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

function getStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - Math.ceil(rating);

  for (let i = 0; i < fullStars; i++) {
    stars += '<span aria-hidden="true" class="icon-star">⭐</span>';
  }

  if (rating % 1 !== 0) {
    stars += '<span aria-hidden="true" class="icon-star">⭐</span>';
  }

  for (let i = 0; i < emptyStars; i++) {
    stars += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
  }

  return stars;
}

function displayRecipes(recipeList) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  if (recipeList.length === 0) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipeList.forEach((recipe) => {
    container.innerHTML += `
      <section class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">

        <div class="recipe-content">
          <p class="tag">${recipe.tags[0]}</p>
          <h2>${recipe.name}</h2>

          <span
            class="rating"
            role="img"
            aria-label="Rating: ${recipe.rating} out of 5 stars"
          >
            ${getStars(recipe.rating)}
          </span>

          <p class="description">${recipe.description}</p>
        </div>
      </section>
    `;
  });
}

function searchRecipes(query) {
  return recipes.filter((recipe) => {
    const text = (
      recipe.name +
      recipe.description +
      recipe.tags.join(" ")
    ).toLowerCase();

    return text.includes(query.toLowerCase());
  });
}

function sortRecipes(recipeList) {
  return recipeList.sort((a, b) => a.name.localeCompare(b.name));
}

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  displayRecipes([getRandomRecipe()]);

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = searchInput.value.trim();
    let results = searchRecipes(query);
    results = sortRecipes(results);

    displayRecipes(results);
  });
});