// scripts.js

// Example: Add interactivity such as toggling the sidebar
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Sidebar';
    document.body.insertBefore(toggleButton, document.getElementById('main-content'));

    toggleButton.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.style.display === 'none') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });
});