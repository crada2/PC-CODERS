let listaVivos = ["Ceci", "Abde", "Sol", "Mayu", "Miquel", "Ludmila"];
let listaMuertos = [];

let ulVivos = document.querySelector(".pac-vivos");
let ulMuertos = document.querySelector(".pac-muertos");
export let botonMatar = document.querySelector("#boton_inicio");
let botonReset = document.querySelector("#boton_reiniciar");
let botonAdd = document.querySelector("#add_coder");
let inputNuevoCoder = document.querySelector("#newCoder");

function imprimirLista(lista, ul) {
  let html = "";

  lista.forEach((coder) => {
    html += `<li>${coder}</li>`;
  });

  ul.innerHTML = html;
}

function actualizarListas() {
  imprimirLista(listaVivos, ulVivos);
  imprimirLista(listaMuertos, ulMuertos);
}

function indexAlAzar(max) {
  return Math.floor(Math.random() * max);
}

function killCoder() {
  let randomKill = indexAlAzar(listaVivos.length);
  let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "./AUDIO/pcman audio corto.mp3")
      etiquetaAudio.play()
      

  if (listaVivos.length > 0) {
    let programadorMuerto = listaVivos[randomKill];

    listaVivos = listaVivos.filter((_, i) => {
      return i !== randomKill;
    });
    
    listaMuertos.push(programadorMuerto);

    actualizarListas();
  }
}

function reset() {
  location.reload();
}

function addBoton() {
  if (inputNuevoCoder.value) {
    listaVivos.push(inputNuevoCoder.value);
    inputNuevoCoder.value = "";
    actualizarListas();
  }
}

botonMatar.addEventListener("click", killCoder);
botonReset.addEventListener("click", reset);
botonAdd.addEventListener("click", addBoton);

actualizarListas();
