CLASE09

Empezamos a hacer los scripts.js

TYPESCRIPT
**recuerdo clase pasada COMO INSTALAR TYPESCRIPT**
hago carpeta e index y un ts
CONTROL + Ñ PARA LA CONSOLA
si no lo tenemos tipyscrip tenemos que poner 
npm install -g typescript
(-g para que lo instale en todo)
LISTO

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
pagina que explica como.

ponemos (RECORDAR BIEN LA CARPETA) tsc app para que compile.
ponemos tsc -init para crear el json con opciones (inicializa el javascript)
ponemos tsc -w para que haga los cambios en tiempo real (la transpiraciòn en el JS)
recordar usar ctrl + s para que vaya haciendo el proceso de la transpiracion.
recordar no trabajar sobre el JS claramente.


diferencias entre var(variable global) y let(variable de poco alcance)
let:
como declarar el tipo de dato con let:
let esSuperman:boolean = true;
let esBatman:boolean;
let esAquaman = true; (al pasarle true sabe que es un booleano.)
tipo de dato any (le puedo guardar cualquier cosa)
Array igual que JS pero le podemos definir que tipo de dato tiene.
let vector:number[] = [1,2,3,4,5,6];
tipo de dato tuplas (es un array que puede tener distintos tipos)
let heroe:[string, number] = ["Dr.Strange",100];
enumeraciones:
enum.Especialidades{
    pediatra,
    cardiologo,
    clinico,
}
funciones basicas:
let heroe:string ="Flash";
function imprime_heroe():string{
    return heroe;
}
parametros obligatios
parametros opcionales (se usa ? para indicar que una variable que recive puede ser que venga o no -> apellido?string)
tipo funcion

practica1
tipar todo para que pueda compilar.
