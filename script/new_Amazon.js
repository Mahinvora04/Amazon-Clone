// const shopData = JSON.parse(localStorage.getItem("shopData"));
const shopData = [
  { src: "/images/box1_image.jpg", alt: "Image 1", category: "Clothes" },
  { src: "/images/box2_image.jpg", alt: "Image 2", category: "Personal Care" },
  { src: "/images/box3_image.jpg", alt: "Image 3", category: "Furniture" },
  { src: "/images/box4_image.jpg", alt: "Image 4", category: "Electronics" },
  { src: "/images/box5_image.jpg", alt: "Image 5", category: "Beauty Picks" },
  { src: "/images/box6_image.jpg", alt: "Image 6", category: "Pet Care" },
  {
    src: "/images/box7_image.jpg",
    alt: "Image 7",
    category: "New Arrival in Toys",
  },
  { src: "/images/box8_image.jpg", alt: "Image 8", category: "Fashion Trends" },
  { src: "/images/box12_image.png", alt: "Image 9", category: "Kids" },
];
// const carouselDisplay = JSON.parse(localStorage.getItem("carouselDisplay"));
const carouselDisplay = [
  { src: "/images/carousel_2/c2_1.jpg", alt: "Image 1" },
  { src: "/images/carousel_2/c2_2.jpg", alt: "Image 2" },
  { src: "/images/carousel_2/c2_3.jpg", alt: "Image 3" },
  { src: "/images/carousel_2/c2_4.jpg", alt: "Image 4" },
  { src: "/images/carousel_2/c2_5.jpg", alt: "Image 5" },
  { src: "/images/carousel_2/c2_6.jpg", alt: "Image 6" },
  { src: "/images/carousel_2/c2_7.jpg", alt: "Image 7" },
  { src: "/images/carousel_2/c2_8.jpg", alt: "Image 8" },
  { src: "/images/carousel_2/c2_9.jpg", alt: "Image 9" },
  { src: "/images/carousel_2/c2_10.jpg", alt: "Image 10" },
  { src: "/images/carousel_2/c2_11.jpg", alt: "Image 11" },
  { src: "/images/carousel_2/c2_12.jpg", alt: "Image 12" },
  { src: "/images/carousel_2/c2_13.jpg", alt: "Image 13" },
  { src: "/images/carousel_2/c2_14.jpg", alt: "Image 14" },
  { src: "/images/carousel_2/c2_15.jpg", alt: "Image 15" },
  { src: "/images/carousel_2/c2_16.jpg", alt: "Image 16" },
  { src: "/images/carousel_2/c2_17.jpg", alt: "Image 17" },
  { src: "/images/carousel_2/c2_18.jpg", alt: "Image 18" },
  { src: "/images/carousel_2/c2_19.jpg", alt: "Image 19" },
  { src: "/images/carousel_2/c2_20.jpg", alt: "Image 20" },
];
// const carouselDresses = JSON.parse(localStorage.getItem("carouselDresses"));
const carouselDresses = [
  { src: "/images/carousel_3/dress_1.jpg", alt: "Dress Image 1" },
  { src: "/images/carousel_3/dress_2.jpg", alt: "Dress Image 2" },
  { src: "/images/carousel_3/dress_3.jpg", alt: "Dress Image 3" },
  { src: "/images/carousel_3/dress_4.jpg", alt: "Dress Image 4" },
  { src: "/images/carousel_3/dress_5.jpg", alt: "Dress Image 5" },
  { src: "/images/carousel_3/dress_6.jpg", alt: "Dress Image 6" },
  { src: "/images/carousel_3/dress_7.jpg", alt: "Dress Image 7" },
  { src: "/images/carousel_3/dress_8.jpg", alt: "Dress Image 8" },
  { src: "/images/carousel_3/dress_9.jpg", alt: "Dress Image 9" },
  { src: "/images/carousel_3/dress_10.jpg", alt: "Dress Image 10" },
  { src: "/images/carousel_3/dress_11.jpg", alt: "Dress Image 11" },
  { src: "/images/carousel_3/dress_12.jpg", alt: "Dress Image 12" },
  { src: "/images/carousel_3/dress_13.jpg", alt: "Dress Image 13" },
  { src: "/images/carousel_3/dress_14.jpg", alt: "Dress Image 14" },
  { src: "/images/carousel_3/dress_15.jpg", alt: "Dress Image 15" },
  { src: "/images/carousel_3/dress_16.jpg", alt: "Dress Image 16" },
  { src: "/images/carousel_3/dress_17.jpg", alt: "Dress Image 17" },
  { src: "/images/carousel_3/dress_18.jpg", alt: "Dress Image 18" },
  { src: "/images/carousel_3/dress_19.jpg", alt: "Dress Image 19" },
  { src: "/images/carousel_3/dress_20.jpg", alt: "Dress Image 20" },
  { src: "/images/carousel_3/dress_21.jpg", alt: "Dress Image 21" },
  { src: "/images/carousel_3/dress_22.jpg", alt: "Dress Image 22" },
  { src: "/images/carousel_3/dress_23.jpg", alt: "Dress Image 23" },
];
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
