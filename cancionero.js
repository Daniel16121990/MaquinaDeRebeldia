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

<span class="melodia">-------Melodía (2)-------</span>

<span class="todos">oaeo (3)</span>

Pueden ser los chinos
<span class="voz-2">y los ingleses también</span>
Pueden ser los negros,
<span class="voz-2">vete tu a saber</span>

Ha llegado el momento, de la destrucción

<span class="melodia">-------Melodía (2)-------</span>

<span class="todos">oaeo (3)</span>

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
    
Pasan los años y no puedes negar
Que todo cambie tu mentalidad
Ritmo de vida y forma de pensar
Cosas distintas que no puedes mezclar
    
Tu cara muestra tu desolación
Y tu mirada me transmite dolor
No eres el mismo que fuiste ayer
<span class="todos">Te han cortado las alas</span>

<span class="todos">Abre la puerta escapate</span>
Seguimos en la brecha
<span class="todos">Cagate en dios bebete tres</span>
Hazte otra vez la cresta
<span class="todos">Romperemos los esquemas</span>
De esta puta sociedad
<span class="todos">Es el espiritu del oi!</span>
Con nosotros no podrán

<span class="melodia">-------Melodia (2)-------</span>

Pero ahora tienes una vida mejor
Puedes comprarte un televisor
Salir por ahí sin que te miren mal
<span class="todos">Porque eres uno de ellos</span>

Este es el precio que hay que pagar
Para integrarse en su sociedad
Yo me pregunto dónde está
<span class="todos">Dónde está tu felicidad</span>

<span class="todos">Abre la puerta escapate</span>
Seguimos en la brecha
<span class="todos">Cagate en dios bebete tres</span>
Hazte otra vez la cresta
<span class="todos">Romperemos los esquemas</span>
De esta puta sociedad
<span class="todos">Es el espiritu del oi!</span>
Con nosotros no podrán
    
<span class="melodia">Melodía (2) intro</span>
<span class="melodia">Melodia (2) intro2</span>
<span class="melodia">Melodía (2) riff</span>
<span class="melodia">Melodia (2) mosh</span>

<span class="todos">Abre la puerta escapate</span>
<span class="todos">Seguimos en la brecha</span>
<span class="todos">Cagate en dios bebete tres</span>
<span class="todos">Hazte otra vez la cresta</span>
<span class="todos">Romperemos los esquemas</span>
<span class="todos">De esta puta sociedad</span>
<span class="todos">Es el espiritu del oi!</span>
Con nosotros no podrán
    
<span class="todos">Abre la puerta escapate</span>
Seguimos en la brecha
<span class="todos">Cagate en dios bebete tres</span>
Hazte otra vez la cresta
<span class="todos">Romperemos los esquemas</span>
De esta puta sociedad
<span class="todos">Es el espiritu del oi!</span>
Con nosotros no podrán`,
    audio: 'anonymous.mp3'
  },
  'nuestra-lucha': {
    title: 'Non Servium - Nuestra Lucha',
    lyrics: `
Ten muy claro que no cuentas conmigo
Debes saber que eres mi enemigo
<span class="todos">Con nosotros no eres bienvenido</span>
<span class="todos">Ve con ellos, necesitan amigos</span>

Elegiste el camino mas fácil
La postura del sucio cobarde
<span class="todos">Un camino que no respetamos</span>
<span class="todos">Para nosotros solo existen dos lados</span>

LO QUE NO VAMOS A DEJAR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO
<span class="todos">Que os riais de nuestros muertos</span>
<span class="todos">Desprecieis a nuestros presos</span>

LO QUE NO VAMOS A PERMITIR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO
<span class="todos">Que os riais de nuestros muertos</span>
<span class="todos">Desprecieis a nuestros presos</span>

Hace tiempo que juegas a dos bandas
Hace tiempo que no respetas nada
<span class="todos">Hace tiempo que eres un payaso</span>
<span class="todos">Todo esto tienes que pagarlo</span>

Eres una burla a nuestra lucha
Solo eres escoria como ellos
<span class="todos">Se acabaron las contemplaciones</span>
<span class="todos">Se acabó atender a razones</span>

LO QUE NO VAMOS A DEJAR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO
<span class="todos">Que os rias de nuestros muertos</span>
<span class="todos">Desprecieis a nuestros presos</span>

