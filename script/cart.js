const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {
  // This will run after the DOM is fully loaded
  loadCart();
});

function loadCart() {
  var prodCont = document.querySelector(".products");
  var mainCont = document.querySelector(".main-1");
  var billCont = document.querySelector(".main-2");

  prodCont.innerHTML = "";
  // billCont.innerHTML = "";

  var prodData = "";
  // var billData = "";

  cart.forEach((product, index) => {
    prodData += ` <hr/><div class="product">
    <div class="image">
      <img src="${product.image}" alt="Product image" />
    </div>
    <div class="details">
      <div class="d-flex justify-content-between">
        <div class="name">${product.description}</div>
        <div class="mx-5 price"> &#x20B9;${product.price}</div>
      </div>
      <p>
        <a class="stock" href="#">In Stock</a>
      </p>
      <p>
        <a class="eligible" href="#">Eligible for FREE Shipping</a>
      </p>
      <p>
      <img src="/images/fullfill.png" alt="Product image" />
      </p>
      <p class="gift">
        <input type="checkbox" />This will be a gift
        <a class="stock" href="#">Learn More</a>
      </p>
      <div class="d-flex justify-content-between">
        <div>
          <button class="qty-btn">
            <div id="quantitySelector">
              <label for="quantity">Qty:</label>
              <select id="quantity-${index}" class="qty-select"  onchange="updateQuantity(${
      product.price
    }, ${index})">
                ${generateQuantityOptions(product.quantity)}
              </select>
            </div>
          </button>
        </div>
        <div><a class="mx-2 action-link" href="#" onclick="removeFromCart(${index})">Delete</a></div>
       <div><a class="mx-2 action-link" href="">Save for later</a></div>
        <div>
          <a class="mx-2 action-link" href="/products.html"> See more like this </a>
        </div>
        <div><a class="mx-2 action-link" href="">Share</a></div>
      </div>
    </div>
  </div> `;
  });
  prodCont.innerHTML = prodData;

  totalPrice = `<hr /><div class="total-price">Subtotal (${
    cart.length
  } items): &#x20B9; ${calculateTotalPrice()}</div>`;
  mainCont.innerHTML += totalPrice;

  billData = `<div class="prog d-flex">
    <div class="progress" style="width: 250px; margin: 20px">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        style="width: 100%"
      ></div>
    </div>
    <div style="margin-top: 20px">&#x20B9;499</div>
  </div>
  <p class="text-success free-del-p">
    Your order is eligible for FREE Delivery.
  </p>
  <p class="free-del-p">
    Choose <a href="#" class="free_del-a">FREE Delivery</a> option at
    checkout.
  </p>
  <div class="total-price-bill">Subtotal (${
    cart.length
  } items): &#x20B9; ${calculateTotalPrice()}</div>
  <div class="gift-bill">
    <input
      type="checkbox"
      name="gift-bill-input"
      class="gift-bill-input"
      id="gift-bill-input"
    /><label for="gift-bill-input">This order contains a gift</label>
  </div>

  <button class="proceed-button" onclick="return validateForm()">
    <a class="proceed-to-buy-btn" href="/checkout.html">Proceed to Buy</a>
  </button>
  <div class="card" onclick="toggleText()">
    <div class="card-header">EMI Available</div>
    <div class="card-body" id="cardText">
      Your order qualifies for EMI with valid credit cards (not available
      on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top
      up). <a href="#" class="learn-more-a"> Learn more</a>
    </div>
  </div>`;
  billCont.innerHTML = billData;
}

function addToCart(product) {
  const prodName = product.getAttribute("data-title");
  const selectedProduct = products.find(
    (prod) => prod.description === prodName
  );
  console.log(selectedProduct);
  selectedProduct.quantity = 1; // Set initial quantity to 1
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((product) => {
    console.log(product.quantity);
    console.log(product.price);
    totalPrice += parseInt(product.quantity) * parseInt(product.price);
  });
  return totalPrice;
}

function updateQuantity(price, index) {
  const quantitySelect = document.getElementById(`quantity-${index}`);
  const newQuantity = parseInt(quantitySelect.value);
  cart[index].quantity = newQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Reload the cart after updating quantity
}
console.log(calculateTotalPrice());
console.log(cart);

// function toCart() {
//   const p = new URLSearchParams(window.location.search);
//   const mobileNumber = p.get("phno");
//   // Append the mobile number parameter to the URL
//   window.location.href = `Cart.html?phno=${mobileNumber}`;
// }

function toggleText() {
  var cardText = document.getElementById("cardText");
  if (cardText.style.display === "none") {
    cardText.style.display = "block"; // Show the text
  } else {
    cardText.style.display = "none"; // Hide the text
  }
}

function generateQuantityOptions(selectedQuantity) {
  let options = "";
  for (let i = 1; i <= 10; i++) {
    // Let's assume the maximum quantity is 10
    if (i === selectedQuantity) {
      options += `<option value="${i}" selected>${i}</option>`;
    } else {
      options += `<option value="${i}">${i}</option>`;
    }
  }
  return options;
}

function removeFromCart(index) {
  cart.splice(index, 1); // Remove the product from the cart array
  localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in local storage
  loadCart(); // Reload the cart to reflect the changes
  location.reload();
}

function emptyCart() {
  // Clear the cart array
  cart.length = 0;
  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
  // Reload the cart to reflect the changes
  location.reload();
}

function updateItemsCountAndTotalPrice() {
  var itemsCount = cart.length;

  // Update items count in the HTML
  var itemsElement = document.querySelector(".items");
  if (itemsElement) {
    itemsElement.textContent = `Items: ${itemsCount}`;
  }

  // Update total price in the HTML
  var totalPriceElement = document.querySelector(".total-price-bill");
  if (totalPriceElement) {
    totalPriceElement.textContent = `Subtotal (${itemsCount} items): ₹${calculateTotalPrice()}`;
  }
}
