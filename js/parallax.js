


$(window).scroll(function() {
 	var st = $(this).scrollTop();


 	$('#team__parallax').css({
 		"transform" : "translate(0%," + st + "%"
 	});


    $('#comments__parallax').css({
        "transform" : "translate(0%,-" + st/2 + "%"
    });

});



