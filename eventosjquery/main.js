$(document).ready(function(){
    alert("eventos cargados")

    //mouseover y mouseout son metodos especificos para cuando se hace ingresa el cursor y cuando se saca
    
    var caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css('background','red');
    })
    caja.mouseout(function(){
        $(this).css('background','green');
    })*/

    //hover --El metodo hover permite recibir dos funciones para definir de una sola sola el comportamiento al ingresar y sacar el cursor
    function cambiaRojo(){
        $(this).css('background','red');
    }

    function cambiaVerde(){
        $(this).css('background','green');
    }
    caja.hover(cambiaRojo,cambiaVerde);

    //click y doble click

    caja.click(function(){
        $(this).css('background','blue')
               .css('color','white');
    });

    caja.dblclick(function(){
        $(this).css('background','pink')
               .css('color','black');
    });

    //focus y blur
    var datos = $('#datos');

    $('#nombre').focus(function(){
        $(this).css('border','3px solid green');
    });

    $('#nombre').blur(function(){
        $(this).css('border','3px solid pink');
         var contenido= $(this).val();
        datos.text(contenido).show();
    });

    //mousedown y mouseup
    datos.mousedown(function(){
        $(this).css('border-color','gray')
    })

    datos.mouseup(function(){
        $(this).css('border-color','red')
    })
     
    //mousemove indica la coordenada donde se encuentra el mouse
    $(document).mousemove(function(){
        console.log(event.clientX);
        console.log(event.clientY);
        console.log('----------------------------')
        //con esto de abajo hago que el circulo siga al mouse hehe
        $('#sigueme').css('left',event.clientX);
        $('#sigueme').css('top',event.clientY)
    })
})