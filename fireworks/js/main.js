var loginres = {
    status: 1,
    ranking: ['123', '456', '789', 'abc', 'def', 'ghi'],
    point: 100,
    free: "N",
    selected_material: 999,
};
var lotteryres = {
    status: 1,
    result: [
        {
            item_name: "尚仁伺服器傳音秘笈",
            img: 22,
        },
        {
            item_name: "合武符",
            img: 7,
        },
        {
            item_name: "雞德COS帽(男)",
            img: 1,
        },
        {
            item_name: "夢幻巨星(女)",
            img: 6,
        },
        {
            item_name: "天使包",
            img: 10,
        },
        {
            item_name: "赤附身",
            img: 16,
        },
        {
            item_name: "合武符",
            img: 7,
        },
        {
            item_name: "幸運隊伍石碑",
            img: 17,
        },
        {
            item_name: "尚仁伺服器傳音",
            img: 21,
        },
        {
            item_name: "紅心A",
            img: 27,
        },
    ]
};
var recordres = {
    status: 1,
    result: [
        {
            id: 1,
            item_name: "尚仁伺服器傳音秘笈",
            count: 1,
            img: 20,
            is_send: "N",
            material: 60,
            make: "R",
        },
        {
            id: 1,
            item_name: "尚仁伺服器傳音秘笈",
            count: 1,
            img: 23,
            is_send: "N",
            material: 60,
            make: "N",
        },
        {
            id: 1,
            item_name: "尚仁伺服器傳音秘笈",
            count: 1,
            img: 7,
            is_send: "Y",
            material: 60,
            make: "N",
        },
    ]
};
var sendres = {
    status: 1,
};
var recycleres = {
    status: 1,
};

var user = "minnn112";
// var user = $(".acc_id span").text();

// var data_api = "http://192.168.0.41:8079/api/GO/20240411/getSetting";
// var data_api = "get_setting.php";


get_setting();
function get_setting() {
    // $.post(data_api, {
    //     type: "login",
    //     user: user,
    // }, function (_res) {
    // let res = JSON.parse(_res);
    // var res = _res;
    var res = loginres;
    //排行榜
    if (res.ranking.length === 0) {
        $(".custom-counter").html(
            '<li>------</li><li>------</li><li>------</li><li>------</li><li>------</li><li>------</li>'
        );
    }else{
        let str = "";
        res.ranking.forEach((i, index) => {
            str += `<li>${res.ranking[index]}</li>`;
        });
        $(".custom-counter").html(
            str
        );
    };
    //未登
    if (res.status == -99) {
        $(".lotteryBtn1,.lotteryBtn10,.freeBtn,.fireworkLotteryBtn,.btnHistory,.makeFirework").on("click", function () {
            $(".maskS").fadeIn();
            $(".popS").fadeIn();
            $(".popS").find(".popWrap").html(
                `<div class="popSContent">
                    <p>請先登入會員
                    </p>
                </div>
                <button class="close center" onclick="closePopup()">關閉</button>`
            );
        });
    }
    //已登
    else if (res.status == 1) {
        $(".point").html(res.point);
        $(".material").html(res.selected_material);
        var firework = Math.floor(res.selected_material / 66);
        $(".firework").html(firework);

        $(".fireworkLotteryBtn").attr('onclick', 'lottery(1)');

        if (firework > 0) {
            $(".fireworkLotteryBtn").addClass('animate__animated');
            $(".fireworkLotteryBtn").addClass('animate__pulse');
            $(".fireworkLotteryBtn").addClass('animate__infinite');
        }
        //是否略過抽獎動畫
        if (localStorage.getItem('skip') == 'true') {
            $('.Rshop').find('.lotteryBtn1').attr('onclick', 'lottery(59)');
            $('.Rshop').find('.lotteryBtn10').attr('onclick', 'lottery(579)');
            $('.SRshop').find('.lotteryBtn1').attr('onclick', 'lottery(89)');
            $('.SRshop').find('.lotteryBtn10').attr('onclick', 'lottery(869)');
            $('.SSRshop').find('.lotteryBtn1').attr('onclick', 'lottery(99)');
            $('.SSRshop').find('.lotteryBtn10').attr('onclick', 'lottery(959)');
            $('.freeBtn').attr('onclick', 'lottery(0)');
        } else if (localStorage.getItem('skip') == 'false' || localStorage.getItem('skip') == null) {
            $('.Rshop').find('.lotteryBtn1').attr('onclick', 'remind_lottery(59)');
            $('.Rshop').find('.lotteryBtn10').attr('onclick', 'remind_lottery(579)');
            $('.SRshop').find('.lotteryBtn1').attr('onclick', 'remind_lottery(89)');
            $('.SRshop').find('.lotteryBtn10').attr('onclick', 'remind_lottery(869)');
            $('.SSRshop').find('.lotteryBtn1').attr('onclick', 'remind_lottery(99)');
            $('.SSRshop').find('.lotteryBtn10').attr('onclick', 'remind_lottery(959)');
            $('.freeBtn').attr('onclick', 'remind_lottery(0)');
        }
        login_status = res.status;

        $('.btnHistory,.makeFirework').on("click", recode)
    }
}
//     )
// }

