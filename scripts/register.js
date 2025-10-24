// Cargar el formulario de registro cuando se abre el modal
async function openRegisterModal(event) {
    if (event) event.preventDefault();

    const modal = document.getElementById('registerModal');
    const modalContent = modal.querySelector('.modal-content-wrapper');

    // Si el contenido ya está cargado, solo mostrar el modal
    if (modalContent.innerHTML.trim() !== '') {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Cargar el contenido del formulario
    try {
        const response = await fetch('register-form.html');
        const html = await response.text();
        modalContent.innerHTML = html;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error al cargar el formulario:', error);
        alert('Error al cargar el formulario de registro');
    }
}

function closeRegisterModal(event) {
    if (!event || event.target.id === 'registerModal') {
        const modal = document.getElementById('registerModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Validar términos
    if (!terms) {
        alert('Debes aceptar los términos y condiciones');
        return;
    }

    // Aquí puedes agregar la lógica de registro
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('¡Registro exitoso!\n\nUsuario: ' + username + '\nEmail: ' + email);
    closeRegisterModal();

    // Limpiar campos
    document.getElementById('username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('terms').checked = false;
}

// Función para cambiar al modal de login
function switchToLogin() {
    closeRegisterModal();
    setTimeout(() => {
        openLoginModal();
    }, 300);
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeRegisterModal();
    }
});