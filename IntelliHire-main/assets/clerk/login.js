// login.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        // Send AJAX request to the server for login
        fetch('http://localhost:6000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid username or password.');
            }
            return response.json();
        })
        .then(data => {
            // Redirect to dashboard upon successful login
            window.location.href = 'dashboard.html';
        })
        .catch(error => {
            console.error('Login failed:', error.message);
            // Display error message to the user
            alert('Login failed. Please check your username and password.');
        });
    });
});
