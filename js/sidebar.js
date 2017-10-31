/**
 * Created by Administrator on 2017/9/7.
 */

//页面平滑效果
document.onmousewheel = function(e) {
    var scrollInt = browser.scrollTop() - e.wheelDelta * 4;
    browser.stop(true, false);
    browser.animate({
        scrollTop: scrollInt
    },
        120 * 8, "easeOutCubic");
    return false;
};
$(document).ready(function(e) {
    var st = $(window).scrollTop();
    var objTemp = [$("html"), $("body")];
    for (var i = 0; i < objTemp.length; i++) {
        $(objTemp[i]).animate({
                scrollTop: st + 1
            },
            0);
        if (st < $(window).scrollTop()) {
            browser = $(objTemp[i]);
        }
        $(window).scrollTop(st);
    }
});

//浮动二级导航
var ticketHeight = $('.FloatingNav').offset().top;
$(window).scroll(function () {
    if ($(document).scrollTop() > ticketHeight) {
        $('.FloatingNav').css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
        })
    } else {
        $('.FloatingNav').css({
            'position': 'absolute',
            'top': '450px',
            'left': 0,
            'marginLeft': 0
        })
    }
});




$(window).scroll(function(){
    var scroll_top=$(window).scrollTop();
    if(scroll_top>=400){
        $(".sidebar").fadeIn();
    }else{
        $(".sidebar").fadeOut();
    }
})

$('.sidebar .lis2').mouseenter( function () {
    $('.hides').animate({
        width:'260px',
        opacity:1
    },750 ,'easeOutExpo')
}).mouseleave(function () {
    $('.hides').stop(true, true).removeAttr('style')
})
$('.sidebar .lis3').mouseenter(function () {
    $('.EwmImg').animate({
         right:'80px',
         opacity:1
    },750 ,'easeOutExpo')
}).mouseleave(function () {
    $('.EwmImg').stop(true, true).removeAttr('style')
})
function gotoTop() {
    $('body,html').animate({
        scrollTop: 0
    },800);
}