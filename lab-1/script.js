/**
 * Created by lockistrike on 19.02.17.
 */

function set_method() {
    main_form.setAttribute("method", select_method_select.value);

}


$(document).ready(function () {
    $(document).ready(function () {
        $("#header").hide();
        $("#form_div").hide();
        $("#left_block").hide();
        $("#right_block").hide();
    })
});

$(document).ready(function () {
    $("#start_button").click(function () {
        $("#start_button").fadeOut(1000);
        $("#header").fadeIn(2000);
        $("#form_div").fadeIn(2000);
        $("#left_block").fadeIn(2000);
        $("#right_block").fadeIn(2000);
        $("#head_text").append(name);
    })
});


let img_index = 0;
let img_count = 5;

function load_img() {
    img_array = [];
    let i;
    for (i = 0; i < 5; i++) {
        img_array[i] = "/img/img" + i + ".jpg";
    }
}

$(document).ready(function () {
    $(".sabaka").mouseenter(function () {
        slider();
        let color = Math.floor(Math.random() * 101 + Math.random() * 101);
        //$("#submit_button").css("background", "rgb(" + color + "," + color/2 + ", " + color/3 +")");
        let res = "rgb(" + color + ", " + Math.floor(color / 2) + ", " + Math.floor(color / 3) + ")";
        $("#submit_button").css("background", res);
    });
});

function slider() {
    img_index++;
    if (img_index >= img_count) {
        img_index = 0;
    }
    let image = document.getElementsByClassName("sabaka")[0];
    image.src = "img/img" + img_index + ".jpg";

}

let name;

$(document).ready(function () {
    alert("Hello, user! \n You eneter on " + document.URL);
    name = prompt("Enter your name to welcome you: ");

    /*if(name == ""){
     document.getElementById("head_text").innerHTML = document.getElementById("head_text").textContent + "\n for annonymous";
     }
     else {
     document.getElementById("head_text").innerHTML = document.getElementById("head_text").textContent + "\n for " + name;
     }*/
});


function ValidateForm() {
    return (document.getElementById("email_input").value.includes("@"));
}

(function ($) {
    $.fn.jump = function () {
        this.each(function () {
            let img = $(".sabaka")[0];
            if($(this).find($(".sabaka"))){
                $(this).append(img);
            }
            // if($("#right_block").find($(".sabaka")).length  > 0){
            //     $("#left_block").append(img);
            // }
            // else{
            //     $("#right_block").append(img);
            // }

        });
        return this;
    };
})(jQuery);  

$(document).ready(function () {
   $("div").click(function () {
        $("div:hover").jump();
   });
});

function jumper() {
}

