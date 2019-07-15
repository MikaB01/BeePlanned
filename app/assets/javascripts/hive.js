$(document).ready(function () {

    $('.reset_all').click(function () {
        $(document).css("all", "initial");
        document.getElementById('img_new_hive').classList.remove('zoomed');
        document.getElementById('img_new_hive').classList.remove('unzoomed');
        document.getElementById('new_hive_heading').classList.remove('hide');
        document.getElementById('new_hive_form').classList.remove('show_form')


        document.getElementById('new_hive_heading').classList.add('show');
        document.getElementById('new_hive_heading').classList.add('shown');
        document.getElementById('new_hive_form').classList.add('hide');
        document.getElementById('new_hive_form').classList.add('hidden');

        document.getElementById('img_show_all_hive').classList.remove('zoomed');
        document.getElementById('img_show_all_hive').classList.remove('unzoomed');
        document.getElementById('show_all_location_heading').classList.remove('hide');
        document.getElementById('show_all_location_table').classList.remove('show_form')


        document.getElementById('show_all_location_heading').classList.add('show');
        document.getElementById('show_all_location_heading').classList.add('shown');
        document.getElementById('show_all_location_table').classList.add('hide');
        document.getElementById('show_all_location_table').classList.add('hidden');
    });

//New Location
    $(document).on("mouseenter", '#new_hive_comp', function () {
        $('#close_add_form').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#close_add_form', function () {
        $('#close_add_form').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '#new_hive_comp', function () {
        $('#close_add_form').css("color", "transparent");
    });

    $(document).on("mouseleave", '#close_add_form', function () {
        $('#close_add_form').css("color", "#34322c");
    });

//All Locations
    $(document).on("mouseenter", '#show_all_location_comp', function () {
        $('#close_show_all_table').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#close_show_all_table', function () {
        $('#close_show_all_table').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '#show_all_location_comp', function () {
        $('#close_show_all_table').css("color", "transparent");
    });

    $(document).on("mouseleave", '#close_show_all_table', function () {
        $('#close_show_all_table').css("color", "#34322c");
    });

    //Show Locations
    $(document).on("mouseenter", '#show_hive_comp', function () {
        $('#back_button').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#back_button', function () {
        $('#back_button').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '#show_hive_comp', function () {
        $('#back_button').css("color", "transparent");
    });

    $(document).on("mouseleave", '#back_button', function () {
        $('#back_button').css("color", "#34322c");
    });

    $('#activate_additional_settings_input').on("click", function () {
        if (hasClass(document.getElementById('additional_settings_input_form'), 'hidden')) {
            document.getElementById('additional_settings_input_form').classList.remove('hidden');
            $('#slider_row').css("color", "#f2d002");
        } else {
            document.getElementById('additional_settings_input_form').classList.add('hidden');
            $('#slider_row').css("color", "#777");
        }
    });

    $('#close_add_form').on("click", function () {
        switch_active_class(document.getElementById('img_new_hive'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('new_hive_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_hive_form'), 'show_form', 'hide');
    });

    $('#close_show_all_table').on("click", function () {
        switch_active_class(document.getElementById('img_show_all_hive'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('show_all_location_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('show_all_location_table'), 'show_form', 'hide');
    });

    $("#new_hive_heading").unbind("click").click(function () {
        switch_active_class(document.getElementById('img_new_hive'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('new_hive_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_hive_form'), 'show_form', 'hide');
        $('#show_all_location_comp').css("z-index", "0");
        $('#new_hive_comp').css("z-index", "10");
        return false;
    });

    $("#show_all_location_heading").unbind("click").click(function () {
        switch_active_class(document.getElementById('img_show_all_hive'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('show_all_location_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('show_all_location_table'), 'show_form', 'hide');
        $('#new_hive_comp').css("z-index", "0");
        $('#show_all_location_comp').css("z-index", "10");
        return false;
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

