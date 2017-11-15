interface IXmen{
    nombre:string;
    peleasGanadas:number;
    otroAtributo: string;
    miMetodo():string;
}
function enviarMision(xmen:IXmen){
    
    console.log(xmen.nombre);
    
}
// let xmen:IXmen;
// xmen.nombre= "Ciclope";
// xmen.peleasGanadas= 4;
// xmen.otroAtributo= "otroAtributo";

// enviarMision(xmen);

class XMEN2 implements IXmen{
    miMetodo(): string {
        return "HOLA";
    }

    nombre: string;
    peleasGanadas: number;
    otroAtributo: string;
    // recordar usar la bombilla que va agregando codigo si agrego variables en la interface
    

  
}
let xmen2:XMEN2 = new XMEN2();
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