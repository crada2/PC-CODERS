
  boton_inicio.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      Pcman.style.left = timePassed / 3.6 + 'px';
      Gosht.style.left = timePassed / 5 + 'px';

      if (timePassed > 1600) clearInterval(timer);

    }, 20);
  }