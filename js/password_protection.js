const password = "Thisisapassword";

function createPasswordPrompt() {
    const promptDiv = document.createElement('div');
    promptDiv.innerHTML = `
        <div id="password-prompt" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <div style="background: #fff; padding: 20px; border-radius: 5px; text-align: center; max-width: 300px; width: 100%; color: #333;">
                <p style="margin-bottom: 10px;">Site under maintenance. Enter password:</p>
                <input type="password" id="password-input" style="padding: 10px; width: 100%; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px;">
                <button id="submit-password" style="padding: 10px 20px; background: #333; color: #fff; border: none; cursor: pointer;">Submit</button>
            </div>
        </div>
    `;
    document.body.appendChild(promptDiv);

    document.getElementById('submit-password').addEventListener('click', () => {
        const userPassword = document.getElementById('password-input').value;
        if (userPassword !== password) {
            alert("Incorrect password. Access denied.");
            window.location.href = "https://www.google.com";
        } else {
            sessionStorage.setItem('authenticated', 'true');
            document.getElementById('password-prompt').remove();
        }
    });
}

function checkPassword() {
    if (sessionStorage.getItem('authenticated') !== 'true') {
        createPasswordPrompt();
    }
}

// Ensure the script is executed after styles are loaded
window.onload = checkPassword;
