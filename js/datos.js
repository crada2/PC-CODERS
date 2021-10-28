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


function printListaCoders() {
  let listaCoder = document.querySelector('.pac-coders');
  listaCoder.innerHTML = " ";

  listaCoders.forEach(function (object){
    listaCoder.innerHTML += `<li>${object.nombre}</li>`;
  });

}

let deathCoders = [];

function printMuertos() {
  let listaMuerto = document.querySelector('#pacoders_muertos');
  listaMuerto.innerHTML = " ";

  deathCoders.forEach(function(object){
    listaMuerto.innerHTML += `<li>${object.nombre}</li>`;
  });
}

printListaCoders();



