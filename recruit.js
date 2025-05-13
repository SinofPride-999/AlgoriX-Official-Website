// Initialize particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff006a" // Red particles
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.9,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff006a", // Red connecting lines
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Form submission
document.getElementById('career-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const firstName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const position = document.getElementById('position').value;
    const resume = document.getElementById('resume').value;
    
    if (!firstName || !email || !position || !resume) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // In a real implementation, you would send the form data to a server here
    alert('Thank you for your application! We will review your materials and get back to you soon.');
    this.reset();
});

document.getElementById('resume').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'No file selected';
    document.getElementById('file-name').textContent = fileName;
});


// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Hide loading screen after content loads
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
            // Animate hero content after loading
            document.querySelector('.hero-content').classList.add('visible');
        }, 1000);
    }, 2500);
});

// Theme Toggle - Remove the particle color change logic
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
 themeToggle.addEventListener('click', function() {
       document.body.classList.toggle('light-mode');
       localStorage.setItem('themePreference', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
}


// Initialize particles when window loads
window.addEventListener('load', initParticles);

// Theme Toggle

// Check for saved theme preference
if (localStorage.getItem('themePreference') === 'light') {
    document.body.classList.add('light-mode');
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        navMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', !isExpanded);
        mobileMenuBtn.textContent = isExpanded ? '☰' : '✕';
    });
}

// Scroll Animation
function animateOnScroll() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.section');
    const sectionTitles = document.querySelectorAll('.section-title');
    const featureCards = document.querySelectorAll('.feature-card');
    const teamCards = document.querySelectorAll('.team-card');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    // Header scroll effect
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    
    // Scroll animations for sections
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionTitle = section.querySelector('.section-title');
        
        if (sectionTop < window.innerHeight - 100) {
            if (sectionTitle) {
                sectionTitle.classList.add('visible');
            }
            
            // Animate features
            if (section.id === 'features') {
                featureCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                });
            }
            
            // Animate team
            if (section.id === 'team') {
                teamCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 150);
                });
            }
            
            // Animate contact
            if (section.id === 'contact') {
                if (contactInfo) contactInfo.classList.add('visible');
                if (contactForm) contactForm.classList.add('visible');
            }
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu) navMenu.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.textContent = '☰';
            }
        }
    });
});

// Helper function for visually hidden elements (for screen readers)
function createVisuallyHiddenStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;
    document.head.appendChild(style);
}

// Add visually hidden styles
createVisuallyHiddenStyles();

// Trigger initial animations for visible elements
setTimeout(animateOnScroll, 500);

