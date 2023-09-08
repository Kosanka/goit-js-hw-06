const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryItemsCount = categoryItem.querySelectorAll('li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements count: ${categoryItemsCount}`);
});