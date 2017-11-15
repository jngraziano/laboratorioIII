//CLASES 
//  PROPRIEDADES, CONSTRUCTORES, METODOS

//COMENTA  EL  "strict": true para que funcione esta pija
//Es un warning de strict para no manejar undefinied

class Avenger{
    private _nombre:string;
    nombreReal:string;
    peleasGanadas:number;

    constructor (nombreReal:string, peleasGanadas:number,nombre?:string){
        //cuando pongo el signo de pregunta, tengo que sacar el strict del tsconfig.json
             this._nombre=nombre;
             this.nombreReal=nombreReal;
             this.peleasGanadas=peleasGanadas;
         }

    mostrar():string{
        return `${this._nombre}, ${this.nombreReal}, ${this.peleasGanadas}`;
    }

    get nombre():string{
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

}


 
class Xmen extends Avenger {
    private _poder:string;
    constructor (nr:string,pg:number,n:string,p:string){
        super(nr,pg,n);
        this._poder=p;
    }

    mostrar():string{
        return super.mostrar() + this._poder;
    }
}

class Apocalipsis {
    private static _instance:Apocalipsis;
    
    private constructor(public nombre:string) {
        //cuando le pasamos public esta creando uno nuevo
        
    }
    static get Instance():Apocalipsis{
        if(!(this._instance)){
            this._instance = new Apocalipsis("HEEELL");
        }

        return this._instance;

    }
}

console.log(Apocalipsis.Instance);


let a1:Avenger = new Avenger("Iron Man",10,"Tony");
let a2:Avenger = new Avenger("Bruce",22);
// a1.nombreReal = "Tony";
// a1.peleasGanadas = 10;
console.log(a1.mostrar());
console.log(a1);
/////////////////////
let x1:Xmen = new Xmen("Logan",50,"Wolverine","Garras, Regeneracion");
x1.mostrar();

let array = new Array<Avenger>();
array.push(a1);
array.push(x1);