(function($) {

    window.alert("Hallo ich bin location.js :D");

    $('.reset_all').click(function () {
        $(document).css("all", "initial");
        document.getElementById('img_new_location').classList.remove('zoomed');
        document.getElementById('img_new_location').classList.remove('unzoomed');
        document.getElementById('new_location_heading').classList.remove('hide');
        document.getElementById('new_location_form').classList.remove('show_form')


        document.getElementById('new_location_heading').classList.add('show');
        document.getElementById('new_location_heading').classList.add('shown');
        document.getElementById('new_location_form').classList.add('hide');
        document.getElementById('new_location_form').classList.add('hidden');

        document.getElementById('img_show_all_location').classList.remove('zoomed');
        document.getElementById('img_show_all_location').classList.remove('unzoomed');
        document.getElementById('show_all_location_heading').classList.remove('hide');
        document.getElementById('show_all_location_table').classList.remove('show_form')


        document.getElementById('show_all_location_heading').classList.add('show');
        document.getElementById('show_all_location_heading').classList.add('shown');
        document.getElementById('show_all_location_table').classList.add('hide');
        document.getElementById('show_all_location_table').classList.add('hidden');
    });

//New Location
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
    $(document).on("mouseenter", '#show_location_comp', function () {
        $('#close_show').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#close_show', function () {
        $('#close_show').css("color", "#f2d002");
    });

    $(document).on("click", '#location_name_unzoomed', function () {
        switch_active_class(document.getElementById('location_name_unzoomed'), 'show', 'hide');
        document.getElementById('location_name_unzoomed').classList.add('hidden');
        switch_active_class(document.getElementById('img_show_location'), 'zoomed_show', 'unzoomed_show');
        switch_active_class(document.getElementById('show_location_table'), 'show_form', 'hide');
        document.getElementById('new_hive_comp').classList.add("hidden");
    });

    $(document).on("mouseleave", '#show_location_comp', function () {
        $('#close_show').css("color", "transparent");
    });

    $(document).on("mouseleave", '#close_show', function () {
        $('#close_show').css("color", "#34322c");
    });

    $(document).on("click", '#close_show', function () {
        switch_active_class(document.getElementById('img_show_location'), 'zoomed_show', 'unzoomed_show');
        switch_active_class(document.getElementById('show_location_table'), 'show_form', 'hide');
        document.getElementById('show_location_table').classList.add('hidden');
        document.getElementById('location_name_unzoomed').classList.remove('hide');
        document.getElementById('location_name_unzoomed').classList.add('show');
        document.getElementById('location_name_unzoomed').classList.remove('hidden');
        document.getElementById('new_hive_comp').classList.remove("hidden");
    });


    $('#activate_coordinate_input').on("click", function () {
        if (!hasClass(document.getElementById('no-coordinate-input-form'), 'hidden')) {
            document.getElementById('no-coordinate-input-form').classList.add('hidden');
            document.getElementById('coordinate-input-form').classList.remove('hidden');
            $('#slider_row').css("color", "#f2d002");
        } else {
            document.getElementById('coordinate-input-form').classList.add('hidden');
            document.getElementById('no-coordinate-input-form').classList.remove('hidden');
            $('#slider_row').css("color", "#777");
        }
    });

    $('#close_add_form').on("click", function () {
        switch_active_class(document.getElementById('img_new_location'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('new_location_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_location_form'), 'show_form', 'hide');
    });

    $('#close_show_all_table').on("click", function () {
        switch_active_class(document.getElementById('img_show_all_location'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('show_all_location_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('show_all_location_table'), 'show_form', 'hide');
    });

    $("#new_location_heading").unbind("click").click(function () {
        switch_active_class(document.getElementById('img_new_location'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('new_location_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_location_form'), 'show_form', 'hide');
        $('#show_all_location_comp').css("z-index", "0");
        $('#new_location_comp').css("z-index", "10");
        return false;
    });

    $("#show_all_location_heading").unbind("click").click(function () {
        switch_active_class(document.getElementById('img_show_all_location'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('show_all_location_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('show_all_location_table'), 'show_form', 'hide');
        $('#new_location_comp').css("z-index", "0");
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

