var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;

$(document).ready(function() {
    $("body").on("contextmenu", "img", function(e) {
        return false;
      });
});