// Task 1: Dynamic Year
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// Task 2: Skill Description Interaction
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
    "HTML": "HTML (HyperText Markup Language) is the backbone of all web pages, defining their structure.HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.",
    "CSS": "CSS (Cascading Style Sheets) is used to style the visual presentation of web pages, making them look great! CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    "JavaScript": "JavaScript is a programming language that enables interactive web pages, allowing complex features and dynamic content. JavaScript is a scripting language for creating dynamic web page content. It creates elements for improving site visitors' interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors."
};

skillButtons.forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.dataset.skill; // Get the 'data-skill' attribute
        skillDescription.textContent = skillInfo[skill];
        skillDescription.style.color = '#0056b3'; // Change text color on interaction
    });
});

// Task 3: Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference (optional, but good practice)
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});
// Task 4: Load and Display Portfolio Projects from JSON
const projectsContainer = document.getElementById('projects-container');

async function loadProjects() {
    try {
        const response = await fetch('data/portfolio_items.json'); // Fetch the JSON file
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json(); // Parse JSON data

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
                   `;
projectsContainer.appendChild(projectCard);1
});
} catch (error) {
console.error('Error loading projects:', error);
projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
}
}
loadProjects(); 
// Call the function to load projects when the page loads