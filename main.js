function corregir() {
  capitalesSeleccionadas = [];

  function obtenerValorChecked(selector) {
    const elemento = document.querySelector(selector);
    return elemento ? elemento.value : '-';
  }

  capitalesSeleccionadas.push(obtenerValorChecked('input[name="capital-italia"]:checked'));
  capitalesSeleccionadas.push(obtenerValorChecked('input[name="capital-noruega"]:checked'));
  capitalesSeleccionadas.push(obtenerValorChecked('input[name="capital-peru"]:checked'));
  capitalesSeleccionadas.push(obtenerValorChecked('input[name="capital-suecia"]:checked'));
  capitalesSeleccionadas.push(obtenerValorChecked('input[name="capital-canada"]:checked'));
  
  console.log(capitalesSeleccionadas);
  capitalesCorrectas = ['roma','oslo','lima','estocolmo','ottawa']

  correctas=0
  for (let i = 0; i < capitalesCorrectas.length; i++) {
    if(capitalesCorrectas[i]==capitalesSeleccionadas[i]){
      correctas++;
    }
  }

  let span = document.getElementById('aciertos');
  span.innerHTML = correctas;
}