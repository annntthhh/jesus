const imagenes = ['imagen2.png', 'imagen3.png'];
const mensajes = ["¡Eres mi diamante!", "¡Jugador 1 + Jugador 2!", "¡Mi bioma favorito!", "¡Crafteando recuerdos!"];

let indiceActual = 0;
let capaActiva = 1;

function cambiarFondo() {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const splash = document.getElementById('splash');
    const nuevaRuta = imagenes[indiceActual] + "?v=" + new Date().getTime();
    
    if (capaActiva === 1) {
        bg2.style.backgroundImage = `url('${nuevaRuta}')`;
        bg2.style.opacity = 1; bg1.style.opacity = 0;
        capaActiva = 2;
    } else {
        bg1.style.backgroundImage = `url('${nuevaRuta}')`;
        bg1.style.opacity = 1; bg2.style.opacity = 0;
        capaActiva = 1;
    }

    if(splash) {
        splash.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    }
    indiceActual = (indiceActual + 1) % imagenes.length;
}

function agregarMensajeChat(texto, clase) {
    const chatBox = document.getElementById('chat-box');
    const linea = document.createElement('div');
    linea.className = 'chat-line ' + clase;
    linea.innerHTML = texto;
    chatBox.appendChild(linea);
}

window.onload = function() {
    // 1. Iniciar fondos
    const bg1 = document.getElementById('bg-1');
    bg1.style.backgroundImage = `url('${imagenes[0]}?v=${new Date().getTime()}')`;
    setInterval(cambiarFondo, 12000);

    // 2. Lógica de Pantalla de Carga
    const loadFill = document.getElementById('load-fill');
    const loadingScreen = document.getElementById('loading-screen');
    const subtext = document.getElementById('loading-subtext');
    let progreso = 0;

    const intervaloCarga = setInterval(() => {
        progreso += Math.random() * 15;
        if (progreso > 100) progreso = 100;
        loadFill.style.width = progreso + "%";

        if (progreso >= 40) subtext.innerText = "Generando estructuras de amor...";
        if (progreso >= 80) subtext.innerText = "Colocando bloques de felicidad...";

        if (progreso === 100) {
            clearInterval(intervaloCarga);
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    iniciarChat(); // Inicia el chat tras la carga
                }, 800);
            }, 500);
        }
    }, 300);
};

function iniciarChat() {
    setTimeout(() => agregarMensajeChat("Jesu se ha unido al mundo", ""), 1000);
    setTimeout(() => agregarMensajeChat("Jesu ha obtenido el logro: <span>Visitar minecraft de Ane</span>", "chat-achievement"), 4000);
    setTimeout(() => agregarMensajeChat("Se ha guardado la partida con éxito!", "chat-system"), 7000);
}

function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    if(tipo === 'logro') texto.innerHTML = "<h2>¡Logro Obtenido!</h2><p>Has ganado mi corazón.</p>";
    else if (tipo === 'carta') texto.innerHTML = "<h2>Libro y Pluma</h2><p>Te amo desde el 30/03/2023.</p>";
    else if (tipo === 'craft') texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Resultado: Un amor infinito. ❤️</p>";
}

function cerrar() {
    document.getElementById('overlay').style.display = 'none';
}
