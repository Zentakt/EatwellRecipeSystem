const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
  
  const loginForm = document.querySelector('#loginForm'); // Replace with the actual ID of your login form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Perform login authentication, e.g., send a request to the server to validate the credentials
  const username = document.getElementById('username').value; // Replace with the actual ID of your username input field
  const password = document.getElementById('password').value; // Replace with the actual ID of your password input field
  
  // Example: Perform basic client-side validation
  if (username === 'yourUsername' && password === 'yourPassword') {
    // Redirect to the homepage upon successful login
    window.location.href = 'recipe.html'; // Replace with the actual URL of your homepage
  } else {
    alert('Invalid username or password. Please try again.'); // Show an error message for invalid credentials
  });