// Smooth scrolling effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href'); // Get section ID
        const targetSection = document.querySelector(targetId); // Select section

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust position
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    });
});

// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});