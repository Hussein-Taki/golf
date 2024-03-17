document.addEventListener('DOMContentLoaded', () => {
    // Initialize product detail animations
    animateProductDetails();

    // Setup functionality for the "Add to Bag" button
    setupAddToBagButton();

    // Initialize tab navigation for Product Details, Shipping, and Reviews
    setupTabNavigation();

    // Setup custom product options
    setupCustomProductOptions();
});

// Function to animate product details for enhanced user engagement
function animateProductDetails() {
    const details = document.querySelector('.product-details');
    const image = document.querySelector('.product-image img');
    
    // Apply a fade-in effect for product details and scale effect for the product image
    details.style.opacity = 0;
    details.style.transition = 'opacity 1.5s ease-in-out';
    details.style.opacity = 1;

    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 1.5s ease-in-out';
    image.style.transform = 'scale(1.05)';
}

// Function to add interactivity to the "Add to Bag" button
function setupAddToBagButton() {
    const addButton = document.querySelector('.add-to-bag');
    addButton.addEventListener('click', () => {
        // Provide visual feedback when a product is added to the bag
        alert('Elite Precision Tour added to your bag!');

        // Enhance the visual feedback for the action
        addButton.classList.add('added');
        setTimeout(() => addButton.classList.remove('added'), 1000);
    });
}

// Function to handle interactive tab navigation
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Switch the active tab and load content accordingly
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Load the content for the selected tab dynamically
        });
    });
}

// Function to setup custom product options like Hand, Loft, Lie, and Pure Service
function setupCustomProductOptions() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            // Update the product based on the selected options
            console.log(`${select.value} selected for ${select.name}`);
        });
    });
}