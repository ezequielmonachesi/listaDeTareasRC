let form = document.querySelector("form");
let textoIngresado = document.querySelector("#textInput");
let todos = [];
let borrar = document.querySelector("#borrarTarea");

form.addEventListener("submit", agregarTarea);
borrar.addEventListener("click", borrarTarea);

function borrarTarea() {
  let deleteTodo = document.querySelector('#delete');
  let valorInput = deleteTodo.value;
  let buscarInput = todos.filter(i=>i === valorInput)
  if(valorInput === buscarInput[0]){
    let borrar = todos.indexOf(valorInput);
    tareasPendientes.removeChild(tareasPendientes.children[borrar]);
    todos.splice(borrar,1)
  }else{
    alert('El valor ingresado no está en las Tareas Pendientes')
  }
}

function agregarTarea(e) {
  e.preventDefault();
  let datoIngresado = textoIngresado.value;
  todos.push(datoIngresado);
  recorrerArray();
    textoIngresado.value='';
}

function recorrerArray(){
  let liTareas = document.createElement("li");
  todos.forEach((element, i) => {
    liTareas.innerHTML = `
    ${element}
    <i type="button" class="bi bi-check text-success fs-2"></i>
    `;
    liTareas.className = `d-flex flex-row justify-content-center align-items-center li rounded-pill mt-2 mx-5 ${i}`;
    tareasPendientes.appendChild(liTareas);
  });
}