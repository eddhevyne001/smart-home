// scripts.js
let cart = [];
let totalPrice = 0;

function showHome() {
  document.querySelector('.all-items').style.display = 'grid';
  document.getElementById('product-detail').style.display = 'none';
  document.getElementById('cart').style.display = 'none';
}

function showProduct(name, imageUrl, price) {
//   document.querySelector('.all-items').style.display = 'none';
//   document.getElementById('product-detail').style.display = 'block';
//   document.getElementById('cart').style.display = 'none';
  localStorage.setItem('productName', name);
  localStorage.setItem('productImage', imageUrl);
  localStorage.setItem('productPrice', price);
  window.location.href = 'product.html';

  document.getElementById('product-name').innerText = name;
  document.getElementById('product-image').src = imageUrl;
  document.getElementById('product-price').innerText = price;
  
  // Save current product details to data attributes
  document.getElementById('product-detail').dataset.name = name;
  document.getElementById('product-detail').dataset.price = price;
}



function addToCart() {
  const productDetail = document.getElementById('product-detail');
  const name = productDetail.dataset.name;
  const price = parseFloat(productDetail.dataset.price);

  cart.push({ name, price });
  totalPrice += price;

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - R${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

function showCart() {
  document.querySelector('.all-items').style.display = 'none';
  document.getElementById('product-detail').style.display = 'none';
  document.getElementById('cart').style.display = 'block';
}

// DASHBOARD

function loadDashboard() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalSpent = 0;
    const recentPurchases = document.getElementById('recent-purchases');

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - R${item.price}`;
        recentPurchases.appendChild(li);
        totalSpent += item.price;
    });

    document.getElementById('total-orders').innerText = cart.length;
    document.getElementById('total-spent').innerText = totalSpent.toFixed(2);
}

loadDashboard();
