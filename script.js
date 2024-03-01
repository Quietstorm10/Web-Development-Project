document.addEventListener('DOMContentLoaded', function() {
  
  // Menu
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  //Menu expansion
  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('expanded');
  });

  // Confirming the form
  const contactForm = document.getElementById('contact-form');
  const formError = document.getElementById('form-error');

  //Trims whitespaces
  contactForm.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    //Verifies the form is completed
    if (!name || !email || !subject || !message) {
      event.preventDefault();
      formError.textContent = 'Please fill out all fields.';
    }
  });

  // Hover changes color
  const h1 = document.querySelector('h1');

  h1.addEventListener('mouseenter', function() {
    h1.style.color = 'black';
  });

  h1.addEventListener('mouseleave', function() {
    h1.style.color = 'black';
  });
});
