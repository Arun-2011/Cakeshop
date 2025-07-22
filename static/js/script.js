// script.js

// Toggle mobile navigation (if expanded for future use)
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector("#nav-toggle");
    const navLinks = document.querySelector("nav");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

// Simple client-side form validation (Contact Page)
function validateContactForm() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Attach validation on form submit
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            if (!validateContactForm()) {
                e.preventDefault(); // Prevent form submission
            }
        });
    }
});
