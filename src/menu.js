const MainFood = [{
    name: 'Fried Rice',
    price: 10,
  },
  {
    name: 'Spicy Chicken',
    price: 15,
  },
  {
    name: 'Grilled Salmon',
    price: 20,
  },
  {
    name: 'Goose Mandy',
    price: 25,
  },
]

const Appertizers = [
  {
    name: 'Spaghetti Pasta',
    price: 10,
  },
  {
    name: 'Vegetable Salad',
    price: 15,
  },
  {
    name: 'Avocado Toast',
    price: 10,
  },
]

const Drinks = [
  {
    name: 'Jasmine Tea',
    price: 5
  },
  {
    name: 'Lemonade',
    price: 8,
  },
  {
    name: 'Smoothie',
    price: 10,
  },
  {
    name: 'Mineral Water',
    price: 5,
  },
]

// Main Food HTMLify:
let mainFoodHTML = '<h2>Main Food</h2>'
for(let i = 0; i < MainFood.length; i++){
  mainFoodHTML += 
  `
  <li>
    <span class="food-name">${MainFood[i].name}</span>
    <span class="food-price">$${MainFood[i].price}</span>
  </li>
  <hr>
  `
}

// Appertizers HTMLify:
let appsHTML = '<h2>Appertizers</h2>'
for(let i = 0; i < Appertizers.length; i++){
  appsHTML += 
  `
    <li>
      <span class="food-name">${Appertizers[i].name}</span>
      <span class="food-price">$${Appertizers[i].price}</span>
    </li>
    <hr>
  `
}

// Drinks HTMLify:
let drinksHTML = '<h2>Drinks</h2>'
for(let i = 0; i < Drinks.length; i++){
  drinksHTML += 
  `
    <li>
      <span class="food-name">${Drinks[i].name}</span>
      <span class="food-price">$${Drinks[i].price}</span>
    </li>
    <hr>
  `
}

export const menu = `
<div class="menu-container">
  <div class="main-food-list">
    <ul>
      ${mainFoodHTML}
    </ul>
  </div>
  
  <div class="apps-list">
    <ul>
      ${appsHTML}
    </ul>
  </div>

  <div class="drinks-menu">
    <ul>
      ${drinksHTML}
    </ul>
  </div>
</div>
`