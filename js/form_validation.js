document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Select the input values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    // Define regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email pattern
    const nameRegex = /^[a-zA-Z\s]{1,50}$/;           // Allow letters and spaces, max 50 chars

    // Validate email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();  // Prevents form submission if invalid
    }

    // Validate name
    if (!nameRegex.test(name)) {
        alert("Name should only contain letters and spaces, up to 50 characters.");
        event.preventDefault();  // Prevents form submission if invalid
    }
});
