$(document).ready(function() {

    $("#new_super_heading").unbind("click").click(function () {
        switch_active_class(document.getElementById('img_new_super'), 'zoomed_super_add', 'unzoomed_super_add');
        switch_active_class(document.getElementById('new_super_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_super_form'), 'show_form', 'hide');
        $('#new_super').css("z-index", "10");
    });

    $('#close_add_form').unbind("click").click(function () {
        switch_active_class(document.getElementById('img_new_super'), 'zoomed_super_add', 'unzoomed_super_add');
        switch_active_class(document.getElementById('new_super_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_super_form'), 'show_form', 'hide');
    });

    //Add Super
    $(document).on("mouseenter", '#new_location_comp', function () {
        $('#close_add_form').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#close_add_form', function () {
        $('#close_add_form').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '#new_location_comp', function () {
        $('#close_add_form').css("color", "transparent");
    });

    $(document).on("mouseleave", '#close_add_form', function () {
        $('#close_add_form').css("color", "#34322c");
    });

    function switch_active_class(element, class_name1, class_name2) {
        if (hasClass(element, 'hidden')) element.classList.remove('hidden');
        if (hasClass(element, 'shown')) element.classList.remove('shown');

        if (hasClass(element, class_name1)) {
            element.classList.remove(class_name1);
            element.classList.add(class_name2);
        } else {
            element.classList.remove(class_name2);
            element.classList.add(class_name1);
        }
    }

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

});

