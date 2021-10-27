export const listaCoders = [
    
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
    }

]
//console.log(listaCoders);
//export const limbo = []
let DomListaCoders = document.getElementById("pa-coders");
function printListCoders(object) {
    DomListaCoders.innerHTML += `<p>${object.name}</p>`
}
function loadName() {
    listaCoders.forEach((object) => printListCoders(object);
}
loadName();