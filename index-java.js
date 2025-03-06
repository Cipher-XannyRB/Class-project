// Smooth scrolling effect for navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating animation for the search button
const searchButton = document.querySelector('.search-container button');
searchButton.addEventListener('mouseenter', () => {
    searchButton.style.transform = 'scale(1.1)';
    searchButton.style.transition = 'transform 0.3s ease-in-out';
});
searchButton.addEventListener('mouseleave', () => {
    searchButton.style.transform = 'scale(1)';
});

// Header color change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(139, 0, 130, 0.8)';
    } else {
        header.style.backgroundColor = 'rgb(139, 0, 130)';
    }
});
