const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.dir(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryItemsCount = categoryItem.querySelectorAll('li').length;
  
  console.dir(`Category: ${categoryTitle}`);
  console.dir(`Elements count: ${categoryItemsCount}`);
});