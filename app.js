// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js - Lógica para Amigo Secreto
const inputAmigo = document.getElementById('amigo');
const listaAmigosEl = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

let amigos = [];

// Agregar amigo
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    inputAmigo.focus();
    return;
  }

  amigos.push(nombre);
  inputAmigo.value = '';
  inputAmigo.focus();
  actualizarLista();
}

// Actualizar la lista visible
function actualizarLista() {
  listaAmigosEl.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];

    // Botón eliminar (opcional, muy útil en la práctica)
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.marginLeft = '12px';
    btnEliminar.addEventListener('click', function() {
      amigos.splice(i, 1);
      actualizarLista();
    });

    li.appendChild(btnEliminar);
    listaAmigosEl.appendChild(li);
  }
}

// Sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear. Añade al menos un nombre.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indiceAleatorio];
  resultadoEl.textContent = `🎉 Amigo secreto: ${ganador} 🎉`;
}

// Soporte para tecla Enter
inputAmigo.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') agregarAmigo();
});