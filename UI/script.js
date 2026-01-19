// Get form elements
const loginBox = document.querySelector('.login-box');
const signupBox = document.querySelector('.signup-box');
const toggleForms = document.querySelectorAll('.toggle-form');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Toggle between Login and Signup forms
toggleForms.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.classList.toggle('active');
        signupBox.classList.toggle('active');
    });
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        console.log('Login attempt:', { email });
        alert('Login successful! (This is a demo)');
        loginForm.reset();
    }
});

// Handle Signup Form Submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const termsAgree = document.querySelector('.signup-box input[type="checkbox"]').checked;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Validate password strength (at least 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    // Validate terms acceptance
    if (!termsAgree) {
        alert('Please accept the Terms and Conditions!');
        return;
    }
    
    if (name && email && password) {
        console.log('Signup attempt:', { name, email });
        alert('Account created successfully! (This is a demo)');
        signupForm.reset();
        
        // Switch back to login form
        setTimeout(() => {
            loginBox.classList.add('active');
            signupBox.classList.remove('active');
        }, 1000);
    }
});

// Optional: Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
