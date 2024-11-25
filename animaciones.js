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

// Encuentra el cuadro flotante de episodios
const menuEpisodios = document.querySelector('.menu-episodios');

// Encuentra todos los enlaces o elementos de episodio
const episodiosLinks = document.querySelectorAll('.menu-episodios a');

// Cuando se toca un enlace, oculta el cuadro flotante
episodiosLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuEpisodios.style.display = 'none'; // Oculta el cuadro
    });
});
const botonMenu = document.querySelector('.hamburger-menu'); // Ajusta el selector según tu HTML

botonMenu.addEventListener('click', () => {
    menuEpisodios.style.display = 'block'; // Vuelve a mostrar el cuadro
});
// Selecciona el menú de navegación
const menuNavegacion = document.getElementById('menuNavegacion');

// Selecciona todos los enlaces dentro del menú de navegación
const enlacesMenu = document.querySelectorAll('#menuNavegacion a');

// Oculta el menú cuando se hace clic en un enlace
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuNavegacion.classList.add('hidden'); // Oculta el menú al añadir la clase
    });
});

// Opción para mostrar el menú nuevamente si necesitas un botón (por ejemplo, un botón hamburguesa)
const botonMenu = document.querySelector('.hamburger-menu');
if (botonMenu) {
    botonMenu.addEventListener('click', () => {
        menuNavegacion.classList.remove('hidden'); // Muestra el menú al quitar la clase
    });
}
// Selección de elementos
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

// Evento para abrir/cerrar el menú
hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('open'); // Alterna la clase "open" para mostrar/ocultar
});

// Cierra el menú cuando se selecciona un enlace
navList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navList.classList.remove('open'); // Oculta el menú después de hacer clic
    }
});







document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburgerMenu");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});
