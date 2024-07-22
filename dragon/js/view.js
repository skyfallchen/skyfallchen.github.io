$(document).ready(function(){
    $(".mask").hide();
});

$("#Dragon,#Wing,#Gold,#More").hide();
$("#pvp,#balance,#else").hide();

$(".btn").click(function () {
    var target = $(this).data('target');
    setTimeout(function () {
        $(".topBar").css("background-color", "rgba(0, 0, 0, 1)")
        $(".topBar").find("ul").fadeIn().css("display", "grid");
        $(".topBar").find(".tab" + target).addClass('active').siblings('li').removeClass('active');
        $(".index").hide();
        $("#" + target).fadeIn().siblings('.page').hide();
        if (target === "More") {
            $(".tabBox").fadeIn();
        }
        $(".home").fadeIn();
    }, 500)
    $(".bg").addClass("blurred"); 
    setTimeout(function () {
        if (target === "Dragon") {
            $(".bg").css("background-image", "url(img/page1Bg.jpg)");
        } else if (target === "Wing") {
            $(".bg").css("background-image", "url(img/page2Bg.jpg)");
        } else if (target === "Gold") {
            $(".bg").css("background-image", "url(img/page3Bg.jpg)");
        } else if (target === "More") {
            $(".bg").css("background-image", "url(img/page4Bg.jpg)");
        }
    }, 300);
    setTimeout(function () {
        $(".bg").removeClass("blurred"); 
    }, 700);
});

$(".home").click(function () {
    setTimeout(function () {
        $(".topBar").css("background-color", "rgba(0, 0, 0, 0)");
        $(".topBar").css("animation-name", "topBar");
        $(".topBar").find("ul").fadeOut();
        $(".page").hide();
        $(".home").hide();
        $(".index").fadeIn();
        $(".tabBox").fadeOut();
    }, 500)
    $(".bg").addClass("blurred");
    setTimeout(function () {
            $(".bg").css("background-image", "url(img/bg.jpg)");
    }, 300);
    setTimeout(function () {
        $(".bg").removeClass("blurred");
    }, 700);
    $("html,body").animate(
        {
          scrollTop: 0,
        },
        600);
});

$('.topBar').find('li').click(function () {
    var target = $(this).data('target');
    $(".bg").addClass("blurred");
    setTimeout(function () {
        if (target === "Dragon") {
            $(".bg").css("background-image", "url(img/page1Bg.jpg)");
        } else if (target === "Wing") {
            $(".bg").css("background-image", "url(img/page2Bg.jpg)");
        } else if (target === "Gold") {
            $(".bg").css("background-image", "url(img/page3Bg.jpg)");
        } else if (target === "More") {
            $(".bg").css("background-image", "url(img/page4Bg.jpg)");
        }
        if (target === "More") {
            $(".tabBox").fadeIn();
        }else{
            $(".tabBox").fadeOut();
        }
    }, 300);
    setTimeout(function () {
        $(".bg").removeClass("blurred"); 
        $("html,body").animate(
            {
              scrollTop: 0,
            },
            600);
    }, 700);
    setTimeout(function () {
        $("#" + target).fadeIn().siblings('.page').hide();
    }, 500);
    $(".topBar").find(".tab" + target).addClass('active').siblings('li').removeClass('active');

});

$('.tab').click(function () {
    var target = $(this).data('target');
    $(".bg").addClass("blurred");
    setTimeout(function () {
        $("#" + target).fadeIn().siblings('.content').hide();
    }, 500);
    setTimeout(function () {
        $(".bg").removeClass("blurred"); 
        $("html,body").animate(
            {
              scrollTop: 0,
            },
            600);
    }, 700);
    $(this).addClass('active').siblings('.tab').removeClass('active');
});