//活動紀錄
var history_lock = "open";
function recode() {
    if (history_lock == "open") {
        history_lock = "lock"
        // $.post(data_api, {
        //     type: "record",
        //     user: user,
        // }, function (_res) {
        history_lock = "open";
        // let res = JSON.parse(_res);
        // var res = _res;
        var res = recordres;
        if (res.status == 1) {
            $(".mask").fadeIn();
            $("#pophistory").fadeIn();
            if (res.result.length === 0) {
                $('.popHistoryWrap').find('.popContent').html('<p class="recodeText">尚無紀錄</br>前往<a href="#page1"><button onclick="closePopup()">採購原料</button></a></p>');
            } else {
                let str = "";
                res.result.forEach((i) => {
                    str += `<tr>
                    <td><div class="icon${i.img}"></div></td>
                    <td>${i.item_name}</td>
                    <td>${i.count}</td>
                    <td><div class="send" data-send="${i.is_send}">領取</div></td>
                    <td><div class="make" data-send="${i.make}">添加</div></td>
                    <td>${i.material}</td>
                 </tr>`;
                });
                $('.tableHistory').find('tbody').html(str);
    
                // 領取
                for (let i = 0; i < res.result.length; i++) {
                    let btn = $('.tableHistory').find('tbody').find('.send').eq(i);
                    let item_id = res.result[i].id;
    
                    if (btn.attr('data-send') == "N") {
                        btn.html("領取").addClass('sendBtn');
                        btn.on("click", function () {
                            send(item_id);
                        });
                    }
                    else if (btn.attr('data-send') == "Y") {
                        btn.html("已領取").addClass('noneBtn');
                    }
                    else if (btn.attr('data-send') == "R") {
                        btn.html("無法領取").addClass('noneBtn');
                    }
                }
    
                // 添加
                for (let i = 0; i < res.result.length; i++) {
                    let btn = $('.tableHistory').find('tbody').find('.make').eq(i);
                    let item_id = res.result[i].id;
                    let item_name = res.result[i].item_name;
                    let item_img = res.result[i].img;
    
                    if (btn.attr('data-send') == "R") {
                        btn.html("添加").addClass('makeBtn');
                        btn.on("click", function () {
                            $(".maskS").fadeIn();
                            $(".popS").fadeIn();
                            $(".popS").find(".popWrap").html(
                                `            <div class="popSContent">
                                        <div class="icon`+ item_img + `">
                                        </div>
                                        <p>`+ item_name + `
                                        </p>
                                        <p class="remindText">原料拿去添加製作之後便無法再進行領取動作，確定要進行添加嗎?​
                                        </p>
                                    </div>
                                    <div class="btn_box">
                                        <button class="close" onclick="make(`+ item_id + `)">確定</button>
                                        <button class="cancel" onclick="closeSpopup()">取消</button>
                                    </div>
                                        `
                            );
                        });
                    }
                    else if (btn.attr('data-send') == "Y") {
                        btn.html("已添加").addClass('noneBtn');
                    }
                    else if (btn.attr('data-send') == "N") {
                        btn.html("無法添加").addClass('noneBtn');
                    }
                }
            }

        } else if (res.status == -90) {
            $(".maskS").fadeIn();
            $(".popS").fadeIn();
            $(".popS").find(".popWrap").html(
                ` <div class="popSContent"><p>
                    活動已結束
            </p></div>
            <button class="close center" onclick="closePopup()">關閉</button>`
            );
        }
    }
    // )
}
    // }



