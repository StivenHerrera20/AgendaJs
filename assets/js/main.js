//Esta es la app principal que enlaza la logica del programa

//Punteros-Objetos del dom

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const btnEnviar = document.querySelector("#btnEnviar");

const bdatos = window.localStorage;

btnEnviar.addEventListener("click", () => {
  //Creamos el elemento objeto y le pasamos al atributo valor el value de los input
  let contacto = {
    id: Math.random(1, 200),
    nombre: nombre.value,
    apellido: apellido.value,
  };
  //console.log(contacto);
  guardarContacto(bdatos, contacto);
  listarContactos(bdatos);
});

//Listar contactos
listarContactos(bdatos);
