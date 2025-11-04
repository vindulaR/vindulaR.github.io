// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-content');
    const experienceSection = document.querySelector('.experience-content');
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    if (experienceSection) {
        observer.observe(experienceSection);
    }
});
