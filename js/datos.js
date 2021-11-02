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

function printMuertos(coderstring) {
  let listaMuerto = document.querySelector("#pacoders_muertos");

  let html = "";
  
  deathCoders.forEach((coder) => {
    html += `<li>${coder}</li>`;
  })
 
  listaMuerto.innerHTML = html;
}



function killCoder() {
  let randomKill = Math.floor(Math.random() * listaCoders.length);
  if (listaCoders.length > 0) {
    let programadorMuerto = listaCoders.splice(randomKill, 1);
    let stringCoder = programadorMuerto.pop().nombre;
    deathCoders.push(stringCoder);
    printListaCoders();
    printMuertos(stringCoder);
  }
}

let boton = document.querySelector("#boton_inicio");
boton.addEventListener("click", killCoder);


let reset = document.getElementById("boton_reiniciar");

reset.addEventListener("click", (_) => {
  location.reload();
});
