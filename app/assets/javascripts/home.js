$(document).ready(function() {

    window.alert("Hallo ich bin home.js :D");

    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });

    // Scrolling Effect

    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('nav').addClass('black');

        }

        else {
            $('nav').removeClass('black');
        }
    });
});
