function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const timeline = document.querySelector('.edu-timeline');
let scrollInterval;

// Function to start auto-scrolling
function startAutoScroll() {
    scrollInterval = setInterval(() => {
        timeline.scrollLeft += 1; // Adjust speed by changing the increment
        if (timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth) {
            timeline.scrollLeft = 0; // Reset to the start when reaching the end
        }
    }, 20); // Adjust speed by changing the interval
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Start auto-scrolling on page load
startAutoScroll();

// Pause auto-scrolling on hover
timeline.addEventListener('mouseenter', stopAutoScroll);
timeline.addEventListener('mouseleave', startAutoScroll);