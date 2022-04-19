$(document).ready(function(){
    
    
    //Metodo load 
    // en este caso cargue todo el contenido de ese link dentro de un div
    
    //   $('#datos').load('https://reqres.in/')


    //get y post

 $.get("https://reqres.in/api/users",{page:2},function(response){
    response.data.forEach((element,index)=>{
        $("#datos").append("<p>"+ element.first_name+" "+element.last_name+"</p>");
    })
})

  var  usuario = {
      name:"Pedro Perez Pereira",
      web:"google.cl"
     }
 $.post("https://reqres.in/api/users", usuario, function(response){
     console.log(response);
 })

 //Post desde un formulario

 $('#formulario').submit(function(e){
     e.preventDefault();
     var usuario = {
         name: $('input[name = name]').val(),
         web: $('input[name=web]').val()
     }
    $.post($(this).attr('action'),usuario, function(response){
        console.log(response);
    })
    return false;
 })
})