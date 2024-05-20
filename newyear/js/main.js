var login_res = {
    status: 1,
    paper: ["1000", "1000", "1000", "1000", "1000"],
    point: 100,
    paper_total: 100,
    bonus_end: [73],
};
var paper_ask_res = {
    status: 1,
    item: [
        1,
        2,
        1,
        5,
        6,
    ],
};
var buy_res = {
    status: 1,
};
var paper_change_res = {
    status: 1,
};
var reward_res = {
    status: 1,
};
var send_res = {
    status: 1,
};
var recode_res = {
    status: 1,
    buy_list: [
        {
        id: 10,
        img: 10,
        name: "合成初始符",
        price: 1000,
        get: "大吉商店",
        date: "2024/01/01",
        is_send:"N",
    },
],
    paper_list: [
        {
        name: "大吉御神籤",
        get: "免費求籤",
        date: "2024/01/01",
    },
],
};
var shop_res = {
    status: 1,
    paper:100,
    item_list: [
        {
        name: "合成初始符",
        price: 100,
        id: "10",
    },
        {
        name: "合成初始符",
        price: 200,
        id: "20",
    },
        {
        name: "合成初始符",
        price: 300,
        id: "11",
    },
        {
        name: "合成初始符",
        price: 400,
        id: "19",
    },
        {
        name: "合成初始符",
        price: 500,
        id: "13",
    },
        {
        name: "合成初始符",
        price: 600,
        id: "14",
    },
        {
        name: "合成初始符",
        price: 700,
        id: "17",
    },
        {
        name: "合成初始符",
        price: 800,
        id: "15",
    },
],
};

// var user = "minnn112";
// var user = $(".account span").text();

// var data_api = "http://192.168.0.41:8079/api/GO/20240205/getSetting";
// var data_api = "get_setting.php";


get_setting();
function get_setting() {
    // $.post(data_api, {
    //     type: "login",
    //     user: user,
    // }, function (_res) {
    //     let res = JSON.parse(_res);
    var res = login_res;
    //未登
    if (res.status == -99) {
        $(".ask3_btn,.ask30_btn,.ask5_btn,.ask1_btn").on("click", function () {
            $(".mask_s").fadeIn();
            $(".pop_s").fadeIn();
            $(".pop_s").find(".pop_s_wrap").html(
                `<p>
                    請先登入會員
                    </p>`
            );
            $(".close_s").fadeIn();
        });
        $(".reward,.user_paper_e,.user_paper_s,.user_paper_m,.user_paper_l,.user_paper_xl").html(0);
    }
    //已登
    else if (res.status == 1) {
        $(".point").html(res.point);
        $(".reward").html(res.paper_total);
        const paperArray = res.paper;
        $('.user_paper_xl').html(parseInt(paperArray[0]));
        $('.user_paper_l').html(parseInt(paperArray[1]));
        $('.user_paper_m').html(parseInt(paperArray[2]));
        $('.user_paper_s').html(parseInt(paperArray[3]));
        $('.user_paper_e').html(parseInt(paperArray[4]));
        //是否略過抽獎動畫
        if (localStorage.getItem('skip') == 'true') {
            $('.ask3_btn').attr('onclick', 'ask(0)');
            $('.ask30_btn').attr('onclick', 'ask(399)');
            $('.ask5_btn').attr('onclick', 'ask(69)');
            $('.ask1_btn').attr('onclick', 'ask(15)');
        } else if (localStorage.getItem('skip') == 'false' || localStorage.getItem('skip') == null) {
            $('.ask3_btn').attr('onclick', 'remind_ask(0)');
            $('.ask30_btn').attr('onclick', 'remind_ask(399)');
            $('.ask5_btn').attr('onclick', 'remind_ask(69)');
            $('.ask1_btn').attr('onclick', 'remind_ask(15)');
        }
        //累計獎勵
        var lotteryAccumulate = [1, 20, 120, 200, 300, 420]
        const stageAccumulate = lotteryAccumulate.findIndex((num) => num > res.paper_total);//找誰大於累計
        for (let $i = 0; $i < stageAccumulate; $i++) {
            $('#reward_' + $i).addClass('scale');
        }
        $('#reward_' + stageAccumulate).addClass('scale');
        if (stageAccumulate == -1) {
            for (let $i = 0; $i < 7; $i++) {
                $('#reward_' + $i).addClass('scale');
            }
        }
        //已領取獎勵
        // const bonus_Array = JSON.parse(res.bonus_end);
        const bonus_Array = res.bonus_end;
        for (let $i = 0; $i < bonus_Array.length; $i++) {
            $('#reward_' + (bonus_Array[$i] - 72)).removeClass('scale');
            $('#reward_' + (bonus_Array[$i] - 72)).removeClass('reward_' + (bonus_Array[$i] - 72));
            $('#reward_' + (bonus_Array[$i] - 72)).addClass('reward_' + (bonus_Array[$i] - 72) + '_done');

        }
        $('.scale').on('click', function () {
            var rewardId = $(this).attr('id');
            get_reward(rewardId)
        })
    }
    login_status = res.status;
}
//     )
// }

