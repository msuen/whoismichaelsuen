$(function() {
    $('a[rel*=leanModal]').leanModal({ overlay : 0, top : 125});        
});


var uagent = navigator.userAgent.toLowerCase();
// if(/safari/.test(uagent) || /chrome/.test(uagent) || /firefox/.test(uagent))
if(/safari/.test(uagent) && !/chrome/.test(uagent) || /firefox/.test(uagent))
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
    $.waypoints('refresh');
});
resizePages();
$(document).ready(function(e) {
    resizePages();
    $.waypoints('refresh');
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
        if ($("#parallax").scrollTop() > height + (height/5)) {
            $("#about").addClass("scrolled");
            $("#services").addClass("scrolled");
            $("#parallax-container").addClass("scrolled");
        } else {
            $("#about").removeClass("scrolled");
            $("#services").removeClass("scrolled");
            $("#parallax-container").removeClass("scrolled");
        }
        if ($(".parallax__cover").height() - height - $("#parallax").scrollTop() < height) {
            $("#parallax-container").removeClass("alert");
        }
    });
});

$(document).ready(function () {
    $('#portfolio-img').waypoint(function() {
           $(this).toggleClass($(this).data('animated'));
           $('.insert').toggleClass($('.insert').data('animated'));
           },
        { offset: '100%',
        context: '#parallax',
        triggerOnce: true
        });

    $('#services-left').waypoint(function() {
           $(this).toggleClass($(this).data('animated'));
           },
        { offset: '100%',
        context: '#parallax'
        });

    $('#services-right').waypoint(function() {
           $(this).toggleClass($(this).data('animated'));
           },
        { offset: '100%',
        context: '#parallax'
        });

    $('#sign-up').waypoint(function() {
           $(this).toggleClass($(this).data('animated'));
           },
        { offset: '100%',
        context: '#parallax',
        triggerOnce: true
    });

    $(function() {    
        $('.item-link').click(function(event) {
          event.preventDefault();
          $('img.screen').attr('src','../images/screen-' + $(this).data('rel') + '.jpg');
          $('.window-yes').toggleClass('window-yes window-no');
          $('#' + $(this).data('rel') + '-d').toggleClass('window-no window-yes');
        })
      })
});