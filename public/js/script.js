const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();
let cards = document.querySelectorAll(".destination-card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

}


function bookPackage(packageName){
alert("You selected: " + packageName + " package");
}



const images = document.querySelectorAll(".gallery-grid img")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modal-img")
const closeBtn = document.getElementById("close")

if(images){

images.forEach(img => {

img.addEventListener("click", () => {
modal.style.display = "flex"
modalImg.src = img.src
})

})

}

if(closeBtn){

closeBtn.addEventListener("click", () => {
modal.style.display = "none"
})

}



const form = document.getElementById("contactForm")

if(form){

form.addEventListener("submit", function(e){

e.preventDefault()

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value

if(name === "" || email === "" || message === ""){
alert("Please fill all fields")
return
}

alert("Message sent successfully!")

form.reset()

})

}