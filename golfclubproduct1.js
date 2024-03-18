document.addEventListener('DOMContentLoaded', () => {
    // Initialize product customization options
    setupProductCustomization();

    // Setup functionality for the "Add to Bag" button
    setupAddToBagButton();

    // Initialize tab navigation for Product Details, Shipping, and Reviews
    setupTabNavigation();
});

// Function to handle product customization options
function setupProductCustomization() {
    const customizationOptions = document.querySelectorAll('select');
    customizationOptions.forEach(select => {
        select.addEventListener('change', (e) => {
            // Update product details based on selected customization options
            // This could involve updating the product image, price, or other details dynamically
            console.log(`Option selected: ${e.target.value}`);
        });
    });
}

// Function to add interactivity to the "Add to Bag" button
function setupAddToBagButton() {
    const addButton = document.querySelector('.add-to-bag');
    addButton.addEventListener('click', () => {
        // Provide visual feedback when a product is added to the bag
        alert('Golf master 300 added to your bag!');

        // Optionally, update the shopping bag count or contents here
        // This could involve DOM manipulations to reflect the new item in the shopping bag UI
    });
}





// Function to handle interactive tab navigation
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.tabs a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Identify the target tab's associated content
            const targetContent = document.querySelector(e.target.getAttribute('href'));

            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Remove 'active' class from all tabs and add to the clicked one
            tabs.forEach(t => {
                t.classList.remove('active');
                // Optional: Hide corresponding tab content
            });
            tab.classList.add('active');

            // Show the clicked tab's content
            // Assuming your hrefs are set like #product-details, #shipping, etc.
            document.getElementById(targetContent.id).style.display = 'block';
        });
    });

    // Optionally, automatically click the first tab to make it active on page load
    if (tabs.length > 0) {
        tabs[0].click();
    }
}
