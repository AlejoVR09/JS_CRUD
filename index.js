//agregar tarea
let campoTexto = document.querySelector(".campoTexto");
let botonAgregar = document.querySelector(".boton");
let tabla = document.querySelector(".table tbody");

botonAgregar.addEventListener("click", function () {
    //console.log(campoTexto.value);
    //alert(campoTexto.value);
    crearTarea();
});
//crear tarea
function crearTarea() {
    let fila = document.createElement("tr");
    //let col = document.createElement("td");
    if ( campoTexto.value == "") {
        alert("Debes escribir una tarea");
    }else{
        fila.innerHTML = `
            <td class="tarea"> ${ campoTexto.value } </td>
            <td> <span onclick="editar(this)"> 📝</span> </td>
            <td> <span onclick="eliminar()" class="botonEliminar">❌</span> </td>
        `;
        tabla.appendChild(fila); 
        campoTexto.value = "";
    }
}
//funcion para eliminar
function eliminar() {
    let botonEliminar = document.querySelector(".botonEliminar");
    let confirmar = confirm("deseas eliminar esta tarea");
    if ( confirmar ) {
        botonEliminar.parentElement.parentElement.remove() ;
    }
}

function editar(span){
    console.log(span)
    let fila =span.closest("tr");
    let tarea = fila.querySelector(".tarea");
    let nuevoTexto = prompt("Ingrese la nueva tarea")

    if(nuevoTexto !== null){
        tarea.textContent = nuevoTexto;
    }
    
    
    
    
}
//agregar tarea con la tecla enter
campoTexto.addEventListener("keydown", function (event) {
    if (event.keyCode===13) {
        event.preventDefault()
        crearTarea()
    }
});

