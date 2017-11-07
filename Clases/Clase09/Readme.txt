CLASE09

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