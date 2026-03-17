// Gallery lightbox functionality
let currentImageIndex = 0;
let currentGallery = [];

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');

// Add click event to each image
galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        const gallery = this.getAttribute('data-lightbox');
        currentGallery = Array.from(document.querySelectorAll(`[data-lightbox="${gallery}"]`));
        currentImageIndex = currentGallery.indexOf(this);
        openLightbox(this.src);
    });

    // Add cursor pointer to show images are clickable
    img.style.cursor = 'pointer';
});

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    const nextImg = currentGallery[currentImageIndex];
    document.getElementById('lightbox-img').src = nextImg.src;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    const prevImg = currentGallery[currentImageIndex];
    document.getElementById('lightbox-img').src = prevImg.src;
}

// Close lightbox on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});
