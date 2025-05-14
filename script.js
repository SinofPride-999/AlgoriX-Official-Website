// Team member data
const teamMembers = {
    Jhay: {
        name: "Samuel Tagoe",
        title: "Founder and CEO of AlgoriX",
        bio: "Samuel specializes in web development with over 1 year of experience in backend engineering. He leads AlgoriX and our backend team in developing scalable solutions that help businesses visualize complex data in intuitive ways. Samuel is currently persuing a degree in Computer Science at Accra Technical University(Ghana).",
        img: "Jhay.jpg"
    },
    Phenyl: {
        name: "Adisi Samuel",
        title: "Quantum Computing Lead",
        bio: "Adisi is a pioneer in quantum computing applications, with multiple published papers on quantum algorithms. He leads our quantum research division, developing solutions that leverage quantum principles to solve previously intractable problems. Sarah previously worked at CERN and holds degrees from Stanford and Cambridge.",
        img: "phenyl.jpg"
    },
    Chron: {
        name: "Wicked Chron",
        title: "Orbital Systems Engineer",
        bio: "Michael designs and implements our orbital deployment systems, ensuring reliable and secure operation of our space-based platforms. With a background in aerospace engineering and 8 years at SpaceX, he brings practical expertise to our most ambitious projects.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
    },
    Zainab: {
        name: "Zainab Tagoe",
        title: "Neural Networks Specialist",
        bio: "Priya develops our proprietary neural network architectures that power our AI solutions. Her work in adaptive learning systems has been recognized with several industry awards. Priya holds a Master's in Computer Science from Carnegie Mellon and previously led AI research at Google DeepMind.",
        img: "Zainab.jpg"
    },
    Mkvng: {
        name: "Gideon Allotey",
        title: "Neural Networks Specialist",
        bio: "Priya develops our proprietary neural network architectures that power our AI solutions. Her work in adaptive learning systems has been recognized with several industry awards. Priya holds a Master's in Computer Science from Carnegie Mellon and previously led AI research at Google DeepMind.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
    },
    Slim: {
        name: "Greg Worlanyo",
        title: "Neural Networks Specialist",
        bio: "Priya develops our proprietary neural network architectures that power our AI solutions. Her work in adaptive learning systems has been recognized with several industry awards. Priya holds a Master's in Computer Science from Carnegie Mellon and previously led AI research at Google DeepMind.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
    }
};

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

// Team Member Modal Functionality
const teamModal = document.getElementById('team-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalTitle = document.getElementById('modal-title');
const modalBio = document.getElementById('modal-bio');

// Open modal when team card is clicked
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
        const memberId = this.getAttribute('data-member');
        const member = teamMembers[memberId];
        
        modalImg.src = member.img;
        modalImg.alt = `Portrait of ${member.name}`;
        modalName.textContent = member.name;
        modalTitle.textContent = member.title;
        modalBio.textContent = member.bio;
        
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', function() {
    teamModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside the modal content
teamModal.addEventListener('click', function(e) {
    if (e.target === teamModal) {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && teamModal.classList.contains('active')) {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Particles.js Config
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
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
                    "value": "#ff006a" // Red color for particles
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
                    "color": "#ff006a", // Red color for connecting lines
                    "opacity": 0.3, // Increased opacity for better visibility
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
    }
}

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

// Form submission
const contactFormElement = document.getElementById('contact-form');
if (contactFormElement) {
    contactFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const message = this.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // In a real implementation, you would send the form data to a server here
        alert('Thank you for your message! Our team will get back to you soon.');
        this.reset();
    });
}

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