//領取累計獎勵
var get_reward_lock = "open";
function get_reward(rewardId) {
    $(".mask_lock").show();
    switch (rewardId) {
        case 'reward_1':
            id = "73"
            break;
        case 'reward_2':
            id = "74"
            break;
        case 'reward_3':
            id = "75"
            break;
        case 'reward_4':
            id = "76"
            break;
        case 'reward_5':
            id = "77"
            break;
        case 'reward_6':
            id = "78"
            break;
    }
    if (get_reward_lock == 'open') {
        get_reward_lock = 'lock';
        // $.post(data_api, {
        //     type: "reward ",
        //     user: user,
        //     id: id,
        // }, function (_res) {
        $(".mask_lock").fadeOut(300);
        get_reward_lock = 'open';
        // let res = JSON.parse(_res);
        var res = reward_res;
        switch (res.status) {
            case -99:
                text = "領取失敗，請重新領取";
                break;
            case -97:
                text = "活動已結束";
                break;
            case 1:
                text = "領取成功";
                break;
        }
        $(".mask_s").fadeIn();
        $(".pop_s").fadeIn();
        $(".pop_s").find(".pop_s_wrap").html(
            `<p>
             `+ text + `
                </p>`
        );
        $(".close_s").fadeIn();
        if (res.status == 1 | res.status == -99) {
            $(".close_s").on("click", function () {
                close_pop_reload()
            })
        }
    }
    // )
}
// }

//是否略過狀態
if (localStorage.getItem('skip') == 'true') {
    $('.cheak_box').css('background-color', '#da6300');
    $('.cheak_box').attr('data-skipClicked', 'true');
}

$('.cheak_box').on('click', function () {
    let check = $('.cheak_box').attr('data-skipClicked');
    if (check == 'false') {
        $('.cheak_box').css('background-color', '#da6300');
        $('.cheak_box').attr('data-skipClicked', 'true');
        if (login_status == 1) {
            $('.ask3_btn').attr('onclick', 'ask(0)');
            $('.ask30_btn').attr('onclick', 'ask(399)');
            $('.ask5_btn').attr('onclick', 'ask(69)');
            $('.ask1_btn').attr('onclick', 'ask(15)');
        }
        skip(true);
    } else if (check == 'true') {
        $('.cheak_box').css('background-color', '#fff');
        $('.cheak_box').attr('data-skipClicked', 'false');
        if (login_status == 1) {
            $('.ask3_btn').attr('onclick', 'remind_ask(0)');
            $('.ask30_btn').attr('onclick', 'remind_ask(399)');
            $('.ask5_btn').attr('onclick', 'remind_ask(69)');
            $('.ask1_btn').attr('onclick', 'remind_ask(15)');
        }
        skip(false);
    }
})
function skip(val) {
    localStorage.setItem('skip', val);
}


//確認求籤
function remind_ask(i) {
    switch (i) {
        case 0:
            point = "<span>免費</span>";
            count = "3";
            a = 0;
            break;
        case 399:
            point = "消耗<span>399</span>搞鬼點數";
            count = "30";
            a = 399;
            break;
        case 69:
            point = "消耗<span>69</span>搞鬼點數";
            count = "5";
            a = 69;
            break;
        case 15:
            point = "消耗<span>15</span>搞鬼點數";
            count = "1";
            a = 15;
            break;
    }
    $(".mask_s").fadeIn();
    $(".pop_s").fadeIn();
    $(".pop_s").find(".pop_s_wrap").html(
        `<p>是否` + point + `</br>進行<span>` + count + `</span>次求籤?​</p>`
    );
    $(".btn_box").fadeIn();
    $(".close_w").fadeIn();
    $(".buy").fadeIn();
    $('.buy').on("click", function () {
        ask(a);
    });
}

