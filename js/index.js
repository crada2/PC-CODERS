import { listaCoders } from "./datos.js";
let DomListaCoders = document.getElementById("pa-coders");
function printListCoders(object) {
    DomListaCoders.innerHTML += `<p>${object.name}</p>`
}
function loadName() {
    listaCoders.forEach((object) => printListCoders(object);
}
loadName();