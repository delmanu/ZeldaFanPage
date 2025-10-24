// Array con la información de las imágenes
const galleryImages = [
    { src: 'resources/zelda-videojuego-totk.webp', title: 'Tears of the Kingdom' },
    { src: 'resources/zelda-botw-portada.jpeg', title: 'Breath of the Wild' },
    { src: 'resources/zelda-oft-portada.jpg', title: 'Ocarina of Time' },
    { src: 'resources/zelda-mm-portada.jpg', title: "Majora's Mask" },
    { src: 'resources/zelda-galeria-tp.webp', title: 'Twilight Princess' },
    { src: 'resources/zelda-galeria-ss.webp', title: 'Skyward Sword' },
    { src: 'resources/zelda-galeria-ww.jpg', title: 'Wind Waker' },
    { src: 'resources/zelda-alttp-portada.jpg', title: 'A Link to the Past' },
    { src: 'resources/zelda-galeria-la.jpeg', title: "Link's Awakening" }
];

let currentImageIndex = 0;

// Abrir lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');

    const image = galleryImages[index];

    lightboxImage.src = image.src;
    lightboxCaption.textContent = image.title;
    lightboxCounter.textContent = `${index + 1} / ${galleryImages.length}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navegar entre imágenes
function navigateLightbox(direction) {
    currentImageIndex += direction;

    // Loop: volver al inicio o al final
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');

    const image = galleryImages[currentImageIndex];

    // Animación de transición
    lightboxImage.style.opacity = '0';

    setTimeout(() => {
        lightboxImage.src = image.src;
        lightboxCaption.textContent = image.title;
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
        lightboxImage.style.opacity = '1';
    }, 200);
}

// Navegación con teclado
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');

    if (lightbox.classList.contains('active')) {
        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (event.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    }
});

// Transición suave para la imagen del lightbox
document.addEventListener('DOMContentLoaded', function() {
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.style.transition = 'opacity 0.3s ease';
});