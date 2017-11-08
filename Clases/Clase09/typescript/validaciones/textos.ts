namespace Validaciones{
    
    export function validarCadena(texto:string):boolean{
        // USAMOS EXPORT PARA QUE SE PUEDA VER DE AFUERA. ES COMO UN PUBLIC.   
        //se puede usar para funciones como para variables.
            if(texto.length > 3)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        console.log(Validaciones.validarCadena("Juan"));
        //llamo usando el namespace
    
    }
        
       
