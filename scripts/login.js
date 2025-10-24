// Cargar el formulario de login cuando se abre el modal
async function openLoginModal(event) {
    if (event) event.preventDefault();

    const modal = document.getElementById('loginModal');
    const modalContent = modal.querySelector('.modal-content-wrapper');

    // Si el contenido ya está cargado, solo mostrar el modal
    if (modalContent.innerHTML.trim() !== '') {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Cargar el contenido del formulario
    try {
        const response = await fetch('login-form.html');
        const html = await response.text();
        modalContent.innerHTML = html;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error al cargar el formulario:', error);
        alert('Error al cargar el formulario de inicio de sesión');
    }
}

function closeLoginModal(event) {
    if (!event || event.target.id === 'loginModal') {
        const modal = document.getElementById('loginModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);

    // Ejemplo de validación básica
    if (email && password) {
        alert('¡Inicio de sesión exitoso!\n\nEmail: ' + email);
        closeLoginModal();

        // Limpiar campos
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLoginModal();
    }
});