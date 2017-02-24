/**
 * Created by lockistrike on 19.02.17.
 */


function set_method() {
    main_form.setAttribute("method", select_method_select.value);

}


$(document).ready(function () {
    $(document).ready(function () {
        $("#head_text").hide();
        $("#main_form").hide();
    })
})

$(document).ready(function () {
    $("#start_button").click(function () {
        $("#start_button").fadeOut(1000);
        $("h1").fadeIn(2000);
        $("form").fadeIn(2000);



    })
})