LO QUE NO VAMOS A PERMITIR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO!!
<span class="todos">Que os riais de nuestros muertos</span>
<span class="todos">Desprecieis a nuestros presos</span>

Eres una plaga, una enfermedad
Que hay erradicar como la puta peste
No tienes sentido de la lealtad
Solo estar agusto y desaparecer

<span class="todos">Tragarás, chuparás y te arrastrarás
Como una serpiente es el que más calienta
Llegará el momento en que te quemarás
Ese es el precio de tentar a la suerte

Ahora es tiempo de reacción
Demostrarles que este es nuestro puto infierno
Que no hay lugar para la ambigüedad
Que este es su final</span>

<span class="todos">Odio eterno a la complicidad</span>
Del ambiguo y su juego tan ruín
<span class="todos">Acostumbrados a no retroceder</span>
Que creeis que sereis la excepción
NOOOOOO

<span class="todos">Odio eterno a la complicidad</span>
Del ambiguo y su juego tan ruín
<span class="todos">Acostumbrados a no retroceder</span>
Que creeis que sereis la excepción
NOOOOOO`,
    audio: 'bits-de-libertad.mp3'
  },
  'olor-a-muerte': {
    title: 'El Último Ke Zierre - Olor a Muerte',
    lyrics: `
<span class="guitar-solo">Intro (1)</span>
Te has mirado al espejo con complejo,
¿que es lo que han hecho de ti?.

La justicia no te sirve,
condenado inocente,

y te sientas en un rincón,
abatido por tu depresión,
ellos te llaman,
tu no escuchas,

ya no tienes a quien respetar,
ya no tienes a quien querer,
Solo mentiras,
solo mentirás

<span class="todos">olor a muerte (2)</span>

<span class="guitar-solo">Riff (2)</span>
<span class="guitar-solo">Riff 2 (2)</span>

<span class="todos">Olor muerte (1)</span>
ya no tienes a quien respetar,
ya no tienes a quien querer,
Solo mentiras,
olor a muerte

<span class="guitar-solo">Intro (2)</span>`,
    audio: 'bits-de-libertad.mp3'
  },
  'historia-triste': {
    title: 'Eskorbuto - Historia Triste',
    lyrics: `
<span class="melodia">Melodía (4) intro</span>
Pasan los años
Pasa tu vida
Pasan los meses
Pasan tus días
Pasan las horas
También tus minutos
¡Este puede ser <span class="todos">tu último segundo!</span>

<span class="todos">Uooh</span>, historia triste
<span class="todos">Uooh</span>, historia historica
<span class="todos">Uooh</span>, historia final

<span class="melodia">Melodía (2) intro</span>

Una mañana
Muy temprano
De tus sueños despertarás
No lo sabrás
Este es tu dia
<span class="todos">¡Vas a morir!</span>

<span class="todos">Uooh</span>, historia triste
<span class="todos">Uooh</span>, historia historica
<span class="todos">Uooh</span>, historia final

<span class="guitar-solo">Solo (2)</span>

<span class="todos">Uooh</span>, historia triste
<span class="todos">Uooh</span>, historia historica
<span class="todos">Uooh</span>, historia final

Uooh (4)
¡Historia final!`,
    audio: 'bits-de-libertad.mp3'
  },
  'os-engañan': {
    title: 'Eskorbuto - Os Engañan',
    lyrics: `
<span class="melodia">Intro (2)</span>
Anuncios publicitarios
Que prometen felicidad
De algún producto de moda
Que te hará cambiar

Comprador que entra en la tienda
Al acecho el vendedor
Vendedor que vende producto
Comprador que se vaya a mamar

<span class="guitar-solo">Solo (2)</span>

<span class="todos">Ohh, si, si</span>, os engañan, os engañan así
<span class="todos">Ohh, si, si</span>, os engañan, os engañan así
<span class="todos">Ohh, si, si</span>, os engañan, os engañan así

<span class="melodia">Melodia Intro (2)</span>

Mi vieja me despertó
En la cama estaba yo
Han cambiado la hora
Lo dijo anoche televisión

<span class="melodia">Melodia (2)</span>

