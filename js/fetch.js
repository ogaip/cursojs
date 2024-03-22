const datos = {
  payload: "myObject",
  nombre: "myNombre",
  Apellido: "myApellido",
};

function ogaip(datos) {
  fetch("http://cursojs.test/main.php", {
    method: "POST",
    body: FormData= JSON.stringify(datos),
  })
    .then((response) => {
      console.log(response.status);
    })
    
    .then((response) => response.json())

    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

{
  {
    ogaip(datos);
  }
}
