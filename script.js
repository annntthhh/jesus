const imagen = [
    'imagen1.png',
    'imagen2.png',
    'imagen3.png'
];

const mensajes = [
    "¡Eres mi diamante!",
    "¡Jugador 1 + Jugador 2!",
    "¡Desde el 30/03/2023!",
    "¡Mi bioma favorito!",
    "¡Crafteando recuerdos!",
    "¡Nuestra propia aventura!"
];

let indice = 0;

function rotarContenido() {
    const body = document.body;
    const splash = document.getElementById('splash');
    
    // 1. Cambiar Imagen con truco para evitar errores de carga
    const version = new Date().getTime();
    const nombreArchivo = imagen[indice] + "?v=" + version;
    body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${nombreArchivo}')`;
    
    // 2. Cambiar Texto Splash al mismo tiempo
    if(splash) {
        splash.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    }
    
    indice = (indice + 1) % imagen.length;
}

window.onload = function() {
    // Iniciar el primer estado
    rotarContenido();
    
    // CAMBIO: Cambia cada 15 segundos (15000ms) para dar tiempo a apreciar la mezcla de 4s
    setInterval(rotarContenido, 15000);
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
        texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Crafteo exitoso: Una vida llena de amor y aventuras. ❤️</p>";
    }
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
