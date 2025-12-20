const imagenes = ['imagen2.png', 'imagen3.png'];
const frasesSplash = ["¡Eres mi diamante!", "¡Jugador 1 + Jugador 2!", "¡Mi bioma favorito!", "¡Crafteando recuerdos!"];
let indiceActual = 0;
let capaActiva = 1;
let tiempoInactivo;

// LLUVIA
function toggleRain(show) {
    const container = document.getElementById('rain-container');
    const chat = document.getElementById('chat-box');
    container.innerHTML = '';
    
    if (show) {
        container.style.display = 'block';
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement('div');
            drop.className = 'drop';
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            drop.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(drop);
        }
        enviarMensajeChat("<span style='color:#AAAAAA'>El clima ha cambiado a lluvia</span>");
    } else {
        container.style.display = 'none';
        enviarMensajeChat("<span style='color:#55FF55'>El sol vuelve a brillar para Jesu</span>");
    }
}

function enviarMensajeChat(txt) {
    const chat = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.className = 'chat-line';
    div.innerHTML = txt;
    chat.appendChild(div);
    if (chat.children.length > 8) chat.removeChild(chat.firstChild);
}

// BARRA ROSA
let progresoAmor = 0;
function subirBarraAmor() {
    if (progresoAmor < 100) {
        progresoAmor += 1;
        document.getElementById('love-fill').style.width = progresoAmor + "%";
    } else {
        progresoAmor = 0;
    }
}

document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200 - 50;
        heart.style.setProperty('--x', `${moveX}px`);
        heart.style.setProperty('--y', `${moveY}px`);
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
});

function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock-time').innerText = `${horas}:${minutos}`;
    document.getElementById('clock-icon').innerText = (horas >= 6 && horas < 18) ? "☀️" : "🌙";
}

function cambiarFondo() {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const nuevaRuta = imagenes[indiceActual] + "?v=" + new Date().getTime();
    if (capaActiva === 1) {
        bg2.style.backgroundImage = `url('${nuevaRuta}')`;
        bg2.style.opacity = "1"; bg1.style.opacity = "0";
        capaActiva = 2;
    } else {
        bg1.style.backgroundImage = `url('${nuevaRuta}')`;
        bg1.style.opacity = "1"; bg2.style.opacity = "0";
        capaActiva = 1;
    }
    document.getElementById('splash').innerText = frasesSplash[Math.floor(Math.random() * frasesSplash.length)];
    indiceActual = (indiceActual + 1) % imagenes.length;
}

function morir() { document.getElementById('game-over-screen').style.display = 'flex'; }
function renacer() { document.getElementById('game-over-screen').style.display = 'none'; resetearInactividad(); }
function resetearInactividad() { clearTimeout(tiempoInactivo); tiempoInactivo = setTimeout(morir, 30000); }

window.onload = function() {
    actualizarReloj(); setInterval(actualizarReloj, 10000);
    document.getElementById('bg-1').style.backgroundImage = `url('${imagenes[0]}')`;
    setInterval(cambiarFondo, 10000);
    setInterval(subirBarraAmor, 2000);

    // CICLO DE CLIMA (Lluvia cada 1 min aprox, dura 15 seg)
    setInterval(() => {
        toggleRain(true);
        setTimeout(() => toggleRain(false), 15000);
    }, 60000);

    window.onmousemove = resetearInactividad;
    window.onclick = resetearInactividad;
    resetearInactividad();

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
    enviarMensajeChat("Jesu se ha unido al mundo");
    enviarMensajeChat("Jesu ha obtenido el logro: <span style='color:#55FF55'>Visitar minecraft de Ane</span>");
    setTimeout(() => enviarMensajeChat("<span class='chat-system'>Se ha guardado la partida con éxito!</span>"), 3000);
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
