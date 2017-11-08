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
    console.log(Validaciones.validarCadena("Juan"));
    //llamo usando el namespace
})(Validaciones || (Validaciones = {}));