//是否略過狀態
if (localStorage.getItem('skip') == 'true') {
    $('.checkBox').css('background-color', '#edbf65');
    $('.checkBox').attr('data-skipClicked', 'true');
}

$('.checkBox').on('click', function () {
    let check = $('.checkBox').attr('data-skipClicked');
    if (check == 'false') {
        $('.checkBox').css('background-color', '#edbf65');
        $('.checkBox').attr('data-skipClicked', 'true');
        if (login_status == 1) {
            $('.Rshop').find('.lotteryBtn1').attr('onclick', 'lottery(59)');
            $('.Rshop').find('.lotteryBtn10').attr('onclick', 'lottery(579)');
            $('.SRshop').find('.lotteryBtn1').attr('onclick', 'lottery(89)');
            $('.SRshop').find('.lotteryBtn10').attr('onclick', 'lottery(869)');
            $('.SSRshop').find('.lotteryBtn1').attr('onclick', 'lottery(99)');
            $('.SSRshop').find('.lotteryBtn10').attr('onclick', 'lottery(959)');
            $('.freeBtn').attr('onclick', 'lottery(0)');
        }
        skip(true);
    } else if (check == 'true') {
        $('.checkBox').css('background-color', '#2a2329');
        $('.checkBox').attr('data-skipClicked', 'false');
        if (login_status == 1) {
            $('.Rshop').find('.lotteryBtn1').attr('onclick', 'remind_lottery(59)');
            $('.Rshop').find('.lotteryBtn10').attr('onclick', 'remind_lottery(579)');
            $('.SRshop').find('.lotteryBtn1').attr('onclick', 'remind_lottery(89)');
            $('.SRshop').find('.lotteryBtn10').attr('onclick', 'remind_lottery(869)');
            $('.SSRshop').find('.lotteryBtn1').attr('onclick', 'remind_lottery(99)');
            $('.SSRshop').find('.lotteryBtn10').attr('onclick', 'remind_lottery(959)');
            $('.freeBtn').attr('onclick', 'remind_lottery(0)');
        }
        skip(false);
    }
})
function skip(val) {
    localStorage.setItem('skip', val);
}


//確認採購
function remind_lottery(i) {
    switch (i) {
        case 0:
            type = "免費";
            point = "";
            count = "獲得<span>1";
            a = 0;
            break;

        case 59:
            type = "基本";
            point = "消耗<span>59</span>搞鬼點數";
            count = "採購<span>1";
            a = 59;
            break;

        case 579:
            type = "基本";
            point = "消耗<span>579</span>搞鬼點數";
            count = "採購<span>10";
            a = 579;
            break;

        case 89:
            type = "經典";
            point = "消耗<span>89</span>搞鬼點數";
            count = "採購<span>1";
            a = 89;
            break;

        case 869:
            type = "經典";
            point = "消耗<span>869</span>搞鬼點數";
            count = "採購<span>10";
            a = 869;
            break;

        case 99:
            type = "高級";
            point = "消耗<span>99</span>搞鬼點數";
            count = "採購<span>1";
            a = 99;
            break;

        case 959:
            type = "高級";
            point = "消耗<span>959</span>搞鬼點數";
            count = "採購<span>10";
            a = 959;
            break;
    }
    $(".maskS").fadeIn();
    $(".popS").fadeIn();
    $(".popS").find(".popWrap").html(
        `            <div class="popSContent">
        <p>是否` + point + `</br>` + count + `</span>次<span>` + type + `</span>原料?​</p>
    </div>
    <div class="btn_box">
        <button class="close" onclick="lottery(`+ a + `)">確定</button>
        <button class="cancel" onclick="closePopup()">取消</button>
    </div>
        `
    );
}

