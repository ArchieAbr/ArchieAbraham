const password = "Thisisapassword";

function checkPassword() {
    const userPassword = prompt("Please enter the password to access this site:");
    if (userPassword !== password) {
        alert("Incorrect password. Access denied.");
        window.location.href = "https://www.google.com";
    }
}

checkPassword();