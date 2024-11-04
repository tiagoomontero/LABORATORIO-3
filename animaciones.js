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


