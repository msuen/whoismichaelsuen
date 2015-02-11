$(function() {
    $('a[rel*=leanModal]').leanModal({ overlay : 0, top : 125});        
});

function resizePages() {
    var h = $(window).height();
    var height  =  h < 806 ? 806 : h;
    $('.slide').css('height',height);
}

$(window).resize(function(e) {
    resizePages();
});
resizePages();
$(document).ready(function(e) {
    resizePages();
});
resizePages();

$(document).ready(function () {
	var h = $(window).height();
    var height  =  h < 806 ? 806 : h;
    $("#parallax").scroll(function () {
    	if ($("#parallax").scrollTop() > height ) {
    		$("#parallax-container").addClass("alert");
    	} else {
    		$("#parallax-container").removeClass("alert");
    	}
        if ($("#parallax").scrollTop() > height + (height/2)) {
            $("#about").addClass("scrolled");
            $("#social").addClass("scrolled");
            $("#parallax-container").addClass("scrolled");
        } else {
            $("#about").removeClass("scrolled");
            $("#social").removeClass("scrolled");
            $("#parallax-container").removeClass("scrolled");
        }
    });
});