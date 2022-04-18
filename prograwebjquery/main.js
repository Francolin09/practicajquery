$(document).ready(function(){
    


    $("#sumar").click(function(){
        var n1=parseInt( $("#inputNumero1").val());
        var n2=parseInt($("#inputNumero2").val());
        var resultado = n1+n2

        $("#resultado").val(resultado)
    })
});