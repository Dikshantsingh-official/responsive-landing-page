document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Initialize AOS
    AOS.init();

    window.addEventListener('scroll', function() {
        // Change navbar background on scroll
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        }

        // Highlight the active section
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - 60) && window.scrollY < (sectionTop + sectionHeight - 60)) {
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

    // Form validation
    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(message => message.style.display = 'none');

        // Validate name
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
