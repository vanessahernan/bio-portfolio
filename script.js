
document.addEventListener('DOMContentLoaded', function() {
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
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });

 
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

    
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
      
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('Vanessa.', `© ${currentYear}. Vanessa.`);
    }
});

const project = ["JavaScript (ES6+)", "Vue.js", "HTML & CSS", "Node.js"];
const skills = document.getElementById('project-skills');

skills.innerHTML = project.map(skill => `<li>${skill}</li>`).join('');

const projectTech = ["HTML5", "CSS3", "JavaScript", "Vue.js", "Python", "Django"];
const projectList = document.getElementById('project-list');

projectList.innerHTML = projectTech.map(tech => `<li>${tech}</li>`).join('');