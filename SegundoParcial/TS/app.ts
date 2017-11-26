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
                var checkedValues = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();
                //     var uncheckedValues = $('input:checkbox:not(:checked).checkItems').map(function() { return this.value; }).get();
                tablaDinamica(checkedValues);
            });
        
            var i = 0;
            let select = $("#tipo");
            for (var i = 0; i < 6; i++) 
            {
                select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
            }
            mostrarMascotas();
        });



        //////////////METODOS//////////////

        function tablaDinamica(checkedValues) 
        {
            let row_name = checkedValues;
            // let estiloCabeceraAp="<tr class='info'>";
            let cabecera = $("#tCabecera");
            cabecera["0"].innerHTML ="";
            // cabecera.append(estiloCabeceraAp);
            if(row_name.length== 0){
                // alert("Estoy aca");
                

            }
            else{
            row_name.forEach(element => 
            {
                if (element != "") 
                {
                    // let cabeceraArmada = "<th>"+element+"</th>";
                    let cabeceraArmada = $('<th>' + element + '</th>');
                    cabecera.append(cabeceraArmada);
                }
                
            });}
            // let estiloCabeceraCI="</tr>";
            // cabecera.append(estiloCabeceraCI);
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
       
    let nuevaMascota = new Clases.Mascota(String ($('#nombre').val()),
                                              Number ($('#edad').val()),
                                              Number ($('#cantidadpatas').val()),
                                              Number ($('#ID').val()), 
                                              Number($('#tipo').val())
                                            );

    let MascotasString:string|null = localStorage.getItem("Mascotas");
    
    //la primera vez no hay nada, las otras veces string

    let MascotasJson : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString); // ESTO ES UN IF        
    
    MascotasJson.push( JSON.parse(nuevaMascota.toJson()));

    localStorage.setItem("Mascotas",JSON.stringify(MascotasJson));

    alert ("Mascota guardada.");

    // console.log(MascotasJson); //para ver el cargado

    // let devuelve = localStorage.getItem("Mascotas") // Para ver que devuelve el localstorage
    // console.log(devuelve);


    mostrarMascotas();

    }

    function LimpiarLista():void {
        localStorage.clear();
        mostrarMascotas();
    }

    function mostrarMascotas(): void {
    
        let MascotasString:string|null = localStorage.getItem("Mascotas");
        let MascotaJSON : JSON[] = MascotasString == null ? [] : JSON.parse(MascotasString);

        //para que no muestre 2 veces la misma tabla:
        let tabla = $("#tCuerpo");
        tabla["0"].innerHTML = "";

            for (var i = 0; i < MascotaJSON.length; i++) 
            {
                let tipoMandar: Clases.tipoMascota = MascotaJSON[i].split(',')[4];
                
                // select.append("<option value="+i+">"+Clases.tipoMascota[i]+"</option>");
              
                let variable = "<tr><td>"+ MascotaJSON[i].split(',')[3] + "</td>"+
                "<td>"+     MascotaJSON[i].split(',')[0] + "</td>"+
                "<td>"+     MascotaJSON[i].split(',')[1] + "</td>"+
                "<td>"+     Clases.tipoMascota[MascotaJSON[i].split(',')[4]] + "</td>"+
                "<td>"+     MascotaJSON[i].split(',')[2] + "</td></tr>";

                //tabla.append("${Clases.tipoMascota[MascotaJSON[i].nombre]}<td td> ");
               

                tabla.append(variable);
                
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
