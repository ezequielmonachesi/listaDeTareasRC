let form = document.querySelector("form");
let textoIngresado = document.querySelector("#textInput");

form.addEventListener("submit", agregarTarea);
trash.addEventListener("click", borrarTarea);

function borrarTarea() {
    
}

function agregarTarea(e) {
  e.preventDefault();
  let datoIngresado = textoIngresado.value;
  let liTareas = document.createElement("li");
  liTareas.innerHTML = `
    ${datoIngresado}
    <i type="button" class="bi bi-trash-fill text-danger fs-5 ms-2"></i>
    `;
  liTareas.className = "d-flex flex-nowrap align-items-center";
  tareasPendientes.appendChild(liTareas);
}
