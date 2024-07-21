get_setting();

function get_setting() {
  // $.post(
  //   "get_setting.php",
  //   {
  //     type: "login",
  //     user: user,
  //     char: char,
  //   },
  //   function (_res) {
  //     var res = JSON.parse(_res);
  var res = loginres;
  if (res.status == -99) {
    //不明錯誤
    alert("請重整頁面");
  }
  if (res.status == 1) {
    _lottery = res.lottery;
    //已登入
    $(".unlockCard").html(res.lottery);
    $(".ex_point").html(res.point);

    $("#paper").html(res.userinfo.already_use);
    if (res.userinfo.awards == 0) {
      $(".choose").html(`點擊選擇`);
    } else {
      $(".choose").html(res.userinfo.awards);
    }
  }
}
//   );
// }

/*選擇獎勵 */

// var itembox = ["刃牙+","凌空斬","蠍殺","冥王","水晶權杖","靈魂權杖","P90TR衝鋒槍","轉輪手槍"]
// var str =""
// itembox.forEach(i => {
//   str+= `<button class="choose_btn" onclick="pop_s(${i})">${i}</br>+10</button>`
// });


var awards1 = "刃牙+10";
var awards2 = "凌空斬+10";
var awards3 = "蠍殺+10";
var awards4 = "冥王+10";
var awards5 = "水晶權杖+10";
var awards6 = "靈魂權杖+10";
var awards7 = "P90TR衝鋒槍+10";
var awards8 = "轉輪手槍+10";

$(".choose").on("click", function () {
  $(".mask_b").fadeIn();
  $(".pop_c").fadeIn();
  $(".pop_c_wrap").html(`<div class="pop_b_title">自選獎勵</div>
        <div class="choose_btn_box">
            <button class="choose_btn" onclick="pop_s(awards1)">刃牙</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards2)">凌空斬</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards3)">蠍殺</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards4)">冥王</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards5)">水晶權杖</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards6)">靈魂權杖</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards7)">P90TR衝鋒槍</br>+10</button>
            <button class="choose_btn" onclick="pop_s(awards8)">轉輪手槍</br>+10</button>
        </div>
        <p>※中獎時將依照選定獎勵進行發送。​</p>`);
});

/*確定選擇獎勵*/
function pop_s(i) {
  $(".mask_b2").fadeIn();
  // $.post(
  //   "get_setting.php",
  //   {
  //     type: "choose",
  //     user: user,
  //     char: char,
  //     name: i,
  //   },
  //   function (_res) {
  //     var res = JSON.parse(_res);
  var res = choose
  $(".mask_b2").fadeOut();
  if (res.status == 1) {
    $(".mask_b").fadeIn();
    $(".pop_c").fadeOut();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap").html(
      `<div class="pop_s_title">選擇成功</div>
    <div class="pop_s_content">
        您已成功設定` +
      i +
      `作為自選獎勵。</br>
        ※中獎時將依照活動截止時設定之獎勵進行
        </div>`
    );
    $(".choose").html(i);
  } else if (res.status == -99) {
    //不明錯誤
    alert("請重整頁面");
  }
}
//   );
// }

$(".put").on("click", function () {
  $(".pop_unlockCard").html(_lottery);
});
//投入摸彩券
function put() {
  $(".mask_b2").fadeIn();
  // $.post(
  //   "get_setting.php",
  //   {
  //     type: "lottery",
  //     user: user,
  //     char: char,
  //   },
  //   function (_res) {
  //     var res = JSON.parse(_res);
  var res = lottery
  $(".mask_b2").fadeOut();
  var num1 = parseInt($(".unlockCard").text(), 10); //抓取畫面上目前持有摸彩券數量並轉為數字
  var num2 = parseInt($("#paper").text(), 10); //抓取畫面上目前已投入摸彩券數量並轉為數字
  var sum = num1 + num2;
  if (res.status == 1) {
    $(".pop_s").fadeOut();
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap").html(
      `<div class="pop_s_title">投入成功</div>
    <div class="pop_s_content">
    累計已投入` +
      sum +
      `張摸彩券。
        </div>`
    );
  } else if (res.status == -99) {
    //摸彩券不足
    $(".pop_s").fadeOut();
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap").html(`<div class="pop_s_title">投入失敗</div>
    <div class="pop_s_content">
    所持有的摸彩券不足。​
        </div>`);
  } else if (res.status == -98) {
    //未選擇獎勵
    $(".pop_s").fadeOut();
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap").html(`<div class="pop_s_title">投入失敗</div>
    <div class="pop_s_content">
    請先完成自選獎勵設定。
        </div>`);
  }
}
//   );
// }
