import './components/skills.js';
import './components/portfolio.js';

// Function to handle active navigation state
document.addEventListener('DOMContentLoaded', () => {
    // Wait for components to load
    setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        // Intersection Observer for section animations
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Remove animation class when section is out of view
                if (!entry.isIntersecting) {
                    entry.target.classList.remove('animate');
                    // Force reflow to reset animation
                    void entry.target.offsetWidth;
                }
                // Add animation class when section comes into view
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Update active link when section is in view
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-50px'
        });

        // Observe all sections
        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Initialize home section as active if at top of page
        if (window.scrollY <= 100) {
            const homeLink = document.querySelector('.nav-links a[href="#home"]');
            if (homeLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                homeLink.classList.add('active');
            }
        }

        // Smooth scroll function with offset for fixed header
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, 1000);
}); 