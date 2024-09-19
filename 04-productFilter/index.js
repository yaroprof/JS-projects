const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price-range');
const filterBtn = document.getElementById('filter-btn');
const productList = document.getElementById('product-list');

// Map price range values to corresponding filtering conditions
const priceRanges = {
  'under-50': price => price < 50,
  '50-100': price => price > 50 && price < 100,
  '100-200': price => price > 100 && price < 200,
  'over-200': price => price >= 200,
  '': () => true,
};

// Add event listener to filter button
filterBtn.addEventListener('click', () => {
  const selectedCategory = categoryFilter.value;
  const selectedPriceRange = priceFilter.value;

// Get selected filters

const filteredProducts = Array.from(productList.children)
.filter(product => {
  const category = product.getAttribute('data-category')
  if (selectedCategory !== '' && selectedCategory !== category) {
    return false
  } 
  const price = parseFloat(product.getAttribute('data-price'))
  const filterCondition = priceRanges[selectedPriceRange]
  return filterCondition(price)
})


// Display filtered products
  productList.innerHTML = ''
  filteredProducts.forEach(product =>
     productList.appendChild(product))
});





