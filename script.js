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


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav"); // Select the navbar
    const images = document.querySelectorAll("img"); // Select all images

    images.forEach((image) => {
        image.addEventListener("click", function () {
            nav.style.display = "none"; // Hide navbar when image is clicked

            // Create an overlay to show the image in full view
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.background = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "1000";

            // Clone the clicked image and make it large
            const imgClone = image.cloneNode();
            imgClone.style.maxWidth = "90vw";
            imgClone.style.maxHeight = "90vh";
            imgClone.style.border = "5px solid white";
            imgClone.style.borderRadius = "10px";

            // Append image to overlay
            overlay.appendChild(imgClone);
            document.body.appendChild(overlay);

            // When overlay is clicked, remove it and show the navbar again
            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
                nav.style.display = "flex"; // Show navbar again
            });

            // When `Esc` is pressed, remove overlay and show navbar
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    if (document.body.contains(overlay)) {
                        document.body.removeChild(overlay);
                        nav.style.display = "flex"; // Show navbar again
                    }
                }
            });
        });
    });
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


