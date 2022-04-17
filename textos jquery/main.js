//Lo que se hace aca fue primero con la funcion each recorrer todos los elementos con etiqueta <a>
// que en este caso solo tienen un link de referrencia pero ningun contenido entre las etiquetas
//luego se guarda en la variable enlace el con el metodo attr para obtener el valor de href en cada uno de ellos
//y finalmente a cada etiqueta <a> se le asigna el contenido de su href para mostrarse como link en la pantalla

$(document).ready(function(){
    reloadlinks();
    function reloadlinks(){
    $('a').each(function(index){
        var enlace= $(this).attr("href");
        $(this).text(enlace)
        $(this).attr('target','_blank')//esta linea hara que cuando se abra, lo haga dentro de una nueva pestaña yay
    })}
    //aca se hace que el valor que se ingresa en el input se agregue a la lista de link con append. tambien se puede usar
    //el metodo html pero este pone el valor escrito por sobre todo los existentes, 
    $('#add_button').click(function(){
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
        reloadlinks()
        
    })
});