<span class="todos">Ohh, si, si</span>, os engañan, os engañan así
<span class="todos">Ohh, si, si</span>, os engañan, os engañan así
<span class="todos">Ohh, si, si</span>, os engañan, os engañan así`,
    audio: 'bits-de-libertad.mp3'
  },
  'corazones-intoxicados': {
    title: 'The Casualties – Corazones Intoxicados',
    lyrics: `
ANTI!

<span class="melodia">Melodia</span>

Estamos embriagados
borrachos y perdidos
Es mejor que estar
sufriendo en la vida

Nosotros contra ellos
asi siempre ha sido
Nosotros contra ellos
asi seguira

<span class="melodia">Melodia</span>

Corazones intoxicados
a ustedes yo saludo
El avismo de la vida
tomando siempre atento

De una copa a otra
me siento muy feliz
Sonido de guitarra
la alarma de la vida

<span class="melodia">Melodia</span>

Anti sistema
Anti gobierno
Anti militar

<span class="melodia">Melodia</span>

La alarma de la vida!`,
    audio: 'bits-de-libertad.mp3'
  },
  'injusticia': {
    title: 'Máquina de Rebeldía - Injusticia',
    lyrics: `
La gente habla, la gente grita
Pero <span class="todos">nadie hace nada</span>

Estamos cansados, estamos artos
De ser <span class="todos">ignorados</span>

El poder corrupto nos controla
Nos manipula <span class="todos">y nos oprime</span>

Pero nosotros no estamos solos
Juntos podemos <span class="todos">hacer un cambio</span>

<span class="melodia">Melodia (4)</span>

Nos uniremos y pelearemos
Hasta que todos <span class="todos">sean libres</span>
Nuestra lucha es justa
<span class="todos">Nada nos detendrá</span>

Nos alzamos y nos revelamos
Contra el sistema y <span class="todos">sus problemas</span>
Nuestra lucha es fuerte
No permitiremos <span class="todos">mas injusticia</span>

<span class="todos">Hey! (6)</span>

Nos uniremos y pelearemos
Hasta que todos sean libres
Nuestra lucha es justa
Nada nos detendrá

Nos alzamos y nos revelamos
Contra el sistema y sus problemas
Nuestra voz es fuerte
No permitiremos mas injusticia

Nos uniremos y pelearemos
Hasta que todos <span class="todos">sean libres</span>
Nuestra lucha es justa
<span class="todos">Nada nos detendrá</span>

Nos alzamos y nos revelamos
Contra el sistema y <span class="todos">sus problemas</span>
Nuestra lucha es fuerte
No permitiremos <span class="todos">mas injusticia</span>

<span class="todos">injusticia (4)</span>`,
    audio: 'bits-de-libertad.mp3'
  },
  'sistema-corrupto': {
    title: 'Máquina de Rebeldía - Sistema Corrupto',
    lyrics: `
<span class="melodia">Melodia</span>

La vida es un juego de azar
Donde siempre pierde el mismo
El de abajo siempre pagará
Y el de arriba será el rico

<span class="melodia">Melodia</span>

<span class="todos">Es el sistema corrupto
Que nos deja sin futuro
Es el sistema injusto
Que nos quita todo, todo, todo</span>

Trabajamos para sobrevivir
Mientras ellos viven de nosotros
La riqueza se concentra en el fin
Mientras nosotros vivimos en el lodo

<span class="todos">Es el sistema corrupto
Que nos deja sin futuro
Es el sistema injusto
Que nos quita todo, todo, todo</span>

<span class="guitar-solo">Solo Guitar</span>

<span class="todos">Es el sistema corrupto
Que nos deja sin futuro
Es el sistema injusto
Que nos quita todo, todo, todo</span>`,
    audio: 'bits-de-libertad.mp3'
  },
  'caos': {
    title: 'Máquina de Rebeldía - Caos',
    lyrics: `
<span class="melodia">Melodia</span>

Caos, caos, en mi ciudad,
Gritando muy fuerte, <span class="todos">revolución!</span>
Caos, caos, en mi ser,
Revolución ardiente, <span class="todos">sin temer.</span>

<span class="melodia">Melodia</span>

Caos, caos, en las calles,
Gritos de cambio, <span class="todos">sin temor.</span>
Caos, caos, en mi ser,
Protesta constante, <span class="todos">sin ceder.</span>

<span class="melodia">Melodia</span>`,
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