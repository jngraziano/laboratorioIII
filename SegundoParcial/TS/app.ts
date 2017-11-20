//  namespace Clases{
   
$(function()){
        localStorage.clear();
}

    function agregarMascota() {
    
    // Asginado en variables
        let id: number = Number ($('#ID').val());
        let nombre: string = String ($('#nombre').val());
        let edad: number = Number ($('#edad').val());
        let tipo: Clases.tipoMascota = Number ($('#tipo').val());
        let cantPatas: number = Number ($('#cantidadpatas').val());
       
       
    //ASIGNO USANDO document.getElementById

        // let id:number = Number (document.getElementById("ID").value);
        // let nombre:string = String (document.getElementById("nombre").value);
        // // let tipo: Clases.tipoMascota = Number ($(selecTipo).val());
        // let tipo: string = String (document.getElementById("tipo").value);
        // let edad: number = Number (document.getElementById("edad").value);
        // let cantPatas: number = Number (document.getElementById("cantidadpatas").value);
        
    //Creo directamente el objeto mascota
        let nuevaMascota = new Clases.Mascota(String ($('#nombre').val()),
                                              Number ($('#edad').val()),
                                              Number ($('#cantidadpatas').val()),
                                              Number ($('#ID').val()), 
                                              Number ($('#tipo').val()));

         //let nuevaMascota = new Clases.Mascota(nombre,edad,cantPatas,id,tipo);


        // alert (nuevaMascota);
       // console.log(nuevaMascota);
        

        
  
        let MascotasString:string|null = localStorage.getItem("Mascotas");
        //la primera vez no hay nada, las otras veces string
        console.log(nuevaMascota);
        
            let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(nuevaMascota.toJson()); // ESTO ES UN IF
            console.log(nuevaMascota.toJson()); //ver como anda

            MascotasJson.push(JSON.parse(nuevaMascota.toJson()));

             localStorage.setItem("Mascotas",JSON.stringify(MascotasJson));

             alert ("Mascota guardada");
   
     }
    // let MascotasString:string|null = localStorage.getItem("Mascotas");
    // //la primera vez no hay nada, las otras veces string

    //     let MascotasJson : JSON[] = MAscotaString == null ? [] : JSON.parse(MascotaNueva.Json()); // ESTO ES UN IF
    //     console.log(nuevaMascota.toJson()); //ver como anda

    //     MascotassJson.push(Json.parse(nuevaMascota.toJSON()));

    //     localStorage.setItem("Mascotas",JSON.stringify(MascotasJSON));

        // alert ("Mascota guardada");

//         mostrarMascotas();
//             let MascotasJson : Clases.Mascota[i].id
//             armo la tabla como el primer parcial con el fastix
//             #divtabla.html(tabla);

//         limpiarCampos();
//             $txtnombred.val("")
//             a selectipo le da 0
//             y que ponga foco en txtid

// armo el json con un array de mascotas

