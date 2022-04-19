$(document).ready(function(){
    
    $('#mostrar').click(function(){
        $('#caja').show('fast');
    })
    $('#ocultar').click(function(){
        $('#caja').hide('slow');
    })



    $('#mostrar2').click(function(){
        $('#caja2').fadeIn('slow');
    })
    $('#ocultar2').click(function(){
        $('#caja2').fadeOut('slow');
    })


    $('#mostrar3').click(function(){
        $('#caja3').toggle('slow'); //toggle tiene fadetoggle slidetoggle etc.
    })

    $('#animar').click(function(){
        $('#caja4').animate({
                             marginLeft:'500px',
                             fontSize:'40px',
                             height:'110px'

                            },'slow')
                    .animate({
                        borderRadius:'900px',
                        marginTop:'80px'

                            },'slow')  
                    .animate({
                        borderRadius:'0px',
                        marginLeft:'0px'
                    },'slow')
                    .animate({
                        borderRadius:'100px',
                        marginTop:'0px'
                    },'slow')              

    })
})