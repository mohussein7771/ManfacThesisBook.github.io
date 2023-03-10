document.addEventListener("DOMContentLoaded", function() {
    // your JavaScript code goes here
    const forgotPasswordSection = document.getElementById('forgot-password-section');
const verificationSection = document.getElementById('verification-section');
const updatePasswordSection = document.getElementById('set-password-section');
const nextButton = document.getElementById('next-button');
const sendCodeButton = document.getElementById('send-code-button');
const continueButton = document.getElementById('continue-button');
const verificationCodeField = document.getElementById('verification-code-field');

// Function to hide an element
function hide(element) {
  element.style.display = 'none';
}

// Function to show an element
function show(element) {
  element.style.display = 'block';
}

// Function to go to the next section
function goToNextSection() {
  hide(forgotPasswordSection);
  show(verificationSection);
}

// Function to send verification code
function sendCode() {
  hide(sendCodeButton);
  show(verificationCodeField);
  show(continueButton);
}

// Function to update password
function updatePassword() {
  hide(verificationSection);
  show(updatePasswordSection);
}

function redirectToLoginPage() {
    window.location.href = "login.html"; // Replace "login.html" with the URL of your login page
  }
  
  document.getElementById("update-password-button").addEventListener("click", redirectToLoginPage);
  

// Event listener for next button
nextButton.addEventListener('click', goToNextSection);

// Event listener for send code button
sendCodeButton.addEventListener('click', sendCode);

// Event listener for continue button
continueButton.addEventListener('click', updatePassword);

  });