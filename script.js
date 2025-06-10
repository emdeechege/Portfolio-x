// Skills data
const skillCategories = [
    {
        name: "Product Management",
        skills: ["Product Planning", "Product Development", "Product Roadmaps", "Go-to-Market Plans"]
    },
    {
        name: "Technical Skills",
        skills: ["Software Testing", "Software Development", "Data Analytics", "User Research"]
    },
    {
        name: "Business & Strategy",
        skills: ["Market Research", "Stakeholder Management", "Value Proposition", "Strategic Planning"]
    },
    {
        name: "Leadership",
        skills: ["Team Management", "Cross-functional Coordination", "Project Management", "Agile Methodologies"]
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    createSkillCategories();
    initScrollAnimations();
    initGSAPAnimations();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Create skill categories dynamically
function createSkillCategories() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillCategories.forEach((category, index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category fade-in';
        categoryDiv.style.animationDelay = `${index * 0.1}s`;
        
        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
            <ul class="skill-list">
                ${category.skills.map(skill => `<li class="skill-item">${skill}</li>`).join('')}
            </ul>
        `;
        
        skillsGrid.appendChild(categoryDiv);
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Observe sections for navbar highlighting
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
}

// GSAP Animations
function initGSAPAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-title .title-line', {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-description', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.hero-cta .btn', {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.scroll-indicator', {
            duration: 0.6,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.2');

    // Floating shapes animation
    gsap.to('.shape', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1
    });

    // About section animations
    gsap.from('.about-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.stat-item', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%'
        }
    });

    gsap.from('.profile-card', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        rotation: 5,
        scrollTrigger: {
            trigger: '.profile-card',
            start: 'top 80%'
        }
    });

    // Timeline animations
    gsap.from('.timeline-item', {
        duration: 0.8,
        x: -50,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%'
        }
    });

    // Skills animations
    gsap.from('.skill-category', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%'
        }
    });

    // Achievement cards animations
    gsap.from('.achievement-card', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.achievements-grid',
            start: 'top 80%'
        }
    });

    // Contact cards animations
    gsap.from('.contact-card', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%'
        }
    });

    // Parallax effect for hero background
    gsap.to('.floating-shapes', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy functions
const throttledScrollHandler = throttle(() => {
    // Any scroll-heavy operations can go here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);