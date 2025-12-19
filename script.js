// Lista de imágenes con el nombre que prefieres
const imagen = [
    'imagen.png',
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

let indice = 0;

function rotarImagen() {
    // Usamos la variable 'imagen'
    const rutaImagen = imagen[indice];
    document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${rutaImagen}')`;
    
    indice = (indice + 1) % imagen.length;
}

window.onload = function() {
    // Seleccionar splash aleatorio
    const splash = document.getElementById('splash');
    splash.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    // Cargar la primera imagen de inmediato
    rotarImagen();
    
    // Cambiar cada 6 segundos
    setInterval(rotarImagen, 6000);
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
        texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Resultado: Un amor infinito. ❤️</p>";
    }
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
