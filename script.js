// Wait for the page to fully load
window.addEventListener('load', () => {
    // Set a delay of 7 seconds (7000 milliseconds)
    setTimeout(() => {
        const box = document.getElementById('box5');
        box.style.opacity = 1; // Make the box visible after 7 seconds
    }, 7000);
});