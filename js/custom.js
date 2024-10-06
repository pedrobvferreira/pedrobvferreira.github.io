// Select all menu items
const menuItems = document.querySelectorAll('.side-menu-large ul li');

// Function to remove 'active' class from all items and add it to the clicked item
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all items
    menuItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked item
    this.classList.add('active');
  });
});

function toggleMobileMenu() {
  const smallMenuContainer = document.querySelector('.side-menu-small');
  smallMenuContainer.classList.toggle('active'); // Alterna a classe 'active'
}
