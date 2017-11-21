"use strict";
//  namespace Clases{
/// <reference path="node_modules/@types/jquery/index.d.ts" />
// jQuery:
//copio la carpeta node modules o uso npm init
// npm install --save @types/jquery
// $(function(){
//         localStorage.clear();
// }
$(function () {
    // ESTO ES LO PRIMERO QUE SE CARGA EN LA PAGINA
    var select = $("#tipo");
    for (var i = 0; i < 6; i++) {
        select.append("<option value=" + i + ">" + practicaMascotas.animales[i] + "</option>");
    }
});
// Agrega esto afuera, hace un metodo con esto
// .change(mapearCampos);
function agregarMascota() {
    // Asginado en variables
    // let id: number = Number ($('#ID').val());
    // let nombre: string = String ($('#nombre').val());
    // let edad: number = Number ($('#edad').val());
    // let tipo: Clases.tipoMascota = Number ($('#tipo').val());
    // let cantPatas: number = Number ($('#cantidadpatas').val());
    //ASIGNO USANDO document.getElementById
    // let id:number = Number (document.getElementById("ID").value);
    // let nombre:string = String (document.getElementById("nombre").value);
    // // let tipo: Clases.tipoMascota = Number ($(selecTipo).val());
    // let tipo: string = String (document.getElementById("tipo").value);
    // let edad: number = Number (document.getElementById("edad").value);
    // let cantPatas: number = Number (document.getElementById("cantidadpatas").value);
    //Creo directamente el objeto mascota
    var nuevaMascota = new Clases.Mascota(String($('#nombre').val()), Number($('#edad').val()), Number($('#cantidadpatas').val()), Number($('#ID').val()), Number($('#tipo').val()));
    //let nuevaMascota = new Clases.Mascota(nombre,edad,cantPatas,id,tipo);
    var MascotasString = localStorage.getItem("Mascotas");
    //la primera vez no hay nada, las otras veces string
    console.log(nuevaMascota);
    // let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(nuevaMascota.toJson()); // ESTO ES UN IF
    var MascotasJson = MascotasString == null ? [] : JSON.parse(MascotasString);
    //console.log(nuevaMascota.toJson()); //ver como anda
    MascotasJson.push(JSON.parse(nuevaMascota.toJson()));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasJson));
    console.log(MascotasJson);
    alert("Mascota guardada");
    // console.log(MascotasJson);
    // Para ver que devuelve:
    // let devuelve = localStorage.getItem("Mascotas")
    // console.log(devuelve);
    // mostrarmascotas();
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
//         mostrarMascotas();
//             let MascotasJson : Clases.Mascota[i].id
//             armo la tabla como el primer parcial con el fastix
//             #divtabla.html(tabla);
//         limpiarCampos();
//             $txtnombred.val("")
//             a selectipo le da 0
//             y que ponga foco en txtid
// armo el json con un array de mascotas