//求籤
var ask_lock = "open";
function ask(a) {
    $(".mask_lock").show();
    if (ask_lock == "open") {
        ask_lock = "lock";
        /*         $.post(data_api, {
                    type: "paper_ask ",
                    user: user,
                    frequency: a,
                }, function (_res) { */
        $(".mask_lock").fadeOut(300);
        ask_lock = "open";
        // let res = JSON.parse(_res);
        var res = paper_ask_res;
        if (res.status == 1) {
            //成功
            //求籤內容
            res.item.forEach((count, i) => {
                $(".paper_count").eq(i).html(`X${count}`);
                if (count == 0) {
                    $(".paper_box").eq(i).hide()
                }
            });
            $('.btn_box').hide();
            $('.mask_s').hide();
            $('.mask').show();
            $('.paperbox').hide();
            $(".pop_s").fadeOut();
            if ($('.cheak_box').attr('data-skipClicked') == 'false') {
                $('.ask_animate_box').fadeIn();
                setTimeout(function () {
                    $(".pop_ask").fadeIn();
                    $(".pop_ask").animate({
                        width: "704px"
                    }, 700);
                    setTimeout(function () {
                        $(".pop_ask_content").fadeIn();
                        $(".close_s").fadeIn();
                    }, 700)
                }, 970)
            } else if ($('.cheak_box').attr('data-skipClicked') == 'true') {
                $('.ask_animate_box').fadeIn();
                $('.paperbox_animate').hide();
                $(".pop_ask").show();
                $(".pop_ask").animate({
                    width: "704px"
                }, 700);
                setTimeout(function () {
                    $(".pop_ask_content").fadeIn();
                    $(".close_s").fadeIn();
                }, 700)
            }
            $(".close_s").on("click", function () {
                close_pop_reload()
            })
        } else {
            //失敗
            $('.btn_box').hide();
            switch (res.status) {
                case -99:
                    text = "帳號內點數不足";
                    break;
                case -98:
                    text = "今日已免費求籤過";
                    break;
                case -97:
                    text = "活動已結束 ";
                    break;
            }
            $(".pop_s").find(".pop_s_wrap").html(
                `<p>
             `+ text + `
                </p>`
            );
            if ($('.cheak_box').attr('data-skipClicked') == 'false') {
                $(".close_s").show();
            } else if ($('.cheak_box').attr('data-skipClicked') == 'true') {
                $(".mask_s").fadeIn();
                $(".pop_s").fadeIn();
                $(".close_s").show();
            }
        }
    }
    // )
}
// }


//商店跳窗
var shop_lock = "open";
function shop(shopNum) {
    if (shop_lock == "open") {
        shop_lock = "lock"
        // $.post(data_api, {
        //     type: "shop",
        //     user: user,
        //     shop_id: shopNum
        // }, function (_res) {
        shop_lock = "open";
        // let res = JSON.parse(_res);
        var res = shop_res;
        if (res.status == -99) {
            // 不明錯誤
            $('.ema_xl').attr('onclick', 'close_pop_reload()');
            $('.ema_l').attr('onclick', 'close_pop_reload()');
            $('.ema_m').attr('onclick', 'close_pop_reload()');
            $('.ema_s').attr('onclick', 'close_pop_reload()');
            $('.ema_e').attr('onclick', 'close_pop_reload()');
        } else if (res.status == 1) {
            $(".mask").fadeIn();
            $(".pop_shop").fadeIn();
            $(".pop_shop").animate({
                width: "906px"
            }, 700);
            if (shopNum == "XL") {
                // 大吉
                $('.pop_shop').css('background', 'url(img/shop_xl.png)');
            } else if (shopNum == "L") {
                // 吉
                $('.pop_shop').css('background', 'url(img/shop_l.png)');
            } else if (shopNum == "M") {
                // 中吉
                $('.pop_shop').css('background', 'url(img/shop_m.png)');
            } else if (shopNum == "S") {
                // 小
                $('.pop_shop').css('background', 'url(img/shop_s.png)');
            } else if (shopNum == "E") {
                // 小
                $('.pop_shop').css('background', 'url(img/shop_e.png)');
            }
            $('.user_paper').html(res.paper);
            let _shopList = "";
            res.item_list.forEach((i) => {
                _shopList += ` <div class="item">
                <p>${i.name}</p>
                <div class="icon_${i.id}"></div>
                <button class="buy_btn" onclick="remind_buy(${i.price},'${shopNum}','${i.id}')">
                    <p>點數<span>${i.price}</span></p>
                </button>
            </div>`
            });
            $(".shop_item_box").html(_shopList);
            setTimeout(function () {
                $(".pop_shop_content").fadeIn();
                $(".pop_shop").find(".close").fadeIn();
            }, 700)
        }
    }
    // )
}
// }


