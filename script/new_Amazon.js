const shopData = JSON.parse(localStorage.getItem("shopData"));
const carouselDisplay = JSON.parse(localStorage.getItem("carouselDisplay"));
const carouselDresses = JSON.parse(localStorage.getItem("carouselDresses"));

// Call the loadData function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  createCarousel();
});

function loadData() {
  const shopCont = document.querySelector(".shop-sec-main");
  shopCont.innerHTML = ""; // Clear existing content

  shopData.forEach((data) => {
    shopCont.innerHTML += `<div class="box">
      <div class="box-content">
        <h3 class="box-heading">${data.category}</h3>
        <div class="box-img" style="background-image: url('${data.src}')"></div>
        <p><a href="#" class="see-more-a">See More</a></p>
      </div>
    </div>`;
  });
}

function createCarousel() {
  const flexContainer = document.getElementById("flex-container");
  flexContainer.innerHTML = ""; // Clear existing content
  carouselDisplay.forEach((item) => {
    flexContainer.innerHTML += `<div class="card">
      <img src="${item.src}" alt="${item.alt}" />
    </div>`;
  });

  const flexContainerDress = document.getElementById("flex-container-dress");
  flexContainerDress.innerHTML = ""; // Clear existing content
  carouselDresses.forEach((item) => {
    flexContainerDress.innerHTML += `<div class="dress_card">
      <img src="${item.src}" alt="${item.alt}" />
    </div>`;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const updateLocationLink = document.querySelector(".addSec a");
  const addFirstDiv = document.querySelector(".addFirst");

  updateLocationLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    const newPincode = prompt("Enter your new pincode:");
    if (newPincode) {
      // If user entered a pincode
      addFirstDiv.textContent = `Delivering to ${newPincode}`;
    }
  });
});
