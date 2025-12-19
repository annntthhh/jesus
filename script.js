const mensajes = [
    "¡Eres mi diamante!",
    "¡Cuidado con los Creepers!",
    "Juntos hasta el Nether",
    "¡Mi bioma favorito eres tú!",
    "¡Desde el 30/03/2023!",
    "¡Player 1 & Player 2!",
    "¡El mejor equipo de minería!"
];

window.onload = function() {
    const splash = document.getElementById('splash');
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    splash.innerText = mensajeAleatorio;
};

function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    
    if(tipo === 'logro') {
        texto.innerHTML = "<h2 style='color:#000'>¡Logro Obtenido!</h2><p>Has encontrado el tesoro más valioso: El corazón de tu novia.</p>";
    } else if (tipo === 'carta') {
        texto.innerHTML = "<h2 style='color:#000'>Libro y Pluma</h2><p>Gracias por ser mi compañero de aventuras desde el 30/03/2023. ¡Te amo infinitamente!</p>";
    }
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