//確認購買
$(".btn_box").hide();
function remind_buy(price, shopNum, id) {
    switch (shopNum) {
        case "XL":
            paper = "大吉";
            break;
        case "L":
            paper = "吉";
            break;
        case "M":
            paper = "中吉";
            break;
        case "S":
            paper = "小吉";
            break;
        case "E":
            paper = "末吉";
            break;
    }
    $(".mask_s").fadeIn();
    $(".pop_s").fadeIn();
    $(".pop_s").find(".pop_s_wrap").html(
        `<p>是否消耗<span>` + price + `</span>搞鬼點數</br>與1張<span>` + paper + `</span>御神籤進行購買?​</p>`
    );
    $(".btn_box").fadeIn();
    $(".close_w").fadeIn();
    $(".buy").fadeIn();
    $('.buy').on("click", function () {
        buy(id);
    });

}

//購買
var buy_lock = "open";
function buy(id) {
    $(".mask_lock").show();
    if (buy_lock == "open") {
        buy_lock = "lock";
        // $.post(data_api, {
        //     type: 'buy',
        //     user: user,
        //     buy_item: id
        // }, function (_res) {
        $(".mask_lock").fadeOut(300);
        buy_lock = "open";
        // let res = JSON.parse(_res);
        var res = buy_res;
        if (login_status == -99) {
            $(".btn_box").hide();
            $(".mask_s").fadeIn();
            $(".pop_s").fadeIn();
            $(".pop_s").find(".pop_s_wrap").html(
                `<p>
                    請先登入會員
                    </p>`
            );
            $(".close_s").fadeIn();
        } else if (login_status == 1) {
            switch (res.status) {
                case 1:
                    text = "購買成功";
                    break;
                case -99:
                    text = "點數不足，無法購買​";
                    break;
                case -98:
                    text = "持有籤數不足，無法購買";
                    break;
                case -97:
                    text = "活動已結束";
                    break;
            }
            $(".pop_s").find(".pop_s_wrap").html(
                `<p>
            `+ text + `
            </p>`);
            if (res.status == 1) {
                $(".btn_box").hide();
                $(".close_w").hide();
                $(".buy").hide();
                $(".close_s").show();
                $(".close_s").on("click", function () {
                    close_pop_reload()
                })
            } else {
                $(".btn_box").hide();
                $(".close_w").hide();
                $(".buy").hide();
                $(".close_s").show();
            }
        }
    }
    // )
}
// }


//全部兌換
$('.all_cheak').on("click", function () {
    allExchange()
})
function allExchange() {
    if ($('.all_cheak').attr('data-allExchange') == 'false') {
        $('.all_cheak').css('background-color', '#ceb058');
        $('.all_cheak').attr('data-allExchange', 'true');
    } else if ($('.all_cheak').attr('data-allExchange') == 'true') {
        $('.all_cheak').css('background-color', '#fff');
        $('.all_cheak').attr('data-allExchange', 'false');
    }
}
//兌換
$('.pop_change').find('.buy_btn').on("click", function () {
    let paper = $(this).attr('data-paper')
    exchange(paper)
})

