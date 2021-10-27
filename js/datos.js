const listCoders = [
  {
    name: "Cecilia",
  },
  {
    name: "Sol",
  },
  {
    name: "Luidmila",
  },
  {
    name: "Mayu",
  },
  {
    name: "Miquel",
  },
  {
    name: "Abde",
  },
];

let DOMlistCoders = document.querySelector("#pa-coders");
function printlistCoders(object) {
  DOMlistCoders.innerHTML += `<p>${object.name}</p>`;
}
function loadName() {
  listCoders.forEach((object) => printlistCoders(object));
}
loadName();
