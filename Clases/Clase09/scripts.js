var soluciones;
//retorna un array con los nombres de los usuarios femeninos
soluciones.usuariosfeminos = function(usuarios){
    return usuarios 
    .filter(function(user){
        return user.genero === 'female';

    })//no lo termina con ;
    .map(function(user){
        return user.nombre;
    });
}

console.log(soluciones.usuariosFemeninos(data));

//retornar un array de strings con el mail de los usuarios de sxo masuclino

//retornar un array de objetos que solo contengan las claves nombres, email y edad, de todos los suuarios mayores que edad

soluciones.usuariosmayores = function (usuarios,edad){
    return usuarios
    .filter(function(user)){
        return user.edad > edad;
    })
    .map(function(user){
        var x={};
        x.nombre = user.nombre;
        x.email = user.email;
        x.edad = user.edad;

        return x;
    });

}

console.log(soluciones.usuarioMayores(data, 40));


//retornar un objeto que contenga solo el nombre y la edad del usuarios mas grandes
soluciones.usuarioMasGrande = function (usuarios){
    return usuarios
    .reduce(function(actual,siguiente){
        if (actual.edad >siguiente.edad){
        return {
            nombre:actual.nombre,
            edad: actual.edad

            //O SINO DEVUELVO ACTUAL SI NO PIDIERA UN OBJETO

           
        }
    }
    return{
        nombre:siguiente.nombre,
        nombre:siguiente.edad
    }
        //O SINO DEVUELVO SIGUIENTE SI NO PIDIERA UN OBJETO
    });
}

//console.log(soluciones.usuarioMasGrande(data));

//retornar el promedio de edad de los usuarios (numbre)

soluciones.promedio =function(usuarios){
    var acumedad = usuarios
    .reduce(function(actual, siguiente){
        return actual + siguiente.edad;
    }, 0);

    var cantidad = usuarios
    .reduce(function(actual,siguiente){
        return actual + 1;
    }, 0);

    return (acumEdad / cantidad).toFixed(2);
}