var exchange_lock = "open";
function exchange(paper) {
    $(".mask_lock").show();
    // 是否全部兌換
    let total = '';
    if ($('.all_cheak').attr('data-allExchange') == 'false') {
        total = 'n';
    } else if ($('.all_cheak').attr('data-allExchange') == 'true') {
        total = 'y';
    }
    if (exchange_lock == "open") {
        exchange_lock = "lock";
        // $.post(data_api, {
        //     type: 'paper_change',
        //     user: user,
        //     size: paper,
        //     all: total,
        // }, function (_res) {
        $(".mask_lock").fadeOut(300);
        exchange_lock = "open";
        // let res = JSON.parse(_res);
        var res = paper_change_res;
        switch (res.status) {
            case -99:
                text = "持有籤數不足，無法兌換";
                break;
            case -98:
                text = "請先登入會員";
                break;
            case -97:
                text = "活動已結束";
                break;
            case 1:
                text = "兌換成功";
                break;

        }
        $(".mask_s").fadeIn();
        $(".pop_s").fadeIn();
        $(".pop_s").find(".pop_s_wrap").html(
            `<p>
             `+ text + `
                </p>`
        );
        $(".close_s").fadeIn();
        if (res.status == 1) {
            $(".close_s").on("click", function () {
                close_pop_reload()
            })
        }
    }
    // )
}
// }



//活動紀錄
var history_lock = "open";
$('.left_btn_history').on("click", function () {
    if (history_lock == "open") {
        history_lock = "lock"
        // $.post(data_api, {
        //     type: "recode",
        //     user: user,
        // }, function (_res) {
        history_lock = "open";
        // let res = JSON.parse(_res);
        var res = recode_res;
        if (res.status == -99) {
            $(".mask_s").fadeIn();
            $(".pop_s").fadeIn();
            $(".pop_s").find(".pop_s_wrap").html(
                `<p>
            請先登入會員
            </p>`
            );
            $(".close_s").fadeIn();
        } else if (res.status == 1) {
            $(".mask").fadeIn();
            $(".pop_recode").fadeIn();
            $(".pop_recode").animate({
                width: "940px"
            }, 700);

            let str1 = "";
            let str2 = "";
            res.buy_list.forEach((i) => {
                str1 += `<tr>
                <td><div class="icon_${i.img}"></div></td>
                 <td>${i.name}</td>
                 <td>${i.count}</td>
                 <td>${i.get}</td>
                 <td>${i.date}</td>
                 <td>
                 <div class="send_btn" data-send="${i.is_send}"></div>
             </td>
             </tr>`;
            });
            res.paper_list.forEach((i) => {
                str2 += `<tr>
                 <td>${i.name}</td>
                 <td>${i.date}</td>
                 <td>${i.get}</td>
             </tr>`;
            });
            $('tbody.record1').html(str1);
            $('tbody.record2').html(str2);
            setTimeout(function () {
                $(".pop_recode_wrap").fadeIn();
                $(".pop_title").fadeIn();
                $(".pop_content").fadeIn();
                $(".close").fadeIn();
            }, 700)


            for (let i = 0; i < res.buy_list.length; i++) {
                let btn = $(".history_box").find('.send_btn').eq(i);
                let item_id = res.buy_list[i].id;

                if (btn.attr('data-send') == "N") {
                    btn.html("領取").addClass('get');
                    btn.on("click", function () {
                        send(item_id);
                    });
                } else if (btn.attr('data-send') == "Y") {
                    btn.html("已領取").addClass('got');
                }

            }
        }
    }
})
//     }
// })


//領取道具
var send_lock = "open";
function send(item_id) {
    $(".mask_lock").show();
    if (send_lock == "open") {
        send_lock = "lock";
        // $.post(data_api, {
        //     type: "send",
        //     user: user,
        //     id: item_id,
        // }, function (_res) {
        $(".mask_lock").fadeOut(300);
        send_lock = "open";
        // let res = JSON.parse(_res);
        var res = send_res;
        switch (res.status) {
            case -99:
                text = "領取失敗，請重新領取";
                break;
            case -97:
                text = "活動已結束";
                break;
            case 1:
                text = "領取成功";
                break;
        }
        $(".mask_s").fadeIn();
        $(".pop_s").fadeIn();
        $(".pop_s").find(".pop_s_wrap").html(
            `<p>
             `+ text + `
                </p>`
        );
        $(".close_s").fadeIn();
        if (res.status == 1 | res.status == -99) {
            $(".close_s").on("click", function () {
                close_pop_reload()
            })
        }
    }
    // )
}
// }



//重整頁面
function close_pop_reload() {
    location.reload();
}

//登出
function logout_dg() {
    $("#logout-form").submit();
}
