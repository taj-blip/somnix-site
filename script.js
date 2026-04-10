let cart = [];
let qty = 1;

function scrollToProduct() {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
}

function changeQty(value) {
  qty += value;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
}

function addToCart() {
  cart.push({ name: "Somnix Nasal Strips", qty: qty, price: 14.99 });
  updateCartCount();
  alert("Added to cart");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
  document.getElementById("cart").style.right = "0";
  renderCart();
}

function closeCart() {
  document.getElementById("cart").style.right = "-400px";
}

function renderCart() {
  let container = document.getElementById("cart-items");
  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.qty * item.price;
    container.innerHTML += `
      <p>${item.name} x${item.qty}</p>
    `;
  });

  document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  alert("Checkout complete (demo)");
  cart = [];
  updateCartCount();
  closeCart();
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
  
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function revealSections() {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();
