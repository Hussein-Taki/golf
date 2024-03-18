// Purpose: This script is used to display the popup and cookie banner after respective delays, and to handle the form submission and validation for the popup.
 
document.addEventListener('DOMContentLoaded', function() {
    // Display the popup and cookie banner after respective delays
    setTimeout(function() {
        document.getElementById('popup').classList.add('popup-show');
    }, 16000);
 
    setTimeout(function() {
        document.getElementById('cookie').classList.add('cookie-show');
    }, 1500);
 
    // Event listener for the cookie banner "Got it!" button
    document.getElementById('cookieButton').addEventListener('click', function() {
        document.getElementById('cookie').classList.remove('cookie-show');
    });
 
    // Event listener for the popup "Join Now" button
    document.getElementById('joButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        var emailInput = document.getElementById('email');
        var emailValue = emailInput.value.trim(); // Remove whitespace from both ends of the string
 
        if(emailInput.checkValidity() && emailValue !== "") {
            // Email is valid and not just whitespace, thank the user and close the popup
            alert('Thank you for joining the waitlist!');
            document.getElementById('popup').classList.remove('popup-show');
        } else {
            // The browser will display a validation message if the input is empty, invalid, or just whitespace
            event.preventDefault(); // Prevent form submission
            // Here, you could add a custom validation message
            emailInput.setCustomValidity("Please enter a valid email address.");
            emailInput.reportValidity(); // This will display the custom validation message
            // Reset the custom validity message to ensure the input is re-validated next time
            emailInput.setCustomValidity("");
        }
    });
});
 
document.addEventListener('DOMContentLoaded', function() {
    // Delay the display of the text overlay by 16 seconds
    setTimeout(function() {
        var textOverlay = document.querySelector('.text-overlay');
        textOverlay.style.display = 'block';
    }, 16000); // 16 seconds delay
});
