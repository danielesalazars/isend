jQuery(document).ready(function($) {

  $("#header ul li.dropdown").hover(function(){
    $(this).toggleClass('show')
    $(this).find(".dropdown-menu").toggleClass('show')
  })
  //cambiar esto para el submit de contacto
  // $(".cardContactoEmpresa").hover(function(){
  //   $(this).find("#contactoEmpresa").toggleClass('d-none');
  //   $(".gracias").toggleClass('d-none');
  // })
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
    setTimeout(function () {
      $("#menuFloat .contenedor").toggleClass('active');
      $("#menuFloat").toggleClass('active');

      setTimeout(function () {
        $("#menuFloat").toggleClass('d-none');
      },1000)

    }, 300)
  })

  //Datepicker
  $('.datepicker').datepicker();

  // $(window).on("load", function () {
  //     alert("Window Loaded");
  // });
  //validando motorizados
  if ( $( ".cardContactoEmpresa .was-validated" ).length ) {
    console.log("hola");
}

});

//validacion de bootstrap 4
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();