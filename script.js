document.addEventListener('DOMContentLoaded', function() {
  
  // Menu
  const menu = document.querySelector('.menu');
  
  // Menu expansion
  menu.addEventListener('click', function() {
    menu.classList.toggle('expanded');
  });

  // Hover changes color
  const h1 = document.querySelector('h1');

  h1.addEventListener('mouseenter', function() {
    // Hover color
    h1.style.color = 'gold';
  });

  h1.addEventListener('mouseleave', function() {
    // Default text color
    h1.style.color = 'black';
  });
});

