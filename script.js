var main = function () {
  $('.login').click(function(){
    $('.login .dropdown-menu').toggle();
  });
  $(function() {
    $( "#accordion" ).accordion();
  });

};
$(document).ready(main);