const tabla = document.getElementById("datos"); //Obtenemos la tabla
//var fila= tabla.rows

//console.log(tabla.rows[0].cells[2].innerHTML);

dataTable(tabla);
console.log(dataTable());

function dataTable() {
  
  const data = [];
  let fila = tabla.rows;
  for (let celda = 1; celda < fila.length; celda++) {
    const obj = {
      
        nombre: fila[celda].cells[0].innerHTML,
        apellido: fila[celda].cells[1].innerHTML,
        correo: fila[celda].cells[2].innerHTML,
      };
    data.push(obj);
  }
  return data;
}
