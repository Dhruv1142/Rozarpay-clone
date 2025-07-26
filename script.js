const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked (optional)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Only hide if the menu is currently visible and on a small screen
        if (!navLinks.classList.contains('hidden') && window.innerWidth < 768) {
            navLinks.classList.add('hidden');
        }
    });
});
