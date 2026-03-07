document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica del Menú Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // --- Efecto del Navbar al Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Inyección Dinámica de Tecnologías ---
    
    // Proyecto 1: Celeste Shop
    const project1Tech = ["JavaScript (ES6+)", "Vue.js", "HTML & CSS", "Node.js"];
    const skillsContainer = document.getElementById('project-skills');
    if (skillsContainer) {
        skillsContainer.innerHTML = project1Tech.map(skill => `<li>${skill}</li>`).join('');
    }

    // Proyecto 2: codeW3b
    const project2Tech = ["HTML5", "CSS3", "JavaScript", "Vue.js", "Python", "Django"];
    const projectListContainer = document.getElementById('project-list');
    if (projectListContainer) {
        projectListContainer.innerHTML = project2Tech.map(tech => `<li>${tech}</li>`).join('');
    }

    // --- Copyright Dinámico ---
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `© ${currentYear} Vanessa Ramirez.`;
    }
});