var styles = "@import url('../StyleSheet/Principal.css ');";
var newSS = document.createElement('link');
newSS.rel = 'stylesheet';
newSS.href = 'data:text/css,' + escape(styles);
document.getElementsByTagName("head")[0].appendChild(newSS);
window.onload = Hide_Submenu();
window.onload = tabladinamica();

function Hide_Submenu() {
    subElement = document.getElementById("sub-m-p-s");
    subElement.style.display = 'none';
}

function ShowSubmenu() {
    element = document.getElementById("sub-m-p-s");
    if (element.style.display == 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

document.querySelector("#Buscar").onkeyup = function() {
    debugger;
    $TableFilter("#Dinamique_Table", this.value);
};

$TableFilter = function(id, value) {
    debugger;
    var rows = document.querySelectorAll(id + ' tbody tr');

    for (var i = 0; i < rows.length; i++) {
        var showRow = false;

        var row = rows[i];
        row.style.display = 'none';

        for (var x = 0; x < row.childElementCount; x++) {
            if (row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1) {
                showRow = true;
                break;
            }
        }

        if (showRow) {
            row.style.display = null;
        }
    }
}

function tabladinamica() {

    var divtabla = document.getElementById("Tabla-Registros-Dinamicos");
    var tabla = document.createElement("table");
    tabla.id = "Dinamique_Table";
    var tblbody = document.createElement("tbody");
    tblbody.setAttribute("class", "TblBody");
    var arreglo = ["prueba", "hola", "primero", "casa"];
    for (var i = 0; i < 8000; i++) {
        var hilera = document.createElement("tr");
        hilera.setAttribute("class", "Prin-celda");
        for (var j = 0; j < 1; j++) {
            var usuario = document.createElement("td");
            var fecha = document.createElement("td");
            var contenido = document.createElement("td");
            contenido.setAttribute("colspan", "2");
            var textoContenido = document.createTextNode("Contenido..........");
            var textoUsuario = document.createTextNode(arreglo[i]);
            var textoFecha = document.createTextNode(i + "/7");
            usuario.appendChild(textoUsuario);
            fecha.appendChild(textoFecha);
            contenido.appendChild(textoContenido);
            hilera.appendChild(usuario);
            hilera.appendChild(fecha);
            hilera.appendChild(contenido);
        }
        tblbody.appendChild(hilera);
    }
    tabla.appendChild(tblbody);
    divtabla.appendChild(tabla);
    tabla.setAttribute("class", "tableDinamica");
}