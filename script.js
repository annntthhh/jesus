const imagenes = ['imagen2.png', 'imagen3.png', 'imagen4.png'];
const frasesSplash = ["¡Eres mi diamante!", "¡Jugador 1 + Jugador 2!", "¡Mi bioma favorito!", "¡Crafteando recuerdos!"];
let indiceActual = 0;
let capaActiva = 1;
let tiempoInactivo;

// GESTIÓN DEL RELOJ (IDEA A)
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const icono = document.getElementById('clock-icon');
    const texto = document.getElementById('clock-time');

    texto.innerText = `${horas}:${minutos}`;
    // Si es entre las 6am y 6pm es día, si no noche
    icono.innerText = (horas >= 6 && horas < 18) ? "☀️" : "🌙";
}

// TRANSICIÓN SUAVE DE FONDOS
function cambiarFondo() {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const splash = document.getElementById('splash');
    const nuevaRuta = imagenes[indiceActual] + "?v=" + new Date().getTime();

    if (capaActiva === 1) {
        bg2.style.backgroundImage = `url('${nuevaRuta}')`;
        bg2.style.opacity = "1";
        bg1.style.opacity = "0";
        capaActiva = 2;
    } else {
        bg1.style.backgroundImage = `url('${nuevaRuta}')`;
        bg1.style.opacity = "1";
        bg2.style.opacity = "0";
        capaActiva = 1;
    }

    if(splash) splash.innerText = frasesSplash[Math.floor(Math.random() * frasesSplash.length)];
    indiceActual = (indiceActual + 1) % imagenes.length;
}

// MUERTE E INACTIVIDAD
function morir() { document.getElementById('game-over-screen').style.display = 'flex'; }
function renacer() { document.getElementById('game-over-screen').style.display = 'none'; resetearInactividad(); }
function resetearInactividad() { clearTimeout(tiempoInactivo); tiempoInactivo = setTimeout(morir, 30000); }

window.onload = function() {
    // Inicializar reloj y fondos
    actualizarReloj();
    setInterval(actualizarReloj, 10000);
    document.getElementById('bg-1').style.backgroundImage = `url('${imagenes[0]}')`;
    setInterval(cambiarFondo, 10000);

    window.onmousemove = resetearInactividad;
    window.onclick = resetearInactividad;
    resetearInactividad();

    // Pantalla de carga
    let progreso = 0;
    const intervalCarga = setInterval(() => {
        progreso += 10;
        document.getElementById('load-fill').style.width = progreso + "%";
        if(progreso >= 100) {
            clearInterval(intervalCarga);
            setTimeout(() => {
                document.getElementById('loading-screen').style.opacity = "0";
                setTimeout(() => { document.getElementById('loading-screen').style.display = "none"; iniciarChat(); }, 800);
            }, 500);
        }
    }, 200);
};

function iniciarChat() {
    const chat = document.getElementById('chat-box');
    const msgs = [
        {t: "Jesu se ha unido al mundo", c: ""},
        {t: "Jesu ha obtenido el logro: <span style='color:#55FF55'>Visitar minecraft de Ane</span>", c: ""},
        {t: "Se ha guardado la partida con éxito!", c: "chat-system"}
    ];
    msgs.forEach((m, i) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'chat-line ' + m.c;
            div.innerHTML = m.t;
            chat.appendChild(div);
        }, (i + 1) * 3000);
    });
}

function mostrarSorpresa(tipo) {
    const overlay = document.getElementById('overlay');
    const texto = document.getElementById('modal-text');
    overlay.style.display = 'flex';
    if(tipo === 'logro') texto.innerHTML = "<h2>¡Logro Obtenido!</h2><p>Has ganado mi corazón.</p>";
    else if (tipo === 'carta') texto.innerHTML = "<h2>Libro y Pluma</h2><p>Te amo desde el 30/03/2023.</p>";
    else if (tipo === 'craft') texto.innerHTML = "<h2>Mesa de Trabajo</h2><p>Resultado: Un amor infinito. ❤️</p>";
}
function cerrar() { document.getElementById('overlay').style.display = 'none'; }
