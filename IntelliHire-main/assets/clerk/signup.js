// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(signupForm);
        const username = formData.get('username');
        const password = formData.get('password');

        // Send AJAX request to the server for sign-up
        fetch('http://localhost:2000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error signing up.');
            }
            return response.text();
        })
        .then(data => {
            console.log('Sign-up successful:', data);
            // Redirect to login page after successful sign-up
            window.location.href = 'login.html';
        })
        .catch(error => {
            console.error('Sign-up failed:', error.message);
            // Display error message to the user
            alert('Sign-up failed. Please try again later.');
        });
    });
});
