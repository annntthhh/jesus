const imagenes = ['imagen2.png', 'imagen3.png'];
const frasesSplash = ["¡Eres mi diamante!", "¡Jugador 1 + Jugador 2!", "¡Mi bioma favorito!", "¡Crafteando recuerdos!", "¡Mucho amor!"];
let indiceActual = 0;
let capaActiva = 1;
let tiempoInactivo;

// MENSAJE SECRETO RELOJ
function mensajeSecretoReloj() {
    const ahora = new Date();
    const hora = ahora.getHours();
    let msg = "";
    if (hora >= 6 && hora < 18) {
        msg = "<span style='color:#FFFF55'>Ane dice: Que tengas un día tan brillante como tú.</span>";
    } else {
        msg = "<span style='color:#AAFFFF'>Ane dice: Sueña con los angelitos (o conmigo).</span>";
    }
    enviarMensajeChat(msg);
}

// LLUVIA DE CORAZONES
function lluviaCorazonesMasiva() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            spawnHeart(x, y);
        }, i * 50);
    }
    enviarMensajeChat("<span style='color:#FF5555'>¡Has recibido mucho amor de Ane!</span>");
}

function spawnHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    const moveX = (Math.random() - 0.5) * 400;
    const moveY = (Math.random() - 0.5) * 400 - 100;
    heart.style.setProperty('--x', `${moveX}px`);
    heart.style.setProperty('--y', `${moveY}px`);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}

// LLUVIA CLIMÁTICA
function toggleRain(show) {
    const container = document.getElementById('rain-container');
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

// CONSOLA DE COMANDOS
function abrirConsola() { 
    document.getElementById('console-overlay').style.display = 'flex'; 
    document.getElementById('command-input').focus(); 
}
function cerrarConsola() { 
    document.getElementById('console-overlay').style.display = 'none'; 
    document.getElementById('command-input').value = ''; 
}

function ejecutarComando() {
    const input = document.getElementById('command-input');
    const cmd = input.value.toLowerCase().trim();
    cerrarConsola();

    switch(cmd) {
        case '/amor':
            lluviaCorazonesMasiva();
            break;
        case '/ane':
            const gMsg = document.getElementById('giant-msg');
            gMsg.style.display = 'block';
            setTimeout(() => gMsg.style.display = 'none', 3000);
            break;
        case '/clima soleado':
            toggleRain(false);
            enviarMensajeChat("<span style='color:#55FF55'>Ane ha despejado el cielo para Jesu</span>");
            break;
        case '/tp ane':
            enviarMensajeChat("<span style='color:#AAFFFF'>Teletransportando a Jesu al lado de Ane... Destino: El lugar más feliz del mundo</span>");
            break;
        case '/spawn corazón':
            const gHeart = document.getElementById('giant-heart');
            gHeart.style.display = 'block';
            setTimeout(() => gHeart.style.display = 'none', 1000);
            break;
        case '/effect give jesu night_vision':
            enviarMensajeChat("<span style='color:#AA55FF'>Efecto aplicado: Ahora puedes ver lo mucho que te quiero, incluso en la oscuridad</span>");
            break;
        case '/speed 255':
            enviarMensajeChat("<span style='color:#55FFFF'>Velocidad máxima: ¡Corriendo hacia nuestro futuro juntos!</span>");
            break;
        case '/seed':
            enviarMensajeChat("La semilla de este mundo es: <span style='color:#FFFF55'>30032023</span> (El día que todo empezó)");
            break;
        case '/give @p diamond_ring 1':
            enviarMensajeChat("¡Has recibido <span style='color:#55FFFF'>[Anillo de Diamante]</span> de parte de Ane!");
            break;
        case '/weather clear':
            toggleRain(false);
            enviarMensajeChat("<span style='color:#55FF55'>Ane ha quitado las nubes para que Jesu vea el sol</span>");
            break;
        case '/help':
            enviarMensajeChat("<span style='color:#FFFF55'>¿Necesitas ayuda? Solo llama a Ane, ella siempre está para ti</span>");
            break;
        default:
            enviarMensajeChat("<span style='color:#FF5555'>Comando desconocido. Escribe /help para ver la lista.</span>");
    }
}

// FUNCIONES DE INTERFAZ Y CHAT
function enviarMensajeChat(txt) {
    const chat = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.className = 'chat-line';
    div.innerHTML = txt;
    chat.appendChild(div);
    if (chat.children.length > 8) chat.removeChild(chat.firstChild);
}

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
    if (!e.target.closest('.poppy-item') && !e.target.closest('#command-trigger') && !e.target.closest('.console-box')) spawnHeart(e.clientX, e.clientY);
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
