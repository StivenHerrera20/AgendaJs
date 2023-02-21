//Funciones crud de la aplicacion
const tabla = document.querySelector("#tabla");
console.log(tabla);

const guardarContacto = (bdatos, contacto) => {
  // Usamos setItem para guardar en el objeto window
  bdatos.setItem(contacto.id, JSON.stringify(contacto));
};

const listarContactos = (bdatos) => {
  // leer las llaves del objeto localStorage
  let llaves = Object.keys(bdatos);
  //Ciclo para recorrer el objeto localStorage
  for (clave of llaves) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-danger ");
    btn.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    //En clave guarda el valor de la key en cada interaccion del bucle
    let contacto = JSON.parse(bdatos.getItem(clave));
    td1.innerText = contacto.id;
    td2.innerText = contacto.nombre;
    td3.innerText = contacto.apellido;

    tabla.appendChild(tr);
    td4.appendChild(btn);
    tr.append(td1, td2, td3, td4);
  }
};
