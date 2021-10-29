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
  let listaCoder = document.querySelector(".pac-coders");
  listaCoder.innerHTML = " ";

  listaCoders.forEach(function (object) {
    listaCoder.innerHTML += `<li>${object.nombre}</li>`;
  });
}
printListaCoders();

let deathCoders = [];

function printMuertos() {
  let listaMuerto = document.querySelector("#pacoders_muertos");
  listaMuerto.innerHTML = " ";

  deathCoders.forEach(function (object) {
    listaMuerto.innerHTML += `<li>${object.nombre}</li>`;
  });
}



function killCoder() {
  let randomKill = Math.floor(Math.random() * listaCoders.length);
  if (listaCoders.length > 0) {
    let programadorMuerto = listaCoders.splice(randomKill, 1).pop();
    deathCoders.push(programadorMuerto);
    printListaCoders();
    //console.log(printListaCoders);
    printMuertos();
  }
}

let boton = document.querySelector("#boton_inicio");
boton.addEventListener("click", killCoder);
//console.log(boton);

//que facil fue mayu manda no tu panda

let reset = document.getElementById("boton_reiniciar");

reset.addEventListener("click", (_) => {
  location.reload();
});
