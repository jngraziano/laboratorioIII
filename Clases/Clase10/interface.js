function enviarMision(xmen) {
    console.log(xmen.nombre);
}
// let xmen:IXmen;
// xmen.nombre= "Ciclope";
// xmen.peleasGanadas= 4;
// xmen.otroAtributo= "otroAtributo";
// enviarMision(xmen);
var XMEN2 = /** @class */ (function () {
    function XMEN2() {
    }
    XMEN2.prototype.miMetodo = function () {
        return "HOLA";
    };
    return XMEN2;
}());
var xmen2 = new XMEN2();
console.log(xmen2.miMetodo());
/*
EXAMEN PRE PARCIAL
CLASE STRUCT ANIMAL.ts
    NOMBRE
    EDAD
    PATAS
CLASE MASCOTA extends ANIMAL.ts
le agrega a los que ya tiene:
    ID -> int
    TIPO -> es un enum Tipomascotas.ts{
        perro
        gato
        reptil
        roedor
        ave
        pez
    }
    de acuerdo el tipo, tiene que mostrarlo (usando filter)


animal mascota y enumerado en un mismo namespace.

aplicaciones en app.ts
NO EN EL MISMO NAMESPACE

hay que hacer las validaciones de todo.

Hacer un ABM en el localstorage ->setitem(´) array que trae el localstorage
                                ->getitem(´)
                                ->clear()
la primera vez viene como null.
array.mascotas(push) para agregar.






*/ 
