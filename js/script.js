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
    $(window).scroll(function () {
        if ($(document).scrollTop() < 100) {
            $("#about").addClass("scrolled");
        } else {
            $("#about").removeClass("scrolled");
        }
    });
});