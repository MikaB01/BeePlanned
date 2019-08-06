$(document).ready(function() {

    let id_names = ["population_size", "honeycomb_seat", "gentleness", "brood", "bees"];

    for(let id_index = 0; id_index < id_names.length; id_index++){
        for(let i = 0; i <= 5; i++){
            $('#'+ id_names[id_index] + '_digits_' + i).unbind("click").click(function () {
                for(let j = 0; j <= 5; j++){
                    if(document.getElementById(id_names[id_index] + '_progressbar').classList.contains('progress_' + j))
                        document.getElementById(id_names[id_index] + '_progressbar').classList.remove('progress_' + j);
                }
                document.getElementById(id_names[id_index] + '_progressbar').classList.add('progress_' + i);
            });
        }
    }

    $('#queen_seen_input').unbind("click").click(function () {
        if(document.getElementById('queen_yes').classList.contains('hidden')) {
            document.getElementById('queen_no').classList.add('hidden');
            document.getElementById('queen_yes').classList.remove('hidden');
        }
        else {
            document.getElementById('queen_yes').classList.add('hidden');
            document.getElementById('queen_no').classList.remove('hidden');
        }
    });

    $('#drone_brood_cutted_input').unbind("click").click(function () {
        if(document.getElementById('drone_brood_cutted_yes').classList.contains('hidden')) {
            document.getElementById('drone_brood_cutted_no').classList.add('hidden');
            document.getElementById('drone_brood_cutted_yes').classList.remove('hidden');
        }
        else {
            document.getElementById('drone_brood_cutted_yes').classList.add('hidden');
            document.getElementById('drone_brood_cutted_no').classList.remove('hidden');
        }
    });

});