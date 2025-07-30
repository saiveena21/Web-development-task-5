const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Sneakers", price: 1999, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Watch", price: 1499, image: "https://via.placeholder.com/200" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
}

displayProducts();