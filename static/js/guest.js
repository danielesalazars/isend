jQuery(document).ready(function($) {

  $("#header ul li.dropdown").hover(function(){
    $(this).toggleClass('show')
    $(this).find(".dropdown-menu").toggleClass('show')
  })
  //cambiar esto para el submit de contacto
  $(".cardContactoEmpresa").hover(function(){
    $(this).find("#contactoEmpresa").toggleClass('d-none');
    $(".gracias").toggleClass('d-none');
  })
  //click a menu float moviles y click a close moviles
  $("#header button, #close").click(function(){
    //activando efecto de derecha a izquierda
    setTimeout(function () {
      $("#menuFloat").toggleClass('active');
      $("#menuFloat .contenedor").toggleClass('active');
    }, 300)
  })

  // $(window).on("load", function () {
  //     alert("Window Loaded");
  // });

});