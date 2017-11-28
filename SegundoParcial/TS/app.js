/// <reference path="node_modules/@types/jquery/index.d.ts" />
// namespace Clases{
// jQuery:
//copio la carpeta node modules o uso npm init
// npm install --save @types/jquery
//recordar que debe ir primero de todo.
//////////////EVENTOS//////////////
$(function () {
    //FORM MODIFICADO POR CHECKBOX
    $("#checkFORM :checkbox").change(function () {
        encabezadoCheck();
    });
    //BOTON FILTRAR
    $("#filtrarPor").change(function () {
        var valorFiltro = $('#filtrarPor').map(function () { return this.value; }).get();
        mostrarMascotas(valorFiltro);
        tablaAux = undefined;
    });
    //CARGA DE LA PAGINA
    encabezadoCheck();
    cargoMenusEncabezado();
    mostrarMascotas();
});
//////////////METODOS//////////////
//LIMPIAR LOCALSTORAGE
function limpiarLista() {
    localStorage.clear();
    mostrarMascotas();
}
//TRAIGO EN UN ARRAY LOS VALORES DEVUELTOS DE LOS CHECKBOX ON
//ARMO LA TABLA DINAMICA PASANDO LOS ENCABEZADOS Y FILTROS A MOSTRAR COLUMNAS
function encabezadoCheck() {
    var checkboxON = $('input:checkbox:checked.checkItems').map(function () { return this.value; }).get();
    tablaDinamica(checkboxON);
}
//CARGO LOS DROPDOWN QUE DEPENDEN DEL ENUMERADO
function cargoMenusEncabezado() {
    //ENCABEZADO DE FORM DE CARGA
    var i = 0;
    var select = $("#tipoMasc");
    for (var i = 0; i < 6; i++) {
        select.append("<option value=" + i + ">" + Clases.tipoMascota[i] + "</option>");
    }
    //ENCABEZADO DE LA SECCION DE FILTRO
    var filtrar = $("#filtrarPor");
    filtrar[0].innerHTML = select[0].innerHTML;
}
var tablaAux;
// var tablaAppend;
//ARMO LA TABLA  DINAMICA
function tablaDinamica(checkboxON) {
    //CHEQUEO SI ES LA CARGA INICIAL O SI ENTRA POR EL CHANGE DE CHECKBOX
    if (checkboxON.length != 0) {
        //TABLA DINAMICA, ENTRA POR EVENTO
        //CABECERA DE LA TABLA
        var row_name = checkboxON;
        var cabecera_1 = $("#tCabecera");
        cabecera_1["0"].innerHTML = "";
        row_name.forEach(function (element) {
            if (element != "") {
                var cabeceraArmada = $('<th>' + element + '</th>');
                cabecera_1.append(cabeceraArmada);
            }
        });
        var tablaTXT = $("#tCuerpoTXT");
        var ciclo;
        if (tablaAux == null) {
            var primeraVez = 1;
            tablaAux = $("#tCuerpoAUX");
            ciclo = $("#tCuerpo")[0].childNodes.length;
        }
        else {
            ciclo = $("#tCuerpoAUX")[0].childNodes.length;
            tablaTXT[0].innerHTML = "";
        }
        for (var i = 0; i < ciclo; i++) {
            //AGREGO LAS COLUMNAS SEGUN VAYAN O NO
            tablaTXT.append("<tr>");
            checkboxON.includes("ID") == true ? tablaTXT.append("<td id='mascID" + i + "'>" + $('#mascID' + i)[0].innerHTML + "</td>") : null;
            checkboxON.includes("NOMBRE") == true ? tablaTXT.append("<td id='mascNOM" + i + "'>" + $('#mascNOM' + i)[0].innerHTML + "</td>") : null;
            checkboxON.includes("EDAD") == true ? tablaTXT.append("<td id='mascEDAD" + i + "'>" + $('#mascEDAD' + i)[0].innerHTML + "</td>") : null;
            checkboxON.includes("TIPO") == true ? tablaTXT.append("<td id='mascTIPO" + i + "'>" + Clases.tipoMascota[$('#mascTIPO' + i)[0].innerHTML] + "</td>") : null;
            checkboxON.includes("CANTPATAS") == true ? tablaTXT.append("<td id='mascPATAS" + i + "'>" + $('#mascPATAS' + i)[0].innerHTML + "</td>") : null;
            tablaTXT.append("</tr></table>");
        }
        var tablaFinal = $("#tCuerpo");
        var innerHtmlAux = tablaFinal["0"].innerHTML;
        tablaFinal["0"].innerHTML = "";
        tablaFinal["0"].innerHTML = tablaTXT["0"].innerHTML;
        if (primeraVez == 1) {
            tablaAux["0"].innerHTML = innerHtmlAux;
        }
    }
    else {
        //TABLA ENTERA, VIENE POR EL LOAD DE LA PAGINA
        //CABECERA DE LA TABLA
        var cabecera = $("#tCabecera");
        cabecera["0"].innerHTML = "";
        var devuelve = "<th>ID</th>" +
            "<th>NOMBRE</th>" +
            "<th>EDAD</th>" +
            "<th>TIPO</th>" +
            "<th>CANTPATAS</th>";
        cabecera.append(devuelve);
        //CUERPO DE LA TABLA
        mostrarMascotas();
    }
}
/////////////////////////////////////////FUNCIONES DE CLASES/////////////////////////////////////////
function mostrarMascotas(valor) {
    var MascotasString = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    //ARMO EL ARRAY DE MASCOTAS, SEGUN SI ES TABLA FULL O FILTRADA
    if (valor) {
        //MUESTRO EL LISTADO DE MASCOTAS SEGUN FILTRO
        var stringFinal = MascotasString
            .filter(function (mascota) {
            var mascotaRet = JSON.parse(mascota);
            return mascotaRet._tipo == valor;
        })
            .map(function (mascota) {
            var mascotaRet = JSON.parse(mascota);
            return mascotaRet;
        });
        MascotasString = stringFinal;
    }
    var tabla = $("#tCuerpo");
    tabla["0"].innerHTML = "";
    for (var i = 0; i < MascotasString.length; i++) {
        var mascotaActual = void 0;
        if (valor) {
            mascotaActual = MascotasString[i];
        }
        else {
            mascotaActual = JSON.parse(MascotasString[i]);
        }
        var miTipo = Clases.tipoMascota[mascotaActual._tipo];
        var varAppend = "<tr><td id='mascID" + i + "'>" + mascotaActual._id + "</td>" +
            "<td id='mascNOM" + i + "'>" + mascotaActual._nombre + "</td>" +
            "<td id='mascEDAD" + i + "'>" + mascotaActual._edad + "</td>" +
            "<td id='mascTIPO" + i + "'>" + Clases.tipoMascota[mascotaActual._tipo] + "</td>" +
            "<td id='mascPATAS" + i + "'>" + mascotaActual._cantPatas + "</td></tr>";
        tabla.append(varAppend);
    }
}
function agregarMascota() {
    // FORMA 1: Asginado en variables
    // let id: number = Number ($('#ID').val());
    // let nombre: string = String ($('#nombre').val());
    // let edad: number = Number ($('#edad').val());
    // let tipo: Clases.tipoMascota = Number ($('#tipo').val());
    // let cantPatas: number = Number ($('#cantidadpatas').val());
    // FORMA 2: ASIGNO USANDO document.getElementById
    // let id:number = Number (document.getElementById("ID").value);
    // let nombre:string = String (document.getElementById("nombre").value);
    // // let tipo: Clases.tipoMascota = Number ($(selecTipo).val());
    // let tipo: string = String (document.getElementById("tipo").value);
    // let edad: number = Number (document.getElementById("edad").value);
    // let cantPatas: number = Number (document.getElementById("cantidadpatas").value);
    // FORMA 3: Creo directamente el objeto mascota
    //si quiero pasarselo con una variable ya guardada
    // let tipo: Clases.tipoMascota = Number($('#tipo').val());
    var tipo = Number($('#tipoMasc').val());
    var nuevaMascota = new Clases.Mascota(String($('#nombre').val()), Number($('#edad').val()), Number($('#patas').val()), Number($('#id').val()), tipo);
    var MascotasString = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    MascotasString.push(JSON.stringify(nuevaMascota));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasString));
    console.log(MascotasString);
    alert("Mascota guardada exitosamente.");
    mostrarMascotas();
    $('#formCARGA').trigger("reset");
}
