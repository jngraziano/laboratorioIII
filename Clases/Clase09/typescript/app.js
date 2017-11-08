"use strict";
///<reference path="validaciones/textos.ts"/>
var mascotas;
(function (mascotas) {
    mascotas[mascotas["salvaje"] = 0] = "salvaje";
    mascotas[mascotas["domestica"] = 1] = "domestica";
})(mascotas || (mascotas = {}));
// let nombre:string = "Juan";
// let apellido:string ="Perez";
// console.log(`Hola ${ nombre } ${ apellido}`);
