//Primero conseguimos todos los botones
var selectores = document.querySelectorAll("#selector button");
//Ahora recogemos los clicks de todos los botones y los filtramos
for (i = 0; i < selectores.length; i++) {
    selectores[i].onclick = function(e) {
        seleccionarCampoACrear(e.target.id);
    }
}

//Función que determina a partir del id del botón, el tipo de campo de texto que se debe crear
function seleccionarCampoACrear(id) {
    console.log(id)
    switch (id) {
        case "texto":
            crearCampoTexto();
            break;
        case "numero":
            crearCampoNumero();
            break;
        case "email":
            crearCampoEmail();
            break;
        case "seleccion_lista":
            crearCampoSeleccionLista();
            break;
        case "seleccion_noExclusiva":
            crearCampoNoExclusivo();
            break;
        case "seleccion_exclusiva":
            crearCampoExclusivo();
            break;
    }
}

//Crea un campo de texto
function crearCampoTexto() {
    crearCampoTipo("text");
}
//Crea un campo de número
function crearCampoNumero() {
    crearCampoTipo("number");
}
//Crea un campo de email (texto?)
function crearCampoEmail() {
    crearCampoTipo("email");
}
//Función generica para valores de tipo texto y numero (y email)
function crearCampoTipo(tipo) {
    var labelName = prompt("Escribe la etiqueta: ");
    var label = document.createElement("label");
    label.textContent = labelName + ":";
    label.htmlFor = labelName;
    var input = document.createElement("input");
    input.id = labelName;
    input.type = tipo;
    var div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(input);
    var formulario = document.querySelector("#formulario");
    formulario.appendChild(div);
}

function crearCampoSeleccionLista() {
    var labelName = prompt("Escribe la etiqueta: ");
    var label = document.createElement("label");
    label.textContent = labelName + ":";
    label.htmlFor = labelName;
    var select = document.createElement("select");
    select.id = labelName;

    var options = prompt("Escribe las opciones separadas por COMAS (,): ")
    options = options.split(",");
    for (i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.textContent = options[i];
        select.appendChild(option);
    }
    
    var div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(select);
    var formulario = document.querySelector("#formulario");
    formulario.appendChild(div);
}

function crearCampoExclusivo() {
    var div = document.createElement("div");
    var labelName = prompt("Escribe la etiqueta: ");
    var p = document.createElement("p");
    p.textContent = labelName + ":";
    div.appendChild(p);
    var options = prompt("Escribe las opciones separadas por COMAS (,): ")
    options = options.split(",");
    for (i = 0; i < options.length; i++) {
        var input = document.createElement("input");
        input.value = options[i];
        input.id = options[i];
        input.name = labelName;
        input.type = "radio";
        var label = document.createElement("label");
        label.htmlFor = options[i];
        label.textContent = options[i];
        div.appendChild(input);
        div.appendChild(label);
    }
    var formulario = document.querySelector("#formulario");
    formulario.appendChild(div);
}

function crearCampoNoExclusivo() {
    var div = document.createElement("div");
    var labelName = prompt("Escribe la etiqueta: ");
    var p = document.createElement("p");
    p.textContent = labelName + ":";
    div.appendChild(p);
    var options = prompt("Escribe las opciones separadas por COMAS (,): ")
    options = options.split(",");
    for (i = 0; i < options.length; i++) {
        var input = document.createElement("input");
        input.value = options[i];
        input.id = options[i];
        input.name = labelName + i;
        input.type = "checkbox";
        var label = document.createElement("label");
        label.htmlFor = options[i];
        label.textContent = options[i];
        div.appendChild(input);
        div.appendChild(label);
    }
    var formulario = document.querySelector("#formulario");
    formulario.appendChild(div);
}