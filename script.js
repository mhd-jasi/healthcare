// Toggle responsive navbar
const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Auto close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent! Thank you for contacting us.');
  this.reset();
});
