/**
 * Created by Administrator on 2017/8/30.
 */

//浮动定位二级导航栏目
function h(id) {
    var arr = [];
    id.each(function (i) {
        arr.push(id.eq(i).offset().top - $(".Nav_box").height() - 30);
    });
    for (var i = 0; i < arr.length; i++) {
        if ($(document).scrollTop() > arr[i]) {
            tab1(i, 'active');
        }
    }
}
function tab1(i, clas) {
    $('.Nav_box li').removeClass(clas).eq(i).addClass(clas);
}
$(window).scroll(function () {
    h($('.title'));
});
$(".Nav_box li").click(function (e) {
    e.preventDefault();
    var index = ($(".Nav_box li")).index($(this));
    var goTo = $('.title').eq(index).offset().top - $(".Nav_box").height() - 20;
    $("html, body").animate({
        scrollTop: goTo
    }, 500);
});

$('.counter').countUp({
    delay: 50,
    time: 2000
});

/**
 * 发展历程
 */
var boxhide = $('.boxhide')
var curr = 0
var now = 0
var last = boxhide.children('li').last('li').index()

//动态设置boxhide宽度
boxhide.width($('.boxhide li').size() * 240 + 120);
function moveToLeft() {
    curr++
    boxhide.animate({
        marginLeft: boxhide[0].offsetLeft - 240 + 'px',
    }, 500, '')
    return true
}
function moveToRight() {
    curr--
    boxhide.animate({
        marginLeft: boxhide[0].offsetLeft + 240 + 'px'
    }, 500, '')
    return true
}
//点击li
$('.boxhide li').on('click', function () {
    var self = $(this)
    now = self.index()
    $('.data_box .bd > div').eq(self.index()).show().siblings().hide()
    self.addClass('active').prevAll('li').addClass('active').end().nextAll().removeClass('active')
    if(self.index() - curr === 4){
        if(self.index() !== last){
            moveToLeft()
        }
    }
    if(self.index() - curr === 0){
        if(self.index() !== 0){
            moveToRight()
        }
    }
})
$('.data_zuo').on('click',function(){
    if(now > 0){
        $('.boxhide li').eq(--now).addClass('active').prevAll('li').addClass('active').end().nextAll().removeClass('active')
        $('.data_box .bd > div').eq(now).show().siblings().hide()
    }

    if(curr > 0){
        moveToRight()
    }
})
$('.data_you').on('click',function(){
    if(now < last){
        $('.boxhide li').eq(++now).addClass('active').prevAll('li').addClass('active').end().nextAll().removeClass('active')
        $('.data_box .bd > div').eq(now).show().siblings().hide()
    }
    if(curr < last - 4){
        moveToLeft()
    }
})

$(".inBox").slide({
    mainCell: ".inBd ul",
    effect: "leftLoop",
    autoPlay: false
});

$(".HonorBox").slide({
    mainCell: ".slide",
    effect: "leftLoop",
    autoPlay: true,
    interTime: 5000,
});

$('.slide').rebox({
    selector: 'a'
});


$('.recruitList').on('click', '.recruitRight', function () {
    $(this).closest('.recruitList').toggleClass('cur').closest('.recruiRow').siblings('.recruiRow').find('.recruitList').removeClass('cur')
})
$('.ResumeDelivery').on('click', function () {
    $('.resumeBox').fadeIn()
    $('#colse').on('click', function () {
        $('.resumeBox').fadeOut()
    })
    $('.resumeBox').on('click', function () {
        $(this).fadeOut()
    })
})
$(".recruitBox").slide({
    trigger: "click",
    effect: "left",
});
