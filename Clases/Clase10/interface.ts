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


