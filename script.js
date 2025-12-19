const imagenes = ['imagen2.png', 'imagen3.png', 'imagen4.png'];
const frasesSplash = ["¡Eres mi diamante!", "¡Jugador 1 + Jugador 2!", "¡Mi bioma favorito!", "¡Crafteando recuerdos!"];
let indiceActual = 0;
let tiempoInactivo;

// GESTIÓN DE MUERTE POR INACTIVIDAD
function resetearInactividad() {
    clearTimeout(tiempoInactivo);
    tiempoInactivo = setTimeout(morir, 30000); // 30 segundos
}

function morir() {
    document.getElementById('game-over-screen').style.display = 'flex';
}

function renacer() {
    document.getElementById('game-over-screen').style.display = 'none';
    resetearInactividad();
}

// GESTIÓN DE FONDOS
function cambiarFondo() {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const splash = document.getElementById('splash');
    const nuevaRuta = imagenes[indiceActual] + "?v=" + new Date().getTime();

    bg1.style.backgroundImage = `url('${nuevaRuta}')`;
    if(splash) splash.innerText = frasesSplash[Math.floor(Math.random() * frasesSplash.length)];
    indiceActual = (indiceActual + 1) % imagenes.length;
}

// INICIO DEL SITIO
window.onload = function() {
    // 1. Carga inicial de fondo
    document.getElementById('bg-1').style.backgroundImage = `url('${imagenes[0]}')`;
    setInterval(cambiarFondo, 12000);

    // 2. Control de inactividad
    window.onmousemove = resetearInactividad;
    window.onclick = resetearInactividad;
    resetearInactividad();

    // 3. Animación de pantalla de carga
    let progreso = 0;
    const loadFill = document.getElementById('load-fill');
    const subtext = document.getElementById('loading-subtext');

    const intervaloCarga = setInterval(() => {
        progreso += Math.random() * 15;
        if (progreso > 100) progreso = 100;
        loadFill.style.width = progreso + "%";

        if (progreso >= 40) subtext.innerText = "Generando estructuras de amor...";
        if (progreso >= 80) subtext.innerText = "Colocando bloques de felicidad...";

        if (progreso === 100) {
            clearInterval(intervaloCarga);
            setTimeout(() => {
                document.getElementById('loading-screen').style.opacity = "0";
                setTimeout(() => {
                    document.getElementById('loading-screen').style.display = "none";
                    iniciarChat();
                }, 800);
            }, 500);
        }
    }, 300);
};

// CHAT SECUENCIAL
function iniciarChat() {
    const chatBox = document.getElementById('chat-box');
    const mensajes = [
        { t: "Jesu se ha unido al mundo", c: "" },
        { t: "Jesu ha obtenido el logro: <span style='color:#55FF55'>Visitar minecraft de Ane</span>", c: "" },
        { t: "Se ha guardado la partida con éxito!", c: "chat-system" }
    ];

    mensajes.forEach((m, i) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'chat-line ' + m.c;
            div.innerHTML = m.t;
            chatBox.appendChild(div);
        }, (i + 1) * 3000);
    });
}

// FUNCIONES DE INTERFAZ
function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    if(tipo === 'logro') texto.innerHTML = "<h2>¡Logro Obtenido!</h2><p>Has ganado mi corazón.</p>";
    else if (tipo === 'carta') texto.innerHTML = "<h2>Libro y Pluma</h2><p>Te amo desde el 30/03/2023.</p>";
    else if (tipo === 'craft') texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Resultado: Un amor infinito. ❤️</p>";
}

function cerrar() { document.getElementById('overlay').style.display = 'none'; }
