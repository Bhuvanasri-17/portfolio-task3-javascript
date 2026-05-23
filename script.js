// Theme Toggle

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

});


// Contact Form Validation

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  const formMessage = document.getElementById("form-message");

  if(name === "" || email === "" || message === "") {

    formMessage.innerText = "Please fill all fields.";

    return;

  }

  formMessage.innerText = "Message sent successfully!";

  form.reset();

});


// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300) {

    scrollBtn.style.display = "block";

  }

  else {

    scrollBtn.style.display = "none";

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});