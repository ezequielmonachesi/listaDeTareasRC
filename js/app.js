let form = document.querySelector('form');
let textoIngresado = document.querySelector('#textInput')

form.addEventListener('submit', agregarTarea)

function agregarTarea(e){
    e.preventDefault();
    let tareasPendientes = document.querySelector('#tareasPendientes');
    let datoIngresado = textoIngresado.value;
    let liTareas = document.createElement('li');
    liTareas.innerHTML = datoIngresado;
    tareasPendientes.appendChild(liTareas);
}