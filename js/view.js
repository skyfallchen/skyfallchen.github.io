//活動說明彈窗
$(function () {
    $('.left_btn_rule').on("click", function () {
        $(".mask").fadeIn();
        $(".pop_rule").fadeIn();
        $(".pop_rule").animate({
            width: "940px"
        }, 700);
        setTimeout(function () {
            $(".pop_title").fadeIn();
            $(".pop_content").fadeIn();
            $(".close").fadeIn();
        }, 700)
    })
})

//注意事項彈窗
$(function () {
    $('.left_btn_notice').on("click", function () {
        $(".mask").fadeIn();
        $(".pop_notice").fadeIn();
        $(".pop_notice").animate({
            width: "940px"
        }, 700);
        setTimeout(function () {
            $(".pop_title").fadeIn();
            $(".pop_content").fadeIn();
            $(".close").fadeIn();
        }, 700)
    })
})


//兌換御神籤彈窗
$(function () {
    $('.left_btn_change').on("click", function () {
        $(".mask").fadeIn();
        $(".pop_change").fadeIn();
        $(".pop_change").animate({
            width: "906px"
        }, 700);
        setTimeout(function () {
            $(".pop_change_content").fadeIn();
            $(".close").fadeIn();
        }, 700)
    })
})

//關閉彈窗
$(function () {
    $('.close').on("click", function () {
        //內容消失
        $(".pop_title").fadeOut();
        $(".pop_content").fadeOut();
        $(".pop_change_content").fadeOut();
        $(".pop_shop_content").fadeOut();
        $(".close").fadeOut();
        //闔起動畫
        $(".pop_notice,.pop_shop,.pop_change,.pop_recode,.pop_rule").animate({
            width: "0px"
        }, 700);
        //外層消失
        setTimeout(function () {
            $(".pop_recode").fadeOut();
            $(".pop_notice").fadeOut();
            $(".pop_change").fadeOut();
            $(".pop_shop").fadeOut();
            $(".pop_rule").fadeOut();
            $(".mask").fadeOut();
        }, 700)
    })
})
$(function () {
    $('.close_w').on("click", function () {
        $(".btn_box").fadeOut();
        $(".close_s").fadeOut();
        $(".buy").fadeOut();
        $(".pop_s").fadeOut();
        $(".mask_s").fadeOut();
    })
})
$(function () {
    $('.close_s').on("click", function () {
        $(".pop_s").fadeOut();
        $(".mask_s").fadeOut();
        $(".close_s").fadeOut();
    })
})

//活動紀錄tab切換
$('#paper_history').hide();
$(function () {
    $('.tab_btn').click(function () {
        var target = $(this).data('target');
        $(target).show().siblings('.history_box').hide();
        $(this).addClass('active').siblings('.tab_btn').removeClass('active');
    });
});

//活動說明tab切換
$('#paper_rule').hide();
$('#paper_reward').hide();
$(function () {
    $('.tab_btn').click(function () {
        var target = $(this).data('target');
        $(target).show().siblings('.rule_box').hide();
        $(this).addClass('active').siblings('.tab_btn').removeClass('active');
    });
});