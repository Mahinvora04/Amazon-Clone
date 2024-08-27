// localStorage.setItem("products", JSON.stringify(products));

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

// const products = JSON.parse(localStorage.getItem("products"));
const products = [
  {
    name: "Leriya Fashion",
    description:
      "Dress for Women | One Piece Dress for Women | Beach Dress for Women",
    price: 479,
    mrp: 1999,
    discount: "76% off",
    image: "/images/p_4.jpg",
    ratings: 4,
    boughtInPastMonth: "1K+",
    brand: "Leriya Fashion",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Lymio",
    description:
      "Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (D-701-702)",
    price: 499,
    mrp: 3999,
    discount: "88% off",
    image: "/images/p_5.jpg",
    ratings: 4,
    boughtInPastMonth: "600+",
    brand: "Lymio",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Leriya Fashion",
    description:
      "Dress for Women| One Piece Dress for Women| Beach Dress for Women",
    price: 399,
    mrp: 1999,
    discount: "80% off",
    image: "/images/p_6.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "Leriya Fashion",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "DHRUVI TRENDZ",
    description: "Women Regular Fit Rayon Dress",
    price: 379,
    mrp: 1999,
    discount: "81% off",
    image: "/images/p_7.jpg",
    ratings: 4,
    boughtInPastMonth: "100+",
    brand: "DHRUVI TRENDZ",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Leriya Fashion",
    description: "Western Dresses for Women | Short A-Line Dress for Girls",
    price: 289,
    mrp: 1999,
    discount: "86% off",
    image: "/images/p_8.jpg",
    ratings: 4,
    boughtInPastMonth: "100+",
    brand: "Leriya Fashion",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Leriya Fashion",
    description:
      "Dress for Women| One Piece Dress for Women| Beach Dress for Women| Birthday Dress for Women",
    price: 499,
    mrp: 1999,
    discount: "75% off",
    image: "/images/p_9.jpg",
    ratings: 4,
    boughtInPastMonth: "32",
    brand: "Leriya Fashion",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Leriya Fashion",
    description:
      "Western Dresses for Women |A-Line Knee-Length Dress | Indo Western Dress for Women| Short Dress",
    price: 359,
    mrp: 1999,
    discount: "82% off",
    image: "/images/p_10.jpg",
    ratings: 4,
    boughtInPastMonth: "100+",
    brand: "Leriya Fashion",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Leriya Fashion",
    description:
      "Women Ethnic Co Ord Set || Paisley Printed Co-Ord Set for Women || Long Straight Shirt Kurta with Pant Set for Women || Gift for Women || Fancy Kurta Set",
    price: 519,
    mrp: 1999,
    discount: "74% off",
    image: "/images/p_11.jpg",
    ratings: 4,
    boughtInPastMonth: "100+",
    brand: "Leriya Fashion",
    deal: "Deal of the Day",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "DHRUVI TRENDZ",
    description: "Women Rayon Co-Ord Set",
    price: 479,
    mrp: 1999,
    discount: "76% off",
    image: "/images/p_12.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "DHRUVI TRENDZ",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Leriya Fashion",
    description: "Western Dress || Rayon Color Block Half Button Front Dress",
    price: 359,
    mrp: 1999,
    discount: "76% off",
    image: "/images/p_13.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "Leriya Fashion",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Selvia",
    description:
      "Digital Printed Dress for Women | Crepe Digital Printed Dress",
    price: 439,
    mrp: 1709,
    discount: "76% off",
    image: "/images/p_14.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "Selvia",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Lavisfab",
    description: "Women Georgette A-Line Standard Length Dress",
    price: 907,
    mrp: 3500,
    discount: "76% off",
    image: "/images/p_15.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "Lavisfab",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Lymio",
    description: "Dresses for Women || Western Dresses for Women",
    price: 579,
    mrp: 3999,
    discount: "76% off",
    image: "/images/p_16.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "Lymio",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Sheetal Associates",
    description: "Women Casual Printed Puff Sleeves Maxi Dress",
    price: 419,
    mrp: 3999,
    discount: "76% off",
    image: "/images/p_17.jpg",
    ratings: 4,
    boughtInPastMonth: "50+",
    brand: "Sheetal Associates",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
  {
    name: "Sheetal Associates",
    description: "Co Ord Set for Women Ethnic Wear | Ethnic Co Ord Set",
    price: 499,
    mrp: 1999,
    discount: "75% off",
    image: "/images/p_18.jpg",
    ratings: 4,
    boughtInPastMonth: "70+",
    brand: "Leriya Fashion",
    deal: "Limited time deal",
    delivery: "FREE Delivery over ₹499. Fulfilled by Amazon",
  },
];

function loadData() {
  var prodCont = document.querySelector(".body-div");
  prodCont.innerHTML = "";
  var prodData = "";
  products.forEach((product) => {
    prodData += `<div class="product">
    <img src="${product.image}" alt="products 1" />
    <div>
      <a href="#" class="colours">+1 colours/patterns</a>
      <p class="sponsored">Sponsored ⓘ</p>
      <p>
        <b>${product.brand}</b> <br />
        ${product.description}
      </p>
      <div class="star">
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-regular fa-star"></i>
      </div>
      <p>50+ bought in past month</p>
      <button class="deal-btn">Limited time deal</button>
      <div class="d-flex product-price">
        &#x20B9;
        <h3>${product.price}</h3>
        &nbsp;&nbsp; M.R.P:&nbsp;
        <p class="checked-price">&#x20B9;${product.mrp}</p>
        <p>(${product.discount}% off)</p>
      </div>
      FREE Delivery over ₹499. Fulfilled by Amazon
      <p></p>
      <button data-title='${product.description}' class="btn btn-outline-success" onclick="addToCart(this)">Cart</button>
    </div>
  </div>`;
  });
  prodCont.innerHTML = prodData;
}

function addToCart(product) {
  const prodName = product.getAttribute("data-title");
  const selectedProduct = products.find(
    (prod) => prod.description === prodName
  );
  console.log(prodName);
  console.log(selectedProduct);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  selectedProduct.quantity = 1;
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
}
var starRatings = [
  [4, 1],
  [3, 2],
  [2, 3],
  [1, 4],
];

// Function to create star elements
function createStarElement(type) {
  var starElement = document.createElement("i");
  starElement.className = "fa-sharp fa-" + type + " fa-star";
  return starElement;
}

// Function to create star ratings
function createStarRatingsContainer(ratings) {
  var container = document.createElement("div");
  container.className = "star d-flex";

  for (var i = 0; i < 5; i++) {
    if (i < ratings[0]) {
      container.appendChild(createStarElement("solid"));
    } else if (i < ratings[0] + ratings[1]) {
      container.appendChild(createStarElement("regular"));
    }
  }

  return container;
}

// Get the container to append star ratings
var starRatingsContainer = document.querySelector(".star-ratings-container");

// Loop through starRatings data and create star ratings
starRatings.forEach(function (rating) {
  starRatingsContainer.appendChild(createStarRatingsContainer(rating));
});

// Filter brands
document.addEventListener("DOMContentLoaded", function () {
  // Get all brand checkboxes
  const brandCheckboxes = document.querySelectorAll(".brand-checkbox");

  // Add event listener to each brand checkbox
  brandCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const brandName = this.id; // Get the brand name from the checkbox ID
      const products = document.querySelectorAll(".product");
      const isChecked = this.checked;

      products.forEach(function (product) {
        const brand = product.querySelector("b");
        if (isChecked && brand.textContent !== brandName) {
          product.style.display = "none";
        } else {
          product.style.display = "block";
        }
      });
    });
  });
});

// function addToCart(product) {
//   console.log(product);
//   const prodName = product.getAttribute("data-title");
//   const selectedProduct = products.find(
//     (prod) => prod.description === prodName
//   );

//   if (selectedProduct) {
//     // Retrieve user data from localStorage
//     const userData = JSON.parse(localStorage.getItem(mobileNumber));

//     if (userData) {
//       // Check if the user has a cart property, if not create it
//       if (!userData.cart) {
//         userData.cart = [];
//       }

//       // Check if the product is already in the user's cart
//       const existingProductIndex = userData.cart.findIndex(
//         (item) => item.description === selectedProduct.description
//       );

//       if (existingProductIndex !== -1) {
//         // If the product is already in the cart, increase its quantity
//         userData.cart[existingProductIndex].quantity += 1;
//       } else {
//         // If the product is not in the cart, add it with quantity 1
//         selectedProduct.quantity = 1;
//         userData.cart.push(selectedProduct);
//       }

//       // Update the user data in localStorage
//       localStorage.setItem("user", JSON.stringify(userData));

//       // Provide feedback to the user
//       alert("Product added to cart!");
//     } else {
//       alert("User data not found. Please register or log in.");
//     }
//   } else {
//     alert("Product not found!");
//   }
// }
