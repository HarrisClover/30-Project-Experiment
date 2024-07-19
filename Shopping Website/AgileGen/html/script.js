// Add your JavaScript code here
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart() {
  // Add item to cart logic here
  console.log('Item added to cart');
}
