var tabla = document.getElementById("tablaDatos");
var numeroFila = 0;
var hola = [];
var tDenunciante = recorrerTabla(numeroFila, tabla, hola);
pasarDatos(tDenunciante);
function muestraFila(tabla, numeroFila) {
  var fila = tabla.rows[numeroFila].cells;
  var data = [];
  for (var i = 0; i < fila.length; i++) {
    data.push(fila[i].innerText);
  }
  hola.push(data);
}
function recorrerTabla(numeroFila, tabla) {
  while (numeroFila < tabla.rows.length) {
    muestraFila(tabla, numeroFila, hola);
    numeroFila++;
  }
  return hola;
}
function pasarDatos(diego) {
  URL = "js.php";

  fetch(URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(diego), // body data type must match "Content-Type" header
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
