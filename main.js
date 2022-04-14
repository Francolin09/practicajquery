$(document).ready(function(){

    $("#p1").css("background","green");
    $("#p2").css("background","yellow");
    $("#p3").css("background","red");

    $('.hola').css("padding","5px");

    var chao = $('.chao');

    

    $('.sin-borde').click(function(){
        $(this).addClass('zebra');
    })

   var parrafos = $('h1');

   parrafos.click(function(){
       var that = $(this);
       if(!that.hasClass('grande')){
           that.addClass('grande')
       }else{
           that.removeClass('grande')
       }
   })
})