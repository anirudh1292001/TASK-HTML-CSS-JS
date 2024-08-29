const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});




// Select the form and input elements
const subscribeForm = document.querySelector('.footer__col form');
const emailInput = document.querySelector('.footer__col input[type="text"]');

// Add an event listener to the form submission
subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Get the email value from the input field
  const email = emailInput.value.trim();

  // Check if the email is valid (basic validation)
  if (email && email.includes('@')) {
    // Simulate subscription process (replace with actual backend API call)
    console.log(`Subscribing to newsletter with email: ${email}`);

    // Clear the input field
    emailInput.value = '';

    // Display a success message (optional)
    alert('Thank you for subscribing!');
  } else {
    // Display an error message (optional)
    alert('Please enter a valid email address.');
  }
});


const subscribeBtn = document.getElementById('subscribe-btn');


document.getElementById('subscribe-btn').addEventListener('click', function() {
  window.location.href = 'sign.html';
});