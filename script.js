// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav-items');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navItems.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navItems.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Cart counter functionality
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-count');
let count = 0;

cartBtn.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navItems.classList.remove('active');
        }
    });
});

// Add animation on scroll for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Surprise Me button functionality
const surpriseBtn = document.querySelector('.surprise-btn');
const surpriseInput = document.querySelector('.surprise-container input');

surpriseBtn.addEventListener('click', () => {
    const suggestions = [
        'Try our new chocolate cake recipe!',
        'Check out our baking tools collection',
        'Browse our cake decorating tutorials',
        'Explore our seasonal offerings'
    ];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    surpriseInput.value = randomSuggestion;
});
