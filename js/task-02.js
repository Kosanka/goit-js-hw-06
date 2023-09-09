const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector('#ingredients');


const makeIngredientItem = (ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');

  return liEl;
};

const makeIngredientsList = ingredients.map(makeIngredientItem);
console.log(ingredients.map(makeIngredientItem));


listElement.append(...makeIngredientsList);