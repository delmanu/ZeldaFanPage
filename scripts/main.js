function openModal(gameName, platform, imageSrc, description) {
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCover = document.getElementById('modalCover');
    const modalBanner = document.getElementById('modalBanner');
    const modalPlatformText = document.getElementById('modalPlatformText');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = gameName;
    modalCover.src = imageSrc;
    modalBanner.src = imageSrc;
    modalPlatformText.textContent = platform;
    modalDescription.textContent = description;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (!event || event.target.id === 'gameModal') {
        const modal = document.getElementById('gameModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});