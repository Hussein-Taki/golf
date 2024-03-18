document.addEventListener('DOMContentLoaded', () => {
    // Initialize product detail animations
    animateProductDetails();

    // Setup tab navigation for Product Details, Shipping, and Reviews
    setupTabNavigation();

    // Add functionality to the "Add to Bag" button
    setupAddToBagButton();
});

// Animate product details for enhanced user engagement
function animateProductDetails() {
    const details = document.querySelector('.product-details');
    const image = document.querySelector('.product-image img');
    
    // Use DOM to apply CSS transitions for a smooth appearance
    details.style.transition = 'opacity 1s ease-in-out';
    details.style.opacity = 1;

    image.style.transition = 'transform 1s ease-in-out';
    image.style.transform = 'scale(1.05)';

    // Enhancement: Reset animation on window resize for responsiveness
    window.addEventListener('resize', () => {
        image.style.transform = 'scale(1)';
    });
}

// Setup interactive tab navigation
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove the 'active' class from all tabs and apply to the clicked tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Enhancement: Load tab content dynamically here
            // This could involve fetching content using BOM methods like fetch() and updating the DOM accordingly
        });
    });
}

// Enhance the "Add to Bag" button with interactive feedback
function setupAddToBagButton() {
    const addButton = document.querySelector('.add-to-bag');
    addButton.addEventListener('click', () => {
        // Use BOM to show a confirmation message
        alert('Prestige Pro Tour Golf Bag added to your bag!');

        // Enhancement: Update shopping bag count (assuming an element for the count exists)
        const bagCount = document.querySelector('.shopping-bag-count');
        let count = parseInt(bagCount.textContent) || 0;
        bagCount.textContent = count + 1;

        // Use DOM to provide visual feedback on the button
        addButton.classList.add('added');
        setTimeout(() => addButton.classList.remove('added'), 1000);
    });
}
