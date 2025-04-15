// Add floating tech-related words
const techWords = ['JavaScript', 'React', 'Node.js', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'API'];
const colors = ['#64ffda', '#6c63ff', '#ff6b6b'];

function createFloatingWord() {
    const word = document.createElement('div');
    word.textContent = techWords[Math.floor(Math.random() * techWords.length)];
    word.style.position = 'fixed';
    word.style.color = colors[Math.floor(Math.random() * colors.length)];
    word.style.opacity = '0.1';
    word.style.fontSize = Math.random() * 20 + 10 + 'px';
    word.style.left = Math.random() * window.innerWidth + 'px';
    word.style.top = Math.random() * window.innerHeight + 'px';
    word.style.pointerEvents = 'none';
    document.body.appendChild(word);

    setTimeout(() => {
        document.body.removeChild(word);
    }, 5000);
}

setInterval(createFloatingWord, 2000);

// Add scroll effect for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Education Timeline Animation
function checkEducation() {
    const items = document.querySelectorAll('.education-item');
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight * 0.8) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkEducation);
window.addEventListener('load', checkEducation);

// Skills Tab Switching
document.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all skill groups
        document.querySelectorAll('.skill-group').forEach(group => group.classList.remove('active'));
        // Show selected skill group
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
