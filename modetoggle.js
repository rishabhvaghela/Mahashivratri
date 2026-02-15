// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    this.classList.toggle('dark-mode');
    
    // Save preference
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    
    // Show theme change notification
    showThemeNotification(currentTheme);
});

// Show notification when theme changes
function showThemeNotification(theme) {
    // Remove existing notification
    const existing = document.getElementById('themeNotification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.id = 'themeNotification';
    notification.innerHTML = theme === 'light' 
        ? '<i class="fas fa-sun"></i> Light Mode Activated'
        : '<i class="fas fa-moon"></i> Dark Mode Activated';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${theme === 'light' ? 'linear-gradient(45deg, #ffd700, #ff9800)' : 'linear-gradient(45deg, #8a2be2, #4b0082)'};
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        font-family: 'Orbitron', sans-serif;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from {
            transform: translateX(200px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Auto-apply theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) themeToggle.classList.add('dark-mode');
    }
});