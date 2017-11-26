/// <reference path="node_modules/@types/jquery/index.d.ts" />
 

// namespace Clases{
// jQuery:
    //copio la carpeta node modules o uso npm init
    // npm install --save @types/jquery
    //recordar que debe ir primero de todo.
        //////////////EVENTOS//////////////
    $(function(){
        
            //FORM MODIFICADO POR CHECKBOX
            $("#checkFORM :checkbox").change(function() {
                encabezadoCheck();
            });
        
            encabezadoCheck();
        
            var i = 0;
            let select = $("#tipo");
            for (var i = 0; i < 6; i++) 
            {
                select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
            }
            mostrarMascotas();
        });
        //////////////METODOS//////////////
        function LimpiarLista():void
        {
               localStorage.clear();
               mostrarMascotas();
        }
        function encabezadoCheck()
        {
            var checkboxON = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
            tablaDinamica(checkboxON);
        }

        
        function tablaDinamica(checkboxON) 
        {
            //CHEQUEO SI ESTAN LOS TILDES DE CHECK O NO 
            if(checkboxON.length != 0)
            {
                let row_name = checkboxON;
                let cabecera = $("#tCabecera");
                cabecera["0"].innerHTML ="";
                // cabecera.append(`<tr class="info">`);
                row_name.forEach(element => 
                {
                    if (element != "") 
                    {
                        let cabeceraArmada = $('<th>' + element + '</th>');
                        cabecera.append(cabeceraArmada);
                    } 
                });
                
               
                //CUERPO DE LA TABLA
                let MascotasString:string|null =  JSON.parse(localStorage.getItem("Mascotas") || "[]");
                
                let tabla = $("#tCuerpo");
                tabla["0"].innerHTML ="";
        
                for (var i = 0; i < MascotasString.length ; i++) 
                {
                    let mascotaActual = JSON.parse(MascotasString[i]);
                    //AGREGO LAS COLUMNAS SEGUN VAYAN O NO
                    tabla.append("<tr>");
        
                    checkboxON.includes("ID")       == true ? tabla.append("<td>"+mascotaActual._id                         + "</td>") : null ; 
                    checkboxON.includes("NOMBRE")   == true ? tabla.append("<td>"+mascotaActual._nombre                     + "</td>") : null ; 
                    checkboxON.includes("EDAD")     == true ? tabla.append("<td>"+mascotaActual._edad                       + "</td>") : null ; 
                    checkboxON.includes("TIPO")     == true ? tabla.append("<td>"+Clases.tipoMascota[mascotaActual._tipo]   + "</td>") : null ; 
                    checkboxON.includes("CANTPATAS")== true ? tabla.append("<td>"+mascotaActual._cantPatas                  + "</td>") : null ; 
                    tabla.append("</tr></table>");
                }
        
            }
            else
            {  
                let cabecera = $("#tCabecera");
                cabecera["0"].innerHTML ="";
                var devuelve =  "<th>ID</th>"       +
                                "<th>NOMBRE</th>"   +  
                                "<th>EDAD</th>"     +
                                "<th>TIPO</th>"     +  
                                "<th>CANTPATAS</th>";
                cabecera.append(devuelve);
        
                mostrarMascotas();
            }
        }

 function agregarMascota(): void {
    
    // FORMA 1: Asginado en variables
        // let id: number = Number ($('#ID').val());
        // let nombre: string = String ($('#nombre').val());
        // let edad: number = Number ($('#edad').val());
        // let tipo: Clases.tipoMascota = Number ($('#tipo').val());
        // let cantPatas: number = Number ($('#cantidadpatas').val());
    // FORMA 2: ASIGNO USANDO document.getElementById

        // let id:number = Number (document.getElementById("ID").value);
        // let nombre:string = String (document.getElementById("nombre").value);
        // // let tipo: Clases.tipoMascota = Number ($(selecTipo).val());
        // let tipo: string = String (document.getElementById("tipo").value);
        // let edad: number = Number (document.getElementById("edad").value);
        // let cantPatas: number = Number (document.getElementById("cantidadpatas").value);
    // FORMA 3: Creo directamente el objeto mascota

         //si quiero pasarselo con una variable ya guardada
        // let tipo: Clases.tipoMascota = Number($('#tipo').val());
       
        let tipo: Clases.tipoMascota  = Number($('#tipo').val()); 
        let nuevaMascota = new Clases.Mascota(  String ($('#nombre').val()),
                                                Number ($('#edad').val()),
                                                Number ($('#cantidadpatas').val()),
                                                Number ($('#id').val()),
                                                tipo
                                                );
        
        let MascotasString  = JSON.parse(localStorage.getItem("Mascotas") || "[]");
        // //la primera vez no hay nada, las otras veces string
        // let MascotasJson : JSON[] = MascotasString.length == 0 ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
            MascotasString.push( JSON.stringify(nuevaMascota));
            localStorage.setItem("Mascotas",JSON.stringify(MascotasString));
            
        console.log(MascotasString);
        alert ("Mascota guardada");
        mostrarMascotas(); 
    }

    function mostrarMascotas():void
    {
        let MascotasString:string|null =  JSON.parse(localStorage.getItem("Mascotas") || "[]");
        
        let tabla = $("#tCuerpo");
        tabla["0"].innerHTML ="";
        for (var i = 0; i < MascotasString.length ; i++) 
        {
            let mascotaActual = JSON.parse(MascotasString[i]);
            let miTipo = Clases.tipoMascota[mascotaActual._tipo];
    
            let varAppend = "<tr><td>"  + mascotaActual._id                         + "</td>"+
                            "<td>"      + mascotaActual._nombre                     + "</td>"+
                            "<td>"      + mascotaActual._edad                       + "</td>"+
                            "<td>"      + Clases.tipoMascota[mascotaActual._tipo]   + "</td>"+
                            "<td>"      + mascotaActual._cantPatas                  + "</td></tr>"       
            tabla.append(varAppend); 
       }
    }








        ///INFO LEAN///

       // function verificarCheck() {
            
         //     var row_name = $("#checkFORM : checkbox").val();
            
         //     alert(row_name);
            
         //     if (row_name != "") {
         //         var row = $('<tr><td>' + row_name + '</td></tr>');
         //         $('input[type="checkbox"]').each(function() 
         //         {
         //             if ($(this).is(':checked')) 
         //             {
         //                row.append('<td><input class="txtfld" type="text" placeholder="edit"></td>')
         //             } 
         //             else 
         //             {
         //                  row.append('<td></td>')
         //             }
         //         })
         //         row.append('<td></td>')
         //         $("table.printer-row tbody tr:last").before(row)
         //     }
             
         // }
               





        // function boxChange(type)
        // {
        // var checkedValues = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
        // var uncheckedValues = $('input:checkbox:not(:checked).checkItems').map(function() { return this.value; }).get();

        //     if(type == "not"){
        //         return uncheckedValues;
        //     } else {
        //         return checkedValues;
        //     } 
        // }

        // $(":checkbox").change(function() {
        // $("#checkItems").change(function() {
        //     // boxChange();
        //     alert("estoy aaca");
        //     boxChange("not");
        // });


        // // Only Needed For Buttons
        // $("body").on("click", "button#chk1", function() {
        //     alert (boxChange());
        // });
        // $("body").on("click", "button#chk2", function() {
        //     alert (boxChange("not"));
        // });

        //         limpiarCampos();
        //             $txtnombred.val("")
        //             a selectipo le da 0
        //             y que ponga foco en txtid



// } CORCHETE DE NAMESPACE 
