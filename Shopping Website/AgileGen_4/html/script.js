
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('cartTotal').innerText = total;
}

function toggleCart() {
    let cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.display = cartOverlay.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    alert('Checkout - Total: $' + document.getElementById('cartTotal').innerText);
}
