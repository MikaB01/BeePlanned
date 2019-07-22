// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .
//= require turbolinks
//= require rails-ujs
//= require activestorage
//= require jquery3
//= require jquery-migrate-min
//= require popper
//= require bootstrap-sprockets
//= require location.js
//= require hive.js

$(document).ready(function() {

    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('yellow');
        $('a').addClass('black');

    }

    else {
        $('nav').removeClass('yellow');
        $('a').removeClass('black');
    }
});