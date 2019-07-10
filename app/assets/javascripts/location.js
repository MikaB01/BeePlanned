//New Location
$(document).on("mouseenter", '#new_location_comp', function(){
    $('#close_add_form').css("color", "#34322c");
});

$(document).on("mouseenter", '#close_add_form', function(){
    $('#close_add_form').css("color", "#f2d002");
});

$(document).on("mouseleave", '#new_location_comp', function(){
    $('#close_add_form').css("color", "transparent");
});

$(document).on("mouseleave", '#close_add_form', function(){
    $('#close_add_form').css("color", "#34322c");
});

//All Locations
$(document).on("mouseenter", '#show_all_location_comp', function(){
    $('#close_show_all_table').css("color", "#34322c");
});

$(document).on("mouseenter", '#close_show_all_table', function(){
    $('#close_show_all_table').css("color", "#f2d002");
});

$(document).on("mouseleave", '#show_all_location_comp', function(){
    $('#close_show_all_table').css("color", "transparent");
});

$(document).on("mouseleave", '#close_show_all_table', function(){
    $('#close_show_all_table').css("color", "#34322c");
});

/*
$("#new_location_comp").on({
    mouseenter: function () {
        $('#close_add_form').css("color", "red");
    },
    mouseleave: function () {
        $('#close_add_form').css("color", "transparent");
    }
});*/

$(document).on("click", '#activate_coordinate_input', function(){
    if(!hasClass(document.getElementById('no-coordinate-input-form'),'hidden')){
        document.getElementById('no-coordinate-input-form').classList.add('hidden');
        document.getElementById('coordinate-input-form').classList.remove('hidden');
        $('#slider_row').css("color", "#f2d002");
    }
    else {
        document.getElementById('coordinate-input-form').classList.add('hidden');
        document.getElementById('no-coordinate-input-form').classList.remove('hidden');
        $('#slider_row').css("color", "#777");
    }
});

$(document).on("click", '#close_add_form', function(){
    switch_active_class(document.getElementById('img_new_location'), 'zoomed', 'unzoomed');
    switch_active_class(document.getElementById('new_location_heading'), 'show', 'hide');
    switch_active_class(document.getElementById('new_location_form'), 'show_form', 'hide');
});

$(document).on("click", '#close_show_all_table', function(){
    switch_active_class(document.getElementById('img_show_all_location'), 'zoomed', 'unzoomed');
    switch_active_class(document.getElementById('show_all_location_heading'), 'show', 'hide');
    switch_active_class(document.getElementById('show_all_location_table'), 'show_form', 'hide');
});

$(document).on("click", '#new_location_heading', function(){
    switch_active_class(document.getElementById('img_new_location'), 'zoomed', 'unzoomed');
    switch_active_class(document.getElementById('new_location_heading'), 'show', 'hide');
    switch_active_class(document.getElementById('new_location_form'), 'show_form', 'hide');
    $('#show_all_location_comp').css("z-index", "0");
    $('#new_location_comp').css("z-index", "10");
});

$(document).on("click", '#show_all_location_heading', function(){
    switch_active_class(document.getElementById('img_show_all_location'), 'zoomed', 'unzoomed');
    switch_active_class(document.getElementById('show_all_location_heading'), 'show', 'hide');
    switch_active_class(document.getElementById('show_all_location_table'), 'show_form', 'hide');
    $('#new_location_comp').css("z-index", "0");
    $('#show_all_location_comp').css("z-index", "10");
});

function switch_active_class( element, class_name1, class_name2) {
    if(element.classList.contains('hidden')) element.classList.remove('hidden');
    if(element.classList.contains('shown')) element.classList.remove('shown');

    if(hasClass(element, class_name1)) {
        element.classList.remove(class_name1);
        element.classList.add(class_name2);
    }
    else {
        element.classList.remove(class_name2);
        element.classList.add(class_name1);
    }
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}



