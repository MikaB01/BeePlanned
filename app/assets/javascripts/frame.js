$(document).ready(function() {

    let max_index = $('#max_super_index').attr('data-super-length');

    //Add Frame
    for (let i = 0; i <= max_index; i++) {

        if($("#super_id_" + i).attr('data-super-id'))
            document.getElementById('hidden_super_id_' + i).value = $("#super_id_" + i).attr('data-super-id');

        $(document).on("mouseenter", '#new_frame_heading_' + i, function () {
            $('#img_new_frame_' + i).css("opacity", "0.5");
        });

        $(document).on("mouseleave", '#new_frame_heading_' + i, function () {
            $('#img_new_frame_' + i).css("opacity", "0");
        });

        $('#new_frame_heading_' + i).unbind("click").click(function () {
            $('#close_add_frame_' + i).css("color", "#777");
            document.getElementById('img_new_frame_' + i).classList.add('hidden');
            document.getElementById('new_frame_heading_' + i).classList.add('hidden');
            $('.new_frame_form').css("width", "380px");
            switch_active_class(document.getElementById('new_frame_form_' + i), 'show_form', 'hide');
        });

        $('#close_add_frame_' + i).unbind("click").click(function () {
            switch_active_class(document.getElementById('new_frame_form_' + i), 'show_form', 'hide');
            $('.new_frame').css("width", "90px");
            document.getElementById('new_frame_form_' + i).classList.add('hidden');
            document.getElementById('img_new_frame_' + i).classList.remove('hidden');
            document.getElementById('new_frame_heading_' + i).classList.remove('hidden');
        });

        //Add Frame close_add :hover -color
        $(document).on("mouseenter", '#new_frame_form_' + i, function () {
            $('#close_add_frame_' + i).css("color", "#777");
        });

        $(document).on("mouseenter", '#close_add_frame_' + i, function () {
            $('#close_add_frame_' + i).css("color", "#f2d002");
        });

        $(document).on("mouseleave", '#new_frame_form_' + i, function () {
            $('#close_add_frame_' + i).css("color", "transparent");
        });

        $(document).on("mouseleave", '#close_add_frame_' + i, function () {
            $('#close_add_frame_' + i).css("color", "#777");
        });

        let frame_amount = $('#frame_amount' + i).attr('data-frame_amount');
        for (let f = 0; f < frame_amount; f++) {
            $('#edit_frame_icon_' + i + '_' + f).unbind("click").click(function () {
                if(document.getElementById('new_frame_form_' + i).classList.contains('hide') &&
                        (
                            document.getElementById('frame_amount' + i).classList.contains('close') ||
                            document.getElementById('edit_frame_form_' + i + '_' + f).classList.contains('show_form'))) {
                    $('#close_edit_frame_' + i + '_' + f).css("color", "#777");
                    document.getElementById('img_new_frame_' + i).classList.add('hidden');
                    document.getElementById('new_frame_heading_' + i).classList.add('hidden');
                    $('#edit_frame_form_' + i + '_' + f).css("width", "380px");
                    document.getElementById('frame_amount' + i).classList.remove('close');
                    document.getElementById('frame_amount' + i).classList.add('open');
                    switch_active_class(document.getElementById('edit_frame_form_' + i + '_' + f), 'show_form', 'hide');
                    if(document.getElementById('edit_frame_form_' + i + '_' + f).classList.contains('hide')) {
                        $('#edit_frame_form_' + i + '_' + f).css("width", "90px");
                        document.getElementById('edit_frame_form_' + i + '_' + f).classList.add('hidden');
                        document.getElementById('img_new_frame_' + i).classList.remove('hidden');
                        document.getElementById('new_frame_heading_' + i).classList.remove('hidden');
                        document.getElementById('frame_amount' + i).classList.remove('open');
                        document.getElementById('frame_amount' + i).classList.add('close');
                    }
                }
            });

            $('#close_edit_frame_' + i + '_' + f).unbind("click").click(function () {
                switch_active_class(document.getElementById('edit_frame_form_' + i + '_' + f), 'show_form', 'hide');
                $('#edit_frame_form_' + i + '_' + f).css("width", "90px");
                document.getElementById('edit_frame_form_' + i + '_' + f).classList.add('hidden');
                document.getElementById('img_new_frame_' + i).classList.remove('hidden');
                document.getElementById('new_frame_heading_' + i).classList.remove('hidden');
                document.getElementById('frame_amount' + i).classList.remove('open');
                document.getElementById('frame_amount' + i).classList.add('close');
            });

            //Edit Frame close_edit :hover -color
            $(document).on("mouseenter", '#edit_frame_form_' + i + '_' + f, function () {
                $('#close_edit_frame_' + i + '_' + f).css("color", "#777");
            });

            $(document).on("mouseenter", '#close_edit_frame_' + i + '_' + f, function () {
                $('#close_edit_frame_' + i + '_' + f).css("color", "#f2d002");
            });

            $(document).on("mouseleave", '#edit_frame_form_' + i + '_' + f, function () {
                $('#close_edit_frame_' + i + '_' + f).css("color", "transparent");
            });

            $(document).on("mouseleave", '#close_edit_frame_' + i + '_' + f, function () {
                $('#close_edit_frame_' + i + '_' + f).css("color", "#777");
            });
        }

    }

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
