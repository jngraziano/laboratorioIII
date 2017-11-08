"use strict";
var Validaciones;
(function (Validaciones) {
    function validarCadena(texto) {
        // USAMOS EXPORT PARA QUE SE PUEDA VER DE AFUERA. ES COMO UN PUBLIC.   
        //se puede usar para funciones como para variables.
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarCadena = validarCadena;
})(Validaciones || (Validaciones = {}));
///<reference path="validaciones/textos.ts"/>
console.log(Validaciones.validarCadena("Juan"));
//llamo usando el namespace
var mascotas;
(function (mascotas) {
    mascotas[mascotas["salvaje"] = 0] = "salvaje";
    mascotas[mascotas["domestica"] = 1] = "domestica";
})(mascotas || (mascotas = {}));
// let nombre:string = "Juan";
// let apellido:string ="Perez";
// console.log(`Hola ${ nombre } ${ apellido}`);
var nombre;
function validarNumero(num) {
    if (num > 3) {
        return true;
    }
    else {
        return false;
    }
}
