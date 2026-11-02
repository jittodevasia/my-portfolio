const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();