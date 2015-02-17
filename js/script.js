$(function() {
    $('a[rel*=leanModal]').leanModal({ overlay : 0, top : 125});        
});


var uagent = navigator.userAgent.toLowerCase();
if(/safari/.test(uagent) && !/chrome/.test(uagent))
{
    $('.parallax__layer').css('display','none');
    $('header.desktop').css('display','none');
    $('.container').css('margin-top','0');
    $('.no_parallax_mobile__layer').css('display','block');
    $('.no_parallax_mobile__layer').css('background','url(../images/bg@safari-ff.png) bottom center no-repeat');
    $('.no_parallax_mobile__layer').css('background-size','cover');
}    

function resizePages() {
	    var h = $(window).height();
	    var height  =  h < 806 ? 806 : h;
	    if (Modernizr.mq('only all and (min-width: 768px)')) {
		    $('.slide').css('height',height);
		}
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
	$("#social-center").addClass("vertical-align");
    $("#parallax").scroll(function () {
    	if ($("#parallax").scrollTop() > height ) {
    		$("#parallax-container").addClass("alert");
    	} else {
    		$("#parallax-container").removeClass("alert");
    	}
        if ($("#parallax").scrollTop() > height + (height/3)) {
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