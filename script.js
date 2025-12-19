const imagenes = [
    'imagen1.png',
    'imagen2.png',
    'imagen3.png',
    'imagen4.png',
    'imagen5.png'
];

const mensajes = [
    "¡Eres mi diamante!",
    "¡Jugador 1 + Jugador 2!",
    "¡Desde el 30/03/2023!",
    "¡Mi bioma favorito!",
    "¡Crafteando recuerdos!"
];

let indiceActual = 0;
let capaActiva = 1;

function cambiarFondo() {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const splash = document.getElementById('splash');
    
    // Generar ruta con cache-buster para evitar el error 404 de archivos viejos
    const nuevaRuta = imagenes[indiceActual] + "?v=" + new Date().getTime();
    
    if (capaActiva === 1) {
        bg2.style.backgroundImage = `url('${nuevaRuta}')`;
        bg2.style.opacity = 1;
        bg1.style.opacity = 0;
        capaActiva = 2;
    } else {
        bg1.style.backgroundImage = `url('${nuevaRuta}')`;
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
        capaActiva = 1;
    }

    if(splash) {
        splash.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    }

    indiceActual = (indiceActual + 1) % imagenes.length;
}

window.onload = function() {
    // Inicializar el primer fondo
    const bg1 = document.getElementById('bg-1');
    bg1.style.backgroundImage = `url('${imagenes[0]}?v=${new Date().getTime()}')`;
    
    // Cambiar cada 12 segundos para dar tiempo a la transición de 4s
    setInterval(cambiarFondo, 12000);
};

function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    if(tipo === 'logro') {
        texto.innerHTML = "<h2>¡Logro Obtenido!</h2><p>Has ganado el corazón de la mejor novia.</p>";
    } else if (tipo === 'carta') {
        texto.innerHTML = "<h2>Libro y Pluma</h2><p>Gracias por cada aventura juntos. ¡Te amo!</p>";
    } else if (tipo === 'craft') {
        texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Resultado: Un amor infinito. ❤️</p>";
    }
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
