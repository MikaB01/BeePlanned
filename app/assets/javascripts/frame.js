$(document).ready(function() {

    //Add Frame
    $(document).on("mouseenter", '#new_frame_heading', function () {
        $('#img_new_frame').css("opacity", "0.5");
    });

    $(document).on("mouseleave", '#new_frame_heading', function () {
        $('#img_new_frame').css("opacity", "0");
    });

});
