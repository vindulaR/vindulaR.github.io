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
  
  //Set work experience
  // Set your start date
  const startDate = new Date("2019-01-15");
  const today = new Date();
  
  // Calculate difference
  let yearsDiff = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  
  // Adjust if the anniversary hasn't happened yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    yearsDiff--;
  }
  
  document.getElementById("expYears").innerText = yearsDiff;
  document.getElementById("expYears2").innerText = yearsDiff;

