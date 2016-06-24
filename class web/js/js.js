var swiperH = new Swiper('.swiper-container-h', {
    paginationHide :false,
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheelControl: true,//鼠标控制
    onSlideChangeEnd: function(swiper){
       animates();
       swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
       $("#show").show();
       var showWidth = $(".swiper-slide").width()-50;
       $("#show").css("width",showWidth);
    },
    onSlideChangeStart: function(swiper){
        removeAnimate();
    },
    onInit: function(swiper){ 
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
    }, 
});

var swiper = new Swiper('.list', {
    pagination: '.swiper-pagination-v',
    nextButton: '.swiper-bn',
    prevButton: '.swiper-bp',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});


var tile = $('.strips__strip');
var tileLink = $('.strips__strip > .strip__content');
var tileText = tileLink.find('.strip__inner-text');
var stripClose = $('.strip__close');
var expanded = false;
var open = function () {
    var tile = $(this).parent();
    if (!expanded) {
        tile.addClass('strips__strip--expanded');
        tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.addClass('strip__close--show');
        stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = true;
    }
};
var close = function () {
    if (expanded) {
        tile.removeClass('strips__strip--expanded');
        tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.removeClass('strip__close--show');
        stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = false;
    }
};
var animates = function () {
  tile.each(function(i, e) {
    i++;
    tile.eq(i-1).children(".strip__content").css("animation-name","strip"+i);
    tile.eq(i-1).children(".strip__content").css("animation-delay","0."+i+"s");
    setTimeout(function(){
        tile.eq(i-1).css("box-shadow","0px 0px 15px #000");
    },1000)
  });
}
var removeAnimate = function () {
    tile.each(function(i, e) {
        tile.eq(i-1).children(".strip__content").css("animation-name","strip0");
        tile.eq(i-1).children(".strip__content").css("animation-delay","0s");
        tile.eq(i-1).css("box-shadow","0px 0px 0px #fff");
        // tile.eq(i-1).children(".strip__content").removeAttr('style');
        // tile.eq(i-1).removeAttr('style');
    });
}

var bindActions = function () {
    tileLink.on('click', open);
    stripClose.on('click', close);
};
bindActions();
