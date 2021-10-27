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
//pinta array de nombres en DOM
let DOMlistaCoders = document.querySelector("#pac-coders");

function printlistaCoders(object) {
  DOMlistaCoders.innerHTML += `<p>${object.nombre}</p>`;
}

function loadName() {
  listaCoders.forEach((object) => printlistaCoders(object));
}

loadName();



