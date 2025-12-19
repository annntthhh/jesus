// Lista de tus imágenes subidas a GitHub
const fondos = [
    'imagen1.png',
    'imagen2.png',
    'imagen3.png'
];

const mensajes = [
    "¡Eres mi diamante!",
    "¡Jugador 1 + Jugador 2!",
    "¡Desde el 30/03/2023!",
    "¡Mi bioma favorito!",
    "¡Crafteando recuerdos!"
];

let indiceFondo = 0;

function cambiarFondo() {
    // Aplicamos el fondo con el filtro oscuro
    document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${fondos[indiceFondo]}')`;
    
    // Avanzamos en la lista
    indiceFondo = (indiceFondo + 1) % fondos.length;
}

window.onload = function() {
    // Seleccionar frase aleatoria
    const splash = document.getElementById('splash');
    splash.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    // Iniciar el primer fondo
    cambiarFondo();
    
    // Cambiar fondo cada 6 segundos
    setInterval(cambiarFondo, 6000);
};

function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    
    if(tipo === 'logro') {
        texto.innerHTML = "<h2>¡Logro Obtenido!</h2><p>Has ganado el corazón de la mejor novia del mundo.</p>";
    } else if (tipo === 'carta') {
        texto.innerHTML = "<h2>Libro y Pluma</h2><p>Gracias por cada aventura juntos desde el 30/03/2023. ¡Te amo!</p>";
    } else if (tipo === 'craft') {
        texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Crafteo exitoso: Una vida llena de amor. ❤️</p>";
    }
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
