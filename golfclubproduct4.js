document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations and interactivity for product details
    animateProductDetails();

    // Setup functionality for the "Add to Bag" button
    setupAddToBagButton();

    // Initialize tab navigation for Product Details, Shipping, and Reviews
    setupTabNavigation();

    // Setup custom product options like Hand, Loft, Lie, and Pure Service
    setupCustomProductOptions();
});

// Function to animate product details for a more engaging presentation
function animateProductDetails() {
    const details = document.querySelector('.product-details');
    const image = document.querySelector('.product-image img');
    
    // Apply fade-in effect to product details and scale-up effect to product image
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
        // Provide feedback when a product is added to the bag
        alert('Elite Gold Series added to your bag!');

        // Enhance user feedback with visual cues on the button
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

            // Switch active class among tabs and dynamically load content for the selected tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Load the content for the selected tab dynamically
        });
    });
}

// Function to setup custom product options such as Hand, Loft, Lie, and Pure Service
function setupCustomProductOptions() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            // Update product based on the selected customization options
            console.log(`${select.value} selected for ${select.name}`);

            // Update product preview or other elements based on selection
        });
    });
}