// Importing necessary libraries
import { gsap } from 'gsap';
import Rellax from 'rellax';
import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP animations for product details and images
    initGSAPAnimations();

    // Apply parallax effects to the product image using Rellax
    initParallaxEffects();

    // Initialize ScrollReveal for revealing elements on scroll
    initScrollRevealAnimations();

    // Add to Bag button functionality
    addToBagFunctionality();
});

// GSAP animations for product details and images
function initGSAPAnimations() {
    // Fade-in effect for product details
    gsap.from('.product-details', { duration: 1, opacity: 0, y: 50 });

    // Enhancement: Slide-in effect for product image from the right
    gsap.from('.product-image img', { duration: 1.5, opacity: 0, x: 100 });
}

// Parallax effect for product images
function initParallaxEffects() {
    // Initialize Rellax on the product image for parallax scrolling
    const rellax = new Rellax('.product-image img', {
        speed: -2,
        center: false,
    });

    // Enhancement: Ensure parallax effect is responsive to window resizing
    window.addEventListener('resize', () => {
        rellax.refresh();
    });
}

// ScrollReveal for content sections
function initScrollRevealAnimations() {
    // Reveal product details and image on scroll
    ScrollReveal().reveal('.product-details, .product-image', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
    });

    // Enhancement: Reveal tabs with a staggered effect
    ScrollReveal().reveal('.tabs a', {
        delay: 500,
        interval: 200,
        scale: 0.85,
    });
}

// Functionality for Add to Bag button
function addToBagFunctionality() {
    const addToBagButton = document.querySelector('.add-to-bag');
    addToBagButton.addEventListener('click', () => {
        // Enhancement: Provide visual feedback when adding an item to the bag
        gsap.to(addToBagButton, { duration: 0.2, opacity: 0.7, yoyo: true, repeat: 1 });

        // Simulate adding item to the bag (could be extended to update a cart icon or modal)
        console.log('Item added to bag');
    });
}
