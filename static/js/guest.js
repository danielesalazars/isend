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
  // $(window).on("load", function () {
  //     alert("Window Loaded");
  // });

});