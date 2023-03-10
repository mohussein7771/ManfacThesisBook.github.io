// Get the form and submit button elements
const form = document.getElementById('personal-info-form');
const submitBtn = document.getElementById('submit-btn');

// Add a submit event listener to the form
form.addEventListener('submit', function(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  
  // Redirect the user to the congratulation page
  window.location.href = 'congratulation.html';
});
