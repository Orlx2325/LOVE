// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si el tiempo pasa y no te puedo ver", time: 15 },
  { text: "Me falta poco para enloquecer", time: 18 },
  { text: "Ya no me alcanzan tus recuerdos", time: 27 },
  { text: "♪", time: 41 },
  { text: "A mi memoria le hace mal tu amor", time: 32 },
  { text: "Si a mí me pasa sé que a ti también", time: 33 },
  { text: "Ya no me alcanzan tus recuerdos", time: 41 },
  { text: "(No me alcanzan tus recuerdos)", time: 47 },
  { text: "Tus ojos verdes no conservan su color", time: 54 },
  { text: "Y en mi cabeza nunca suena igual tu voz", time: 59 },
  { text: "Ya no quiero acudir a recuerdos", time: 67 },
  { text: "Te quiero aquí", time: 72 },
  { text: "Busco tus besos y no encuentro su sabor", time: 78 },
  { text: "Pienso en tu risa y sin pensar caigo en mi error", time: 83 },
  { text: "Ya no quiero acudir a recuerdos", time: 91 },
  { text: "Te quiero aquí", time: 97 },
  { text: "Porque aunque no pueda verte", time: 104 },
  { text: "Yo nunca culparé a la suerte", time: 108 },
  { text: "Yo ya gasté toda mi suerte", time: 144 },
  { text: "Mi suerte la usé en encontrarte a ti", time: 148 },
  { text: "Y aunque me quede sin nada", time: 153 },
  { text: "Yo nunca culparé a la suerte (Suerte)", time: 158 },
  { text: "Yo ya gasté toda mi suerte", time: 164 },
  { text: "Mi suerte la usé en encontrarte a ti", time: 169 },
  { text: "Tengo que confesarte, hoy que estás aquí", time: 176 },
  { text: "No te has ido y ya empiezo a extrañarte", time: 183 },
  { text: "Quiero que pase lento el tiempo entre tú y yo (Muy lento)", time: 188 },
  { text: "Y Love You.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);