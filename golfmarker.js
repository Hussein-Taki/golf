document.addEventListener('DOMContentLoaded', () => {
    // Setup functionality for the "Add to Bag" button
    setupAddToBagButton();

    // Initialize tab navigation for Product Details, Shipping, and Reviews
    setupTabNavigation();
});

// Function to add interactivity to the "Add to Bag" button
function setupAddToBagButton() {
    const addButton = document.querySelector('.add-to-bag');
    addButton.addEventListener('click', () => {
        // Provide visual and auditory feedback when a product is added to the bag
        alert('Balmore Ball Marker added to your bag!');

        // Animate the button to indicate action
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
            // This can be achieved by changing the display of content sections or fetching new content via AJAX
        });
    });
}
