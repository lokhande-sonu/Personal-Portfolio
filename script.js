// Menu toggle functionality
function myMenuFunction() {
    const navMenu = document.getElementById("mynavmenu");
    // Fix: Changed menuBtn to navMenu since menuBtn wasn't defined
    navMenu.classList.toggle("responsive");
}

// Dark mode toggle
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-swtich");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Typing animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js
    new Typed(".typedText", {
        strings: ["Designer", "Coder", "Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const navMenu = document.getElementById("mynavmenu");
            if (navMenu.classList.contains("responsive")) {
                navMenu.classList.remove("responsive");
            }
        }
    });
});

// Active link highlighting
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active_link');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active_link');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Form validation
const form = document.querySelector('.form-control');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('input[placeholder="Your Name"]').value;
        const email = form.querySelector('input[placeholder="Your Email"]').value;
        const subject = form.querySelector('input[placeholder="Subject"]').value;
        const message = form.querySelector('textarea').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, subject, message });
        alert('Message sent successfully!');
        form.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}