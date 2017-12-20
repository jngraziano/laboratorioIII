namespace Clases 
{          
    export abstract class Persona 
    {
        private _nombre:string;
        private _edad:number;  
        private _sexo:string; 
        //Variables agregadas
        public ciudad:tipoCiu;
        public pais:tipoNac; 

        constructor(nombre:string,edad:number,sexo:string,pais:tipoNac,ciudad:tipoCiu) 
        {
            this._nombre=nombre;
            this._edad=edad;
            this._sexo=sexo;  
            this.pais=pais;
            this.ciudad=ciudad;  
        }
            
        public get Nombre() : string 
        {
            return this._nombre;
        }
        
        public get Edad() : number 
        {
            return this._edad;
        }

        public get Sexo() : string
        {
            return this._sexo;
        }

        public personaCompleta() : string 
        {
         return `${this._nombre};${this._edad};${this._sexo}`;
        }
            
        public toString():string
        {
            return this.personaCompleta(); 
        }
    }
}