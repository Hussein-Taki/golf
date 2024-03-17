document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations for product details and image
    animateProductInfo();

    // Setup functionality for the "Add to Bag" button
    setupAddToBagButton();

    // Initialize tab navigation for Product Details, Shipping, and Reviews
    setupTabNavigation();
});

// Function to animate product details and image for a more engaging user experience
function animateProductInfo() {
    const productDetails = document.querySelector('.product-details');
    const productImage = document.querySelector('.product-image img');
    
    // Fade in the product details and scale up the product image for emphasis
    productDetails.style.opacity = 0;
    productDetails.style.transition = 'opacity 1.5s ease-in-out';
    productDetails.style.opacity = 1;

    productImage.style.transform = 'scale(1)';
    productImage.style.transition = 'transform 1.5s ease-in-out';
    productImage.style.transform = 'scale(1.05)';
}

// Function to add interactivity to the "Add to Bag" button
function setupAddToBagButton() {
    const addButton = document.querySelector('.add-to-bag');
    addButton.addEventListener('click', () => {
        // Provide visual and auditory feedback when a product is added to the bag
        alert('Golf Ball (pack of 3) added to your bag!');

        // Animate the button to indicate action
        addButton.style.backgroundColor = '#ddd';
        setTimeout(() => { addButton.style.backgroundColor = '#f3f3f3'; }, 500);
    });
}

// Function to handle interactive tab navigation
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove 'active' class from all tabs and add to the clicked one
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Optionally, dynamically load content for the clicked tab here
        });
    });
}