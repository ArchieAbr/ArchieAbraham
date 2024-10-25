const password = "Thisisapassword";

function createPasswordPrompt() {
    const promptDiv = document.createElement('div');
    promptDiv.innerHTML = `
        <div id="password-prompt" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <div style="background: white; padding: 20px; border-radius: 5px; text-align: center;">
                <p>Please enter the password to access this site:</p>
                <input type="password" id="password-input" style="padding: 10px; width: 100%; margin-bottom: 10px;">
                <button id="submit-password" style="padding: 10px 20px;">Submit</button>
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

checkPassword();