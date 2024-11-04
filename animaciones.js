<script>
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    // Función para mostrar/ocultar el menú en dispositivos móviles
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
</script>

document.body.addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    video.play().catch(function(error) {
        console.log('Error al reproducir video:', error);
    });
});

document.querySelectorAll('.menu-episodios a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-episodios').style.display = 'none'; // Oculta el menú
    });
});
// Función para alternar el menú en móvil
function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Función para cerrar el menú al hacer clic en un enlace
function closeMenu() {
    document.getElementById("navMenu").classList.remove("show");
}

