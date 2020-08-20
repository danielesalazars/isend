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
  $("#header button").click(function(){
      $("#menuFloat").toggleClass('d-none');
    //activando efecto de derecha a izquierda
    setTimeout(function () {
      $("#menuFloat").toggleClass('active');
      $("#menuFloat .contenedor").toggleClass('active');
    }, 300)
  })

  //click a menu float moviles y click a close moviles
  $("#close").click(function(){
    $("#menuFloat").toggleClass('active');
    $("#menuFloat .contenedor").toggleClass('active');
    //activando efecto de derecha a izquierda
    setTimeout(function () {
      $("#menuFloat").toggleClass('d-none');
    }, 300)

  })

  // $(window).on("load", function () {
  //     alert("Window Loaded");
  // });

});