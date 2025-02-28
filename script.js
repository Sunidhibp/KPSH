// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});


// Function to show the correct tab content
function showTab(tabId, button) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab and add active class
    document.getElementById(tabId).classList.add('active');
    button.classList.add('active');
}

// Function to open the lightbox with the selected image
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Set the first tabs as active on page load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.tab-button').click();
});


// Lightbox functions
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


