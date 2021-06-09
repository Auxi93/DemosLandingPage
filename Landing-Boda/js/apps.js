

$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop:'0px'
        }, 300);
    });
    $(window).scroll(function(){
       
        if($(this).scrollTop() > 0){
            $('.ir-arriba').slideDown(300);
        } else{
            $('.ir-arriba').slideUp(300);
        }
    });
});

// 1º PARTE
// 1º) Creamos una función $(document).ready(function(){}
// 2º) Queremos (quién )nuestro botón .ir-arriba (cuándo) hacemos click
// (qué va a hacer) va a ejecutar una función.
// 3º) (quién) body (cuándo) animate (qué) scrolltop '0px' --> subir

// 2º PARTE

// Si el scroll que va hacia arriba es mayor a cero 
// nuetra clase .ir-arriba va a desaparecer (SlideDown)
//  entre () añadiremos el tiempo.
//  Pero si el scroll va hacia abajo la clase .ir-arriba va a aparecer
//  (eso es el else)