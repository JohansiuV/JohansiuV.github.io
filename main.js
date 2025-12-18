// CONTRASEÑA — Puedes cambiarla si quieres
const contrasenaCorrecta = "04082025";

// Función abrir modal
function accederIntranet() {
    document.getElementById('modalIntranet').setAttribute('aria-hidden', 'false');
}

// Función validar contraseña
function verificarContrasenaIntranet() {

    const input = document.getElementById('contrasenaInputIntranet');
    const error = document.getElementById('mensajeErrorIntranet');

    if (input.value === contrasenaCorrecta) {

        window.location.href = "intranet_johan.html";

    } else {
        error.style.display = "block";
        input.value = "";
    }
}

// FECHA
document.getElementById("date").innerText =
  new Date().toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

// FRASES MOTIVADORAS
const frases = [
  "El cuerpo logra lo que la mente cree.",
  "El dolor es temporal. La gloria es eterna.",
  "Haz que tu futuro yo esté orgulloso.",
  "Disciplina vence talento."
];

document.getElementById("frase").innerText =
  frases[Math.floor(Math.random() * frases.length)];

// GUARDAR METAS
function guardarMetas(){
  const texto = document.getElementById("metasArea").value;
  localStorage.setItem("metas_johan", texto);
}

// GUARDAR NOTAS PRIVADAS
function guardarNotas(){
  const texto = document.getElementById("notasArea").value;
  localStorage.setItem("notas_johan", texto);
}

// CARGAR AL INICIAR
document.getElementById("metasArea").value =
  localStorage.getItem("metas_johan") || "";

document.getElementById("notasArea").value =
  localStorage.getItem("notas_johan") || "";
