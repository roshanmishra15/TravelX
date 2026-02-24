// ============================
// DESTINATION SEARCH FILTER
// ============================

const searchInput = document.getElementById("search");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

let filter = searchInput.value.toLowerCase();
let cards = document.querySelectorAll(".destination-card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if (text.includes(filter)) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});

}


// ============================
// PACKAGE BOOK BUTTON
// ============================

function bookPackage(packageName) {
alert("You selected: " + packageName + " package");
}


// ============================
// GALLERY IMAGE MODAL
// ============================

const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

if (images.length > 0 && modal && modalImg) {

images.forEach(img => {

img.addEventListener("click", () => {
modal.style.display = "flex";
modalImg.src = img.src;
});

});

}

if (closeBtn && modal) {

closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

}


// ============================
// CONTACT FORM VALIDATION
// ============================

const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {
alert("Please fill all fields");
return;
}

alert("Message sent successfully!");

form.reset();

});

}


// ============================
// HERO IMAGE CAROUSEL
// ============================
/* HERO CAROUSEL */

const hero = document.querySelector(".hero")

if(hero){

const heroImages = [
"/images/optimized/hero.jpg",
"/images/optimized/bali.jpg",
"/images/optimized/paris.jpg",
"/images/optimized/maldives.jpg"
]

let index = 0

function changeHero(){

hero.style.backgroundImage = `url(${heroImages[index]})`

index++

if(index >= heroImages.length){
index = 0
}

}

changeHero()

setInterval(changeHero, 4000)

}