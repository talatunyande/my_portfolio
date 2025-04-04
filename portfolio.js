document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio site loaded successfully!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").replace(".html", "").replace("#", "");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add interactive hover effect to header
    const header = document.querySelector("header h1");
    if (header) {
        header.addEventListener("mouseenter", function() {
            header.style.color = "#007BFF";
            header.style.transition = "color 0.3s ease";
        });
        header.addEventListener("mouseleave", function() {
            header.style.color = "";
        });
    }

    // About page: Change profile image border on hover
    const profileImage = document.querySelector("#about img");
    if (profileImage) {
        profileImage.addEventListener("mouseenter", function() {
            profileImage.style.border = "5px solid #007BFF";
            profileImage.style.transition = "border 0.3s ease";
        });
        profileImage.addEventListener("mouseleave", function() {
            profileImage.style.border = "";
        });
    }

    // Projects page: Add dynamic projects with animations
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        const projects = [
            { name: "ATM Mini", description: "A banking system with secure password entry, balance checking, deposits, and withdrawals." },
            { name: "Finance 365", description: "A financial application using token-based authentication." }
        ];

        projects.forEach(project => {
            let projectCard = document.createElement("div");
            projectCard.classList.add("project");
            projectCard.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
            projectCard.style.opacity = "0";
            projectCard.style.transform = "translateY(20px)";
            projectsContainer.appendChild(projectCard);
            setTimeout(() => {
                projectCard.style.opacity = "1";
                projectCard.style.transform = "translateY(0)";
                projectCard.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }, 300);
        });
    }

    // Contact form validation with better UX feedback
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            let errorMessage = document.getElementById("error-message");
            
            if (!errorMessage) {
                errorMessage = document.createElement("p");
                errorMessage.id = "error-message";
                errorMessage.style.color = "red";
                errorMessage.style.fontSize = "14px";
                contactForm.appendChild(errorMessage);
            }
            
            if (!name || !email || !message) {
                event.preventDefault();
                errorMessage.textContent = "Please fill out all fields before submitting.";
                setTimeout(() => errorMessage.remove(), 3000);
            } else {
                errorMessage.remove();
            }
        });
    }
});


