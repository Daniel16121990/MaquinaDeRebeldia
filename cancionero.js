// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const mainContent = document.getElementById('mainContent');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('menu-hidden');
  mainContent.classList.toggle('main-content-full');
});

// Song Selection
const songLinks = document.querySelectorAll('.song-list a');
const songTitle = document.getElementById('songTitle');
const songLyrics = document.getElementById('songLyrics');
const audioPlayer = document.getElementById('audioPlayer');

const songs = {
  'misfits': {
    title: 'Misfits',
    lyrics: `Lo que sea podrá ella ser
donde sea podrá venir
lo que quiera podra ella hacer
mientras sea solo mia

y la puerta se abre para volver
o es la forma de escapar

Donde sea alli va a estar
de donde sea te podra ver
mentiras y secretos te rodearan
donde sea cuando sea me llevará

La muerte sube por cada escalon
para darte la rosa que su hijo quemó

<span class="chorus">Mira el cielo tan arriba
solo yo no llegaría
iré hasta el cementerio a excavar sus huesos</span>

<span class="melodia">Melodía</span>

La cara del demonio vi
donde ella ha muerto creo que oi
caigo en mis rodillas por respeto
a las horribles cosas que ella sufrio

La muerte sube por cada escalon
para darte la rosa que su hijo quemó

<span class="chorus">Mira el cielo tan arriba
solo yo no llegaría
iré hasta el cementerio a excavar sus huesos (2)</span>

hoooo`,
    audio: './canciones/Loreena McKennitt - The Visit - 05.mp3'
  },
  'con-dinero-baila-el-perro': {
    title: 'Nalgas - Con dinero baila el perro',
    lyrics: `Mi país se hunde, nadie hace nada
La gente se divide, ¡qué pendejada!
Desde Aragón hasta Ayotzinapa
<span class="voz-2">Con dinero baila el perro, nadie se escapa</span>

Bienvenido al lugar donde te quieren callar
Si no dices lo que esperan <span class="todos">los que mueven el plan</span>
Si no tranza, no avanza, <span class="todos">otro pasado de lanza</span>
Por andar de muertos de hambre, <span class="todos">perdieron la balanza</span>

<span class="todos">¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!</span>

<span class="todos">Ya me cansé, ya me cansé,</span> se me cansó el caballo
Nos mienten en la tele, también en la radio
Cuerpos quemados, fosas en trincheras
<span class="voz-2">¿Qué pasó, mi chingón, empezaste una guerra?</span>

No es tan cagado mirar como nos quieren chorear
Da lo mismo presidente <span class="todos">o policía auxiliar</span>
Entre tanta basura, <span class="todos">secuestro o tortura</span>
Los medios se rindieron, <span class="todos">les pasamos factura</span>

<span class="todos">¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!</span>
<span class="todos">¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!</span>

<span class="guitar-solo">Solo de guitarra</span>

Aquí no hay terrorismo, aquí no hay vandalismo
Solo estamos hartos de vivir siempre lo mismo
Tanta violencia, mucha pobreza
Ya nos cansamos de la delincuencia
<span class="todos">Devaluación, más corrupción</span>
¡Cuánta impotencia, qué desesperación!
No hay acarreados, no los van a parar
<span class="todos">Aunque se esfuerzen no la van a librar</span>

<span class="todos">¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!</span>
<span class="todos">¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!</span>

<span class="melodia">Melodía (4)</span>`,
    audio: 'codigo-libre.mp3'
  },
  'ha-llegado-el-momento': {
    title: 'Eskorbuto - Ha llegado el momento',
    lyrics: `<span class="melodia">-------Melodía (2)-------</span>

<span class="todos">oaeo (3)</span>

Puede ser el americano,
<span class="voz-2">o quizás el japonés</span>
Puede ser el ruso,
<span class="voz-2">o el español tal vez</span>

Ha llegado el momento, de la destrucción

<span class="melodia">-------Melodía (1)-------</span>

<span class="todos">oaeo (3)</span>

Pueden ser los chinos
<span class="voz-2">y los ingleses también</span>
Pueden ser los negros,
<span class="voz-2">vete tu a saber</span>

Ha llegado el momento, de la destrucción

<span class="melodia">-------Melodía (4)-------</span>

Puede ser cualquiera,
<span class="voz-2">cualquiera puede ser</span>
Pueden ser ellos,
<span class="voz-2">ellos también</span>

Ha llegado el momento, de la destrucción`,
    audio: 'firewall.mp3'
  },
  'el-espiritu-del-oi': {
    title: 'Non Servium - El Espiritu del Oi',
    lyrics: `
    <span class="melodia">-------Melodia (2)-------</span>
    <span class="melodia">-------Melodia (2)-------</span>
    hoy!!!
    <span class="melodia">-------Melodia (2)-------</span>
    
    Pasan los años y no puedes negar
    Que todo cambie tu mentalidad
    Ritmo de vida y forma de pensar
    Cosas distintas que no puedes mezclar
    
    Tu cara muestra tu desolación
    Y tu mirada me transmite dolor
    No eres el mismo que fuiste ayer
    Te han cortado las alas
    
    Abre la puerta escapate
    Seguimos en la brecha
    Cagate en dios bebete tres
    Hazte otra vez la cresta
    Romperemos los esquemas
    De esta puta sociedad
    Es el espiritu del oi!
    Con nosotros no podrán
    
    -------- melodía(2)-------
    
    Pero ahora tienes una vida mejor
    Puedes comprarte un televisor
    Salir por ahí sin que te miren mal
    Porque eres uno de ellos
    
    Este es el precio que hay que pagar
    Para integrarse en su sociedad
    Yo me pregunto dónde está
    Dónde está tu felicidad
    
    Abre la puerta escapate
    Seguimos en la brecha
    Cagate en dios bebete tres
    Hazte otra vez la cresta
    Romperemos los esquemas
    De esta puta sociedad
    Es el espiritu del oi!
    Con nosotros no podrán
    
    Melodía (2) intro
    Melodia (2) intro2
    Melodía (2) riff
    Melodia (2) mosh
    
    Abre la puerta escapate
    Seguimos en la brecha
    Cagate en dios bebete tres
    Hazte otra vez la cresta
    Romperemos los esquemas
    De esta puta sociedad
    Es el espiritu del oi!
    Con nosotros no podrán
    
    Abre la puerta escapate
    Seguimos en la brecha
    Cagate en dios bebete tres
    Hazte otra vez la cresta
    Romperemos los esquemas
    De esta puta sociedad
    Es el espiritu del oi!
    Con nosotros no podrán`,
    audio: 'anonymous.mp3'
  },
  'bits-de-libertad': {
    title: 'Bits de Libertad',
    lyrics: `Unos y ceros, lenguaje universal
En cada bit transmitido, un ideal
<span class="chorus">Bits de libertad, fluyen sin cesar
En la red neuronal, de nuestro hogar digital</span>

Encriptamos nuestros sueños, en bloques de información
Descentralizamos el poder, blockchain revolución
<span class="chorus">Bits de libertad, no pueden ser detenidos
En cada nodo de la red, están distribuidos</span>

<span class="guitar-solo">Solo de guitarra</span>

Torrents de conocimiento, inundan la red
P2P es nuestro mantra, compartir nuestra sed
<span class="chorus">Bits de libertad, en cada descarga y seed
Construimos juntos, una nueva realidad</span>

El futuro es de código abierto, sin restricción
Máquina de Rebeldía, canta esta canción
<span class="chorus">Bits de libertad, son nuestra munición
En la guerra digital, por la liberación</span>`,
    audio: 'bits-de-libertad.mp3'
  }
};

songLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const songId = link.getAttribute('data-song');
    const song = songs[songId];
    
    // Remove active class from all links
    songLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');
    
    songTitle.textContent = song.title;
    songLyrics.innerHTML = song.lyrics;
    audioPlayer.src = song.audio;
    // audioPlayer.play(); //este era para que cuando se seleccione se reproducia automaticamente
    
    // Close menu on mobile
    if (window.innerWidth <= 768) {
      menu.classList.add('menu-hidden');
      mainContent.classList.add('main-content-full');
    }
  });
});

// Audio Player Controls
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶';
  }
});

prevBtn.addEventListener('click', () => {
  audioPlayer.currentTime -= 5;
});

nextBtn.addEventListener('click', () => {
  audioPlayer.currentTime += 5;
});

progressBar.addEventListener('click', (e) => {
  const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
  const clickPercentage = clickPosition / progressBar.offsetWidth;
  audioPlayer.currentTime = clickPercentage * audioPlayer.duration;
});

audioPlayer.addEventListener('timeupdate', () => {
  const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.style.width = `${percentage}%`;
  currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audioPlayer.duration);
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Matrix Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]|;:,.<>?';
const fontSize = 10;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Resize event
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});