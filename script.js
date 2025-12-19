const mensajes = [
    "¡Eres mi diamante!",
    "¡Jugador 1 + Jugador 2!",
    "¡Desde el 30/03/2023!",
    "¡Mi bioma favorito!",
    "¡Crafteando recuerdos!"
];

window.onload = function() {
    const splash = document.getElementById('splash');
    splash.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
};

function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    
    if(tipo === 'logro') {
        texto.innerHTML = "<h2>¡Logro Obtenido!</h2><p>Has ganado el corazón de la mejor novia del mundo pixelado.</p>";
    } else if (tipo === 'carta') {
        texto.innerHTML = "<h2>Libro y Pluma</h2><p>Gracias por cada aventura, cada risa y cada bloque colocado juntos desde el 30/03/2023. ¡Te amo!</p>";
    } else if (tipo === 'craft') {
        texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Resultado del crafteo: <br> <b>1 Novio Increíble + 1 Novia Feliz = Un amor infinito.</b> ❤️</p>";
    }
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
