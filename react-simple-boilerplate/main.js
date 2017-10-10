$(document).ready(function(){
    $("div#controls").hide();

    $("div#header_container").hover(function(){
        $(this).css("border", "2px solid blue");
        // $(div#controls).css("display", "block");
        }, function(){
        $(this).css("border", "none");
    });

    $("div#header_container").hover(function(){
        $("div#controls").show();
        }, function(){
        $("div#controls").hide();
        // $(div#controls).css("display", "block");
    });

    $("div#body_container").hover(function(){
        $(this).css("border", "2px solid blue");
        $(this).css("cursor", "pointer");
        // $(div#controls).css("display", "block");
        }, function(){
        $(this).css("border", "none");
    });

    $("div#edit_block").hover(function(){
        $(this).css("background-color", "blue");
        // $(div#controls).css("display", "block");
        }, function(){
        $(this).css("background-color", "white");
    });

    $("div#delete_block").hover(function(){
        $(this).css("background-color", "red");
        // $(div#controls).css("display", "block");
        }, function(){
        $(this).css("background-color", "white");
    });

    $("div#clone_block").hover(function(){
        $(this).css("background-color", "green");
        // $(div#controls).css("display", "block");
        }, function(){
        $(this).css("background-color", "white");
    });

    $("div#single_block").hover(function(){
        $(this).css("background-color", "#545a63");
        // $(div#controls).css("display", "block");
        }, function(){
        $(this).css("background-color", "#7c7e82");
    });
});


onEditClick = function onEditClick() {
    var content = document.getElementById("header_container").innerHTML;
    console.log(document.getElementById("header_container").innerHTML);
};


function changeBlock() {
	var block =  document.getElementById("header_container");


};
