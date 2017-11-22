
 namespace Clases {
    

        export abstract class Animal {
        
            
          
            private _nombre:string;
            private _edad:number;
            private _cantPatas:number;
            
            //Creo un array? segun el evento debo buscar algo que me traiga el
            //array de animales para acceder con la i
            public arrayanimales: JSON[];

            constructor(nombre:string,edad:number,cantPatas:number) {
                
                this._nombre=nombre;
                this._edad=edad;
                this._cantPatas=cantPatas;
                  //Inicializar el array?
                // let arrayanimal:JSON
                // this.arrayanimales=arraynew[];
                
            }

            
            public get array() : JSON[] {
                return this.arrayanimales;
            }
            
            
            protected get Nombre() : string {
               
                return this._nombre;
            }
            
            public animalCompleto():string {
                
                return `${this._nombre},${this._edad},${this._cantPatas}`;
            }
           
            public toJson():string{
                
                return  this.animalCompleto();
                
            }
            // public toArray(): Array{

            // }

           
            
        }
}