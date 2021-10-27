const listaCoders = [
  {
    nombre: "Ceci",
  },
  {
    nombre: "Miquel",
  },
  {
    nombre: "Sol",
  },
  {
    nombre: "Mayu",
  },
  {
    nombre: "Ludmila",
  },
  {
    nombre: "Abde",
  },
];

let DOMlistaCoders = document.querySelector("#pac-coders");

function printlistaCoders(object) {
  DOMlistaCoders.innerHTML += `<p>${object.nombre}</p>`;
}

function loadName() {
  listaCoders.forEach((object) => printlistaCoders(object));
}

loadName();
