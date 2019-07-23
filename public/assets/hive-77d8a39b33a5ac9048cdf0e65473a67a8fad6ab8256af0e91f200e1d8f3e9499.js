(function() {

    //Colorpicker
    _colors=$('._select_color_drop li');
    for (var i = _colors.length - 1; i >= 0; i--) {
        $(_colors[i]).click(function(){
            var color_text = $(this).find('span').attr('data-text-display');
            document.getElementById('year_color').value = $(this).find('span').attr('data-value');
            var elemnt = $(this).closest('._select_color_drop').prev();
            elemnt.find('span.color').remove();
            $(this).find('span').clone().appendTo(elemnt);
            var contents = $(elemnt).contents();
            if (contents.length > 0) {
                if (contents.get(0).nodeType == Node.TEXT_NODE) {
                    $(elemnt).html(color_text).append(contents.slice(1));
                }
            }
            if($('[name=_color]').val() == undefined){
                elemnt.next().append("<input type='hidden' name='_color' value='"+color_text+"'>");
            }else{
                $('[name=_color]').val(color_text);
            }

        })
    };

    $('#dropdownMenu1').click(function () {
        document.getElementById('dropdownMenu1').classList.add('hidden');
    });

    $('.color').click(function () {
        document.getElementById('dropdownMenu1').classList.remove('hidden');
    });

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

    //Close Show Hive
    $(document).on("mouseenter", '#show_hive_comb', function () {
        $('#close_show_comb').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#close_show_comb', function () {
        $('#close_show_comb').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '#show_hive_comb', function () {
        $('#close_show_comb').css("color", "transparent");
    });

    $(document).on("mouseleave", '#close_show_comb', function () {
        $('#close_show_comb').css("color", "#34322c");
    });

    //Close Show New Hive
    $(document).on("mouseenter", '#new_hive_comp', function () {
        $('#close_add_hive_form').css("color", "#34322c");
    });

    $(document).on("mouseenter", '#close_add_hive_form', function () {
        $('#close_add_hive_form').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '#new_hive_comp', function () {
        $('#close_add_hive_form').css("color", "transparent");
    });

    $(document).on("mouseleave", '#close_add_hive_form', function () {
        $('#close_add_hive_form').css("color", "#34322c");
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

    $(document).on("click", '#close_show_comb', function () {
        switch_active_class(document.getElementById('img_show_hive'), 'zoomed_show', 'unzoomed_show');
        switch_active_class(document.getElementById('show_hive_table'), 'show_form', 'hide');
        document.getElementById('show_hive_table').classList.add('hidden');
        document.getElementById('hive_number_unzoomed').classList.remove('hide');
        document.getElementById('hive_number_unzoomed').classList.add('show');
        document.getElementById('hive_number_unzoomed').classList.remove('hidden');
        //document.getElementById('new_hive_comp').classList.remove("hidden");
    });

    $('#close_add_hive_form').on("click", function () {
        switch_active_class(document.getElementById('img_new_hive'), 'zoomed', 'unzoomed');
        switch_active_class(document.getElementById('new_hive_heading'), 'show', 'hide');
        switch_active_class(document.getElementById('new_hive_form'), 'show_form', 'hide');
        document.getElementById('show_location_comp').classList.remove("hidden");
        document.getElementById('new_hive_form').classList.add("hidden");
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
        document.getElementById('show_location_comp').classList.add("hidden");
        document.getElementById('new_hive_form').classList.remove("hidden");
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

    $(document).on("click", '#hive_number_unzoomed', function () {
        switch_active_class(document.getElementById('hive_number_unzoomed'), 'show', 'hide');
        document.getElementById('hive_number_unzoomed').classList.add('hidden');
        switch_active_class(document.getElementById('img_show_hive'), 'zoomed_show', 'unzoomed_show');
        switch_active_class(document.getElementById('show_hive_table'), 'show_form', 'hide');
        //document.getElementById('new_hive_comp').classList.add("hidden");
    });

});

