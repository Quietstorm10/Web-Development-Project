document.addEventListener('DOMContentLoaded', function() {
  
  // Menu
  const menu = document.querySelector('.menu');
  
  // Menu expansion
  menu.addEventListener('click', function() {
    menu.classList.toggle('expanded');
  });

  // Hover changes color
  const navLinks = document.querySelectorAll('.menu ul li a');

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      // Hover color
      this.style.color = 'gold';
    });

    link.addEventListener('mouseleave', function() {
      // Default text color
      this.style.color = 'mintcream';
    });
  });
});
