
 namespace Clases {
    

        export abstract class Animal {
        //////////////VARIABLES//////////////   
            private _nombre:string;
            private _edad:number;
            private _cantPatas:number;
            
            public arrayanimales: JSON[];

            constructor(nombre:string,edad:number,cantPatas:number) {
                
                this._nombre=nombre;
                this._edad=edad;
                this._cantPatas=cantPatas;
            }

        //////////////METODOS//////////////            
            public get array() : JSON[] {
                return this.arrayanimales;
            }
            
            public animalCompleto():string {
                return `${this._nombre},${this._edad},${this._cantPatas}`;
            }
           
            public toJson():string{
                return  this.animalCompleto();
            }

           
            
        }
}