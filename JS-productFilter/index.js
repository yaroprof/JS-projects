// Get DOM elements
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price-range');
const filterButton = document.getElementById('filter-btn');
const productList = document.getElementById('product-list');

// Add event listener to filter button
filterButton.addEventListener('click', () => {
  // Get selected filters
  const selectedCategory = categoryFilter.value;
  const selectedPriceRange = priceFilter.value;

  // Filter products based on selected category and price range
  const filteredProducts = Array.from(productList.children)
    .filter(product => {
      const category = product.getAttribute('data-category');
      if (selectedCategory !== '' && selectedCategory !== category) {
        return false;
      }

      const price = parseFloat(product.getAttribute('data-price'));
      switch (selectedPriceRange) {
        case 'under-50':
          return price < 50;
        case '50-100':
          return price >= 50 && price < 100;
        case '100-200':
          return price >= 100 && price < 200;
        case 'over-200':
          return price >= 200;
        default:
          return true;
      }
    });

  // Display filtered products
  productList.innerHTML = '';
  filteredProducts.forEach(product => {
    productList.appendChild(product);
  });
});
