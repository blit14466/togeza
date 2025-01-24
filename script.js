document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (name === '') {
        alert('Name is required.');
        return;
    }
    
    if (email === '') {
        alert('Email is required.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (password === '') {
        alert('Password is required.');
        return;
    }
    
    if (confirmPassword === '') {
        alert('Confirm Password is required.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    alert('Sign-up successful!');
    // You can submit the form here if needed
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === '') {
        alert('Email is required.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (password === '') {
        alert('Password is required.');
        return;
    }
    
    alert('Login successful!');
    // You can submit the form here if needed
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
