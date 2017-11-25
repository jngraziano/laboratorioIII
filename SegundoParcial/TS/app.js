"use strict";
/// <reference path="node_modules/@types/jquery/index.d.ts" />
// jQuery:
//copio la carpeta node modules o uso npm init
// npm install --save @types/jquery
// namespace Clases{
var xhr = new XMLHttpRequest();
$(function () {
    // ESTO ES LO PRIMERO QUE SE CARGA EN LA PAGINA
    //localStorage.clear(); para limpiar tabla
    var select = $("#tipo");
    for (var i = 0; i < 6; i++) {
        select.append("<option value=" + i + ">" + Clases.tipoMascota[i] + "</option>");
    }
    mostrarMascotas();
});
// Agrega esto afuera, hace un metodo con esto
// .change(mapearCampos);
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
    var tipo = Number($('#tipo').val());
    var nuevaMascota = new Clases.Mascota(String($('#nombre').val()), Number($('#edad').val()), Number($('#cantidadpatas').val()), Number($('#ID').val()), Number($('#tipo').val()));
    var MascotasString = localStorage.getItem("Mascotas");
    //la primera vez no hay nada, las otras veces string
    console.log(nuevaMascota);
    // let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(nuevaMascota.toJson()); // ESTO ES UN IF
    var MascotasJson = MascotasString == null ? [] : JSON.parse(MascotasString);
    console.log(nuevaMascota.toJson()); //ver como anda
    MascotasJson.push(JSON.parse(nuevaMascota.toJson()));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasJson));
    console.log(MascotasJson);
    alert("Mascota guardada");
    // console.log(MascotasJson);
    // Para ver que devuelve:
    // let devuelve = localStorage.getItem("Mascotas")
    // console.log(devuelve);
    mostrarMascotas();
}
//  function filtrarMascotas(tipo:number){
//      let mascotaslFiltradas:Array<Clases.Mascota>;
//      let MascotasString: string | null = localStorage.getItem("Mascotas");
//      let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF
//      (nuevamascota.toJSON());
//      MascotasJSON.push(JSON.parse(nuevaMascota.toJSON()));
//  }
//  function filtrar(tipo:any())
//  {
//  }
//  function mostrarMascotas() {
//     let MascotasJson : Clases.Mascota[i].id
//            //     armo la tabla como el primer parcial con el fastix
//               #divtabla.html(tabla);
// }
function mostrarMascotas() {
    // let MascotasJson : Clases.Mascota[i].id
    // armo la tabla como el primer parcial con el fastix
    // #divtabla.html(tabla);
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotaJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    var tabla = $("#tCuerpo");
    tabla["0"].innerHTML = "";
    // tabla.refresh();
    // tabla.children[0]
    // document.getElementById("")
    for (var i = 0; i < MascotaJSON.length; i++) {
        //tabla.append("${Clases.tipoMascota[MascotaJSON[i].nombre]}<td td> ");
        var variable = "<tr><td>" + MascotaJSON[i].split(',')[0] + "</td>" +
            "<td>" + MascotaJSON[i].split(',')[1] + "</td>" +
            "<td>" + MascotaJSON[i].split(',')[2] + "</td>" +
            "<td>" + MascotaJSON[i].split(',')[3] + "</td>" +
            "<td>" + MascotaJSON[i].split(',')[4] + "</td></tr>";
        tabla.append(variable);
    }
}
//         limpiarCampos();
//             $txtnombred.val("")
//             a selectipo le da 0
//             y que ponga foco en txtid
// armo el json con un array de mascotas
// } CORCHETE DE NAMESPACE 
