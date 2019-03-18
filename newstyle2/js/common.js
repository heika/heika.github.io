var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;

$(document).ready(function() {
    $("body").on("contextmenu", "img", function(e) {
        return false;
      });
    $('.topnav button').click(function(e) {
      $('.topnav .menu, .hamburger, .cross').toggle();
    })
});