//採購&施放煙花
var lottery_lock = "open";
function lottery(a) {
    $(".maskLock").show();
    if (lottery_lock == "open") {
        lottery_lock = "lock";
                //  $.post(data_api, {
                //     type: "lottery ",
                //     user: user,
                //     price: a,
                // }, function (_res) { 
        $(".maskLock").fadeOut(300);
        lottery_lock = "open";
        // let res = JSON.parse(_res);
        // var res = _res;
        var res = lotteryres;
        if (res.status == 1) {
            $(".maskS").fadeOut();
            $(".popS").fadeOut();
            //成功
            //採購內容
            $(".mask").fadeIn();
            switch (a) {
                case 0:
                    type = "免費原料";
                    firework = "n"
                    break;
                case 59:
                case 579:
                    type = "基本原料";
                    firework = "n"
                    break;
                case 89:
                case 869:
                    type = "經典原料";
                    firework = "n"
                    break;
                case 99:
                case 959:
                    type = "高級原料";
                    firework = "n"
                    break;
                case 1:
                    type = "璀璨煙花獎勵";
                    firework = "y"
                    break;
            }
            let str = "";
            res.result.forEach((i) => {
                str += `<div class="item">
                <div class="icon${i.img}">
                </div>
                <p>${i.item_name}
                </p>
            </div>`
            })
            $(".popLottery").html(
                `<div class="popLotteryTitle" data-storke="獲得` + type + `">獲得` + type + `</div>
<div class="popWrap">            
<div class="popLotteryContent">
<div class="itemBox">
    `+ str + `
</div>
</div>
</div>
<button class="close centerLottery" onclick="closePopReload()">關閉</button>`
            );

            if ($('.checkBox').attr('data-skipClicked') == 'false' & firework == "n") {
                $('.animate').fadeIn();
                setTimeout(function () {
                    $(".popLottery").fadeIn();
                }, 1800)
            } else if ($('.checkBox').attr('data-skipClicked') == 'true' || firework == "y") {
                $(".popLottery").fadeIn();
            }
        } else {
            //失敗
            // $('.btn_box').hide();
            switch (res.status) {
                case -99:
                    text = "帳號內點數不足";
                    break;
                case -98:
                    text = "今日免費次數已用完";
                    break;
                case -97:
                    text = "未持有璀璨煙花，無法施放";
                    break;
                case -90:
                    text = "活動已結束";
                    break;
            }
            $(".maskS").fadeIn();
            $(".popS").fadeIn();
            $(".popS").find(".popWrap").html(
                `
                <div class="popSContent"><p>
             `+ text + `
                </p>
                </div>
                <button class="close center" onclick="closePopup()">確定</button>`
            );
        }
    }
    // )
}
// }


//領取道具
var send_lock = "open";
function send(item_id) {
    $(".maskLock").show();
    if (send_lock == "open") {
        send_lock = "lock";
        // $.post(data_api, {
        //     type: "send",
        //     user: user,
        //     id: item_id,
        // }, function (_res) {
        $(".maskLock").fadeOut(300);
        send_lock = "open";
        // let res = JSON.parse(_res);
        // var res = _res;
        var res = sendres;
        switch (res.status) {
            case -99:
                send_text = "領取失敗，請重新領取";
                closepop = "closePopReload()";
                break;
            case -90:
                send_text = "活動已結束";
                closepop = "closeSpopup()";
                break;
            case 1:
                send_text = "領取成功";
                closepop = "closeSpopupGet()";
                break;
        }
        $(".maskS").fadeIn();
        $(".popS").fadeIn();
        $(".popS").find(".popWrap").html(
            `
                <div class="popSContent"><p>
             `+ send_text + `
                </p>
                </div>
                <button class="close center" onclick=`+ closepop + `>確定</button>`
        );
    }
    // )
}
// }

//添加原料
var recycle_lock = "open";
function make(item_id) {
    $(".maskLock").show();
    if (recycle_lock == "open") {
        recycle_lock = "lock";
        // $.post(data_api, {
        //     type: "recycle",
        //     user: user,
        //     id: item_id,
        // }, function (_res) {
        $(".maskLock").fadeOut(300);
        recycle_lock = "open";
        // let res = JSON.parse(_res);
        // var res = _res;
        var res = recycleres;
        switch (res.status) {
            case -99:
                make_text = "添加失敗，請重新添加";
                closepop = "closePopReload()";
                break;
            case -90:
                make_text = "活動已結束";
                closepop = "closeSpopup()";
                break;
            case 1:
                make_text = "添加成功";
                closepop = "closeSpopupGet()";
                break;
        }
        $(".maskS").fadeIn();
        $(".popS").fadeIn();
        $(".popS").find(".popWrap").html(
            `
                <div class="popSContent"><p>
             `+ make_text + `
                </p>
                </div>
                <button class="close center" onclick=`+ closepop + `>確定</button>`
        );
    }
    // )
}
// }




//登出
function logout_dg() {
    $("#logout-form").submit();
}
