const mensajes = [
    "¡Eres mi diamante!",
    "¡Cuidado con los Creepers!",
    "Juntos hasta el Nether",
    "¡Mi bioma favorito eres tú!",
    "Crafting amor desde 2024"
];

// Función para elegir un mensaje al azar
window.onload = function() {
    const splash = document.getElementById('splash');
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    splash.innerText = mensajeAleatorio;
};
