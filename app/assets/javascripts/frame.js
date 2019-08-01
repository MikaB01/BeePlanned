$(document).ready(function() {

    let max_index = $('#max_super_index').attr('data-super-length');

    //Add Frame
    for (let i = 0; i < max_index; i++) {

        if($("#super_id_" + i).attr('data-super-id'))
            document.getElementById('hidden_super_id_' + i).value = $("#super_id_" + i).attr('data-super-id');

        $(document).on("mouseenter", '#new_frame_heading_' + i, function () {
            $('#img_new_frame_' + i).css("opacity", "0.5");
        });

        $(document).on("mouseleave", '#new_frame_heading_' + i, function () {
            $('#img_new_frame_' + i).css("opacity", "0");
        });

        $('#new_frame_heading_' + i).unbind("click").click(function () {
            document.getElementById('img_new_frame_' + i).classList.add('hidden');
            document.getElementById('new_frame_heading_' + i).classList.add('hidden');
            $('.new_frame_form').css("width", "320px");
            switch_active_class(document.getElementById('new_frame_form_' + i), 'show_form', 'hide');
        });

        $('#close_add_frame_' + i).unbind("click").click(function () {
            switch_active_class(document.getElementById('new_frame_form_' + i), 'show_form', 'hide');
            $('.new_frame').css("width", "90px");
            document.getElementById('img_new_frame_' + i).classList.remove('hidden');
            document.getElementById('new_frame_heading_' + i).classList.remove('hidden');
        });

        let frame_amount = $('#frame_amount' + i).attr('data-frame_amount');
        console.log(frame_amount + "  " + max_index + "  " + i);
        for (let f = 0; f < frame_amount; f++) {
            $('#edit_frame_icon_' + i + '_' + f).unbind("click").click(function () {
                $('.edit_frame_form').css("width", "320px");
                switch_active_class(document.getElementById('edit_frame_form_' + i + '_' + f), 'show_form', 'hide');
            });

            $('#close_edit_frame_' + i + '_' + f).unbind("click").click(function () {
                switch_active_class(document.getElementById('edit_frame_form_' + i + '_' + f), 'show_form', 'hide');
                $('.edit_frame_form').css("width", "90px");
            });
        }

    }

    //Add Frame
    $(document).on("mouseenter", '.new_frame_form', function () {
        $('.close_add_frame').css("color", "#34322c");
    });

    $(document).on("mouseenter", '.close_add_frame', function () {
        $('.close_add_frame').css("color", "#f2d002");
    });

    $(document).on("mouseleave", '.new_frame_form', function () {
        $('.close_add_frame').css("color", "transparent");
    });

    $(document).on("mouseleave", '.close_add_frame', function () {
        $('.close_add_frame').css("color", "#34322c");
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
