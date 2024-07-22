function logout_dg() {
  console.log("登出");
  $("#logout-form").submit();
}
var user = $(".account span").text();

var data_api = "/script/20240614/getSetting";


get_setting()
function get_setting() {
  // $.post(data_api, {
  //   type: "login",
  //   user: user,
  // }, function (_res) {
    var _res = loginres;
    var e = new Date().getTime(),
      n = new Date(2224, 5, 26, 12, 0, 0).getTime();
    //活動時間結束
    if (_res.status == -90 || e > n) {
      $(".section2Mask").show();
      $(".dartsYbtn,.dartsBbtn,.dartsRbtn").removeClass("animate__animated");
      $(".dartsYbtn,.dartsBbtn,.dartsRbtn").removeClass("animate__pulse");
      $(".dartsYbtn,.dartsBbtn,.dartsRbtn").removeClass("animate__infinite");
      $('.leftbarBtn').on('click', function () {
        var target = $(this).data('target');
        if (target == "#shop") {
          $(".maskS , .popS").fadeIn(),
            $(".popScontent").html(`
            <div class="popStitle">活動已截止！​</div>
            <p>感謝您的支持！​​</p>
            `);
          $(".btnYes").hide();
          $(".btnHome,.btnNo").show();
          $(".btnHome a").html("前往官網");
          $(".btnHome a").attr("href", "https://www.digeam.com/index");
          $(".btnNo").attr("onclick","popClose(); popSClose();")
        } else {
        }
      });
    }
    //判斷目前氣球
    if (_res.balloon == 0) {
      $(".balloom").css({ backgroundImage: 'url(./img/balloomEnd.png)' });
      $(".otherBalloom").css({ backgroundImage: 'url(./img/otherBalloom4.png)' });
      $(".timeBox p i").eq(0).html("000");
      $(".timeBox p i").eq(1).html("00");
      $(".timeBox p i").eq(2).html("00");
    } else {
      $(".balloom").css({ backgroundImage: 'url(./img/balloom' + _res.balloon + '.png)' });
      $(".otherBalloom").css({ backgroundImage: 'url(./img/otherBalloom' + _res.balloon + '.png)' });

      //倒數計時
      var interval = setInterval(function () {
        const endTimeStamp = new Date(_res.countdown_time.replace('/-/g', '/')).getTime()//結束時間
        // const endTimeStamp = new Date(2024, 5, 6, 18, 17, 50).getTime();//結束時間
        //氣球1
        const startTimeStampBalloom1 = endTimeStamp - 259200000; //開始時間 (72小時前，以毫秒計算)
        const balloom1M = startTimeStampBalloom1 + 3600000; //變中氣球時間
        const balloom1L = startTimeStampBalloom1 + 22500000; //變大氣球時間
        const balloom1XL = startTimeStampBalloom1 + 44280000; //變特大氣球時間
        //氣球2
        const startTimeStampBalloom2 = endTimeStamp - 345600000; //開始時間 (96小時前，以毫秒計算)
        const balloom2M = startTimeStampBalloom2 + 7920000; //變中氣球時間
        const balloom2L = startTimeStampBalloom2 + 41200000; //變大氣球時間
        const balloom2XL = startTimeStampBalloom2 + 80640000; //變特大氣球時間
        //氣球3
        const startTimeStampBalloom3 = endTimeStamp - 432000000; //開始時間 (120小時前，以毫秒計算)
        const balloom3M = startTimeStampBalloom3 + 9780000; //變中氣球時間
        const balloom3L = startTimeStampBalloom3 + 31500000; //變大氣球時間
        const balloom3XL = startTimeStampBalloom3 + 64900000; //變特大氣球時間
        //氣球4
        // const startTimeStampBalloom4 = endTimeStamp - 600000; //開始時間 (72小時前，以毫秒計算)
        // const balloom4M = startTimeStampBalloom4 + 10000; //變中氣球時間
        // const balloom4L = startTimeStampBalloom4 + 20000; //變大氣球時間
        // const balloom4XL = startTimeStampBalloom4 + 30000; //變特大氣球時間
        const startTimeStampBalloom4 = endTimeStamp - 432000000; //開始時間 (120小時前，以毫秒計算)
        const balloom4M = startTimeStampBalloom4 + 5280000; //變中氣球時間
        const balloom4L = startTimeStampBalloom4 + 16800000; //變大氣球時間
        const balloom4XL = startTimeStampBalloom4 + 26400000; //變特大氣球時間
        const nowTimeStamp = new Date().getTime()//目前時間
        var seconds = (endTimeStamp - nowTimeStamp) / 1000;//差值
        var hr = parseInt((seconds / 60) / 60);
        var min = parseInt((seconds - (hr * 60 * 60)) / 60);
        var sec = parseInt(seconds - (hr * 60 * 60) - (min * 60));

        // 將 hr 格式化為 3 位數，min 和 sec 格式化為 2 位數
        var formattedHr = hr.toString().padStart(3, '0');
        var formattedMin = min.toString().padStart(2, '0');
        var formattedSec = sec.toString().padStart(2, '0');

        $(".timeBox p i").eq(0).html(formattedHr);
        $(".timeBox p i").eq(1).html(formattedMin);
        $(".timeBox p i").eq(2).html(formattedSec);

        if (hr == 0 && min == 0 && sec == 0 && _res.balloon == 4 || sec < 0 && _res.balloon == 4) {
          $(".timeBox p i").eq(0).html("000");
          $(".timeBox p i").eq(1).html("00");
          $(".timeBox p i").eq(2).html("00");
          clearInterval(interval);
          $(".balloom").css({ backgroundImage: 'url(./img/balloomEnd.png)' });
        } else if (hr == 0 && min == 0 && sec == 0) {
          clearInterval(interval);
          location.reload();
        }

        //判斷氣球大小
        if (_res.balloon == 1) {
          if (nowTimeStamp > balloom1XL) {
            $(".scale").css("transform", "scale(1)");
          } else if (nowTimeStamp > balloom1L && nowTimeStamp <= balloom1XL) {
            $(".scale").css("transform", "scale(0.8)");
          } else if (nowTimeStamp > balloom1M && nowTimeStamp <= balloom1L) {
            $(".scale").css("transform", "scale(0.6)");
          }
        } else if (_res.balloon == 2) {
          if (nowTimeStamp > balloom2XL) {
            $(".scale").css("transform", "scale(1)");
          } else if (nowTimeStamp > balloom2L && nowTimeStamp <= balloom2XL) {
            $(".scale").css("transform", "scale(0.8)");
          } else if (nowTimeStamp > balloom2M && nowTimeStamp <= balloom2L) {
            $(".scale").css("transform", "scale(0.6)");
          }
        } else if (_res.balloon == 3) {
          if (nowTimeStamp > balloom3XL) {
            $(".scale").css("transform", "scale(1)");
          } else if (nowTimeStamp > balloom3L && nowTimeStamp <= balloom3XL) {
            $(".scale").css("transform", "scale(0.8)");
          } else if (nowTimeStamp > balloom3M && nowTimeStamp <= balloom3L) {
            $(".scale").css("transform", "scale(0.6)");
          }
        } else if (_res.balloon == 4) {
          if (nowTimeStamp > balloom4XL) {
            $(".scale").css("transform", "scale(1)");
          } else if (nowTimeStamp > balloom4L && nowTimeStamp <= balloom4XL) {
            $(".scale").css("transform", "scale(0.8)");
          } else if (nowTimeStamp > balloom4M && nowTimeStamp <= balloom4L) {
            $(".scale").css("transform", "scale(0.6)");
          }
        };
      }, 1000);
    }
    //對話框文字
    var text = _res.dialog.split(" ");
    var one = text[0];
    var two = text[1];
    $('.bubblesText p').eq(0).html(one);
    $('.bubblesText p').eq(1).html(two);
    if (_res.winner_list.length === 0) {
      $(".winnerBox").hide();
    } else {
      if (_res.winner_list.length === 1) {
        $('.winnerText').html(`<div class="winner">
          <p>`+ _res.winner_list[0] + `</p>
          <p>1號</p>
          <p>10,000</p>
      </div>`);
      } else if (_res.winner_list.length === 2) {
        $('.winnerText').html(`<div class="winner">
          <p>`+ _res.winner_list[0] + `</p>
          <p>1號</p>
          <p>10,000</p>
      </div>
      <div class="winner">
          <p>`+ _res.winner_list[1] + `</p>
          <p>2號</p>
          <p>30,000</p>
      </div>`);
        $(".winner").css({
          animation: "slide2 10s infinite",
          opacity: 0
        });
        $(".winner:nth-child(2)").css({
          animationDelay: "5s"
        });
      } else if (_res.winner_list.length === 3) {
        $('.winnerText').html(`<div class="winner">
          <p>`+ _res.winner_list[0] + `</p>
          <p>1號</p>
          <p>10,000</p>
      </div>
      <div class="winner">
          <p>`+ _res.winner_list[1] + `</p>
          <p>2號</p>
          <p>30,000</p>
      </div>
      <div class="winner">
      <p>`+ _res.winner_list[2] + `</p>
      <p>3號</p>
      <p>50,000</p>
  </div>`);
        $(".winner").css({
          animation: "slide3 15s infinite",
          opacity: 0
        });
        $(".winner:nth-child(2)").css({
          animationDelay: "5s"
        });
        $(".winner:nth-child(3)").css({
          animationDelay: "10s"
        });
      } else if (_res.winner_list.length === 4) {
        $('.winnerText').html(`<div class="winner">
  <p>`+ _res.winner_list[0] + `</p>
  <p>1號</p>
  <p>10,000</p>
</div>
<div class="winner">
  <p>`+ _res.winner_list[1] + `</p>
  <p>2號</p>
  <p>30,000</p>
</div>
<div class="winner">
<p>`+ _res.winner_list[2] + `</p>
<p>3號</p>
<p>50,000</p>
</div>
<div class="winner">
<p>`+ _res.winner_list[3] + `</p>
<p>加碼</p>
<p>50,000</p>
</div>`);
        $(".winner").css({
          animation: "slide4 20s infinite",
          opacity: 0
        });
        $(".winner:nth-child(2)").css({
          animationDelay: "5s"
        });
        $(".winner:nth-child(3)").css({
          animationDelay: "10s"
        });
        $(".winner:nth-child(4)").css({
          animationDelay: "15s"
        });
      };
    }
    //未登
    if (_res.status == -99) {
      $(".loginBtn").html("登入");
      $(".todayValue span,.accValue span,.points span,.dartsYquantity,.dartsBquantity,.dartsRquantity,.shopPoint,.inflation").html("0"),
        $(".account span").html("請先登入帳號"),
        $(".dartsYbtn , .dartsBbtn , .dartsRbtn").removeAttr("onclick");
      $(".dartsYbtn , .dartsBbtn , .dartsRbtn").on("click", function () {
        $(".maskS , .popS").fadeIn(),
          $(".popScontent").html("<p>請先登入<br>掘夢網會員!</p>");
        $(".btnYes").hide();
        $(".btnNo,.btnHome").show();
        $(".btnHome a").html("前往登入");
        $(".btnHome a").attr("href", "https://www.digeam.com/login");
      }
      );
    }
    //已登
    else {
      $(".loginBtn").html("登出");
      $(".todayValue span").html(_res.today_store_value);
      $(".accValue span").html(_res.acc_store_value);
      $(".points span").html(_res.points);
      $(".inflation").html(_res.inflation_times);
      $(".dartsYquantity").html(_res.darts.y_darts);
      $(".dartsBquantity").html(_res.darts.b_darts);
      $(".dartsRquantity").html(_res.darts.r_darts);
      if (localStorage.getItem('skip') == 'true') {
        $('.dartsYbtn').attr('onclick', 'FirstDarts("y_darts","Y")');
        $('.dartsBbtn').attr('onclick', 'FirstDarts("b_darts","Y")');
        $('.dartsRbtn').attr('onclick', 'FirstDarts("r_darts","Y")');
      }
      if (_res.status == 1) {
        if (_res.reward_points !== 0) {
          $(".maskS , .popS").fadeIn(),
            $(".popScontent").html(`
              <div class="popStitle">​已充氣​</div>
              <p>您獲得了<span>`+ _res.reward_points + `</span>點爆爆積分！​​</p>
              `);
          $(".btnNo,.btnHome").hide();
          $(".btnYes").show();
          $(".btnYes").attr('onclick', 'popSClose()');
        }
      } else if (_res.status == 2) {
        $(".maskS , .popS").fadeIn(),
          $(".popScontent").html(`
          <div class="popStitle">您成功爆破了氣球！</div>
          <p>您獲得了<span>30000</span>點紅利點數</br>以及<span>`+ _res.reward_points + `</span>點爆爆積分！​​</p>
          `);
        $(".btnNo,.btnHome").hide();
        $(".btnYes").show();
        $(".btnYes").attr('onclick', 'popSClose()');
      }
    }

    loginStatus = _res.status;
    shopPoint = _res.points;
    $(function () {
      setTimeout(function () {
        $(".loading").fadeOut();
      }, 2000);
    });
  }
//   )
// }

//商店資訊
var shopLock = "open";
function shop() {
  if (shopLock == "open") {
    shopLock = "lock"
    // $.post(data_api, {
    //   type: "shop",
    //   user: user,
    // }, function (_res) {
      shopLock = "open";
      var _res = shopres;
      if (_res.status == -90) {
        $(".maskS , .popS").fadeIn(),
          $(".popScontent").html(`
          <div class="popStitle">活動已截止！​</div>
          <p>感謝您的支持！​​</p>
          `);
        $(".btnNo,.btnYes").hide();
        $(".btnHome").show();
        $(".btnHome a").html("前往官網");
        $(".btnHome a").attr("href", "https://www.digeam.com/index");
      } else if (_res.status == 1) {
        $(".shopPoint").html(shopPoint);
        let str = "";
        _res.item_lists.forEach(i => {
          str += `
          <div class="itemBg" data-id="${i.id}" data-status="${i.status}">
          <div class="tipG">限量</div>
          <div class="tipB"></div>
          <div class="itemInfo"></div>
          <div class="itemBox">
              <p class="game">${i.game}</p>
              <p class="name">${i.item_name}</p>
              <div class="item${i.id}"></div>
              <div class="priceBox">
                  <button class="price" onclick="remindExchange(${i.points},'${i.game}','${i.item_name}',${i.id})">${i.points}點</button>
              </div>
          </div>
      </div>`
        });
        $("#shop").fadeIn();
        $(".shopPopWrap").find(".popContent").html(
          str
        );
        /*是否限量*/
        $(".itemBg").each(function () {
          var itemid = $(this).data('id');
          var text;

          switch (itemid) {
            case 21:
              text = "每日</br>限10";
              break;
            case 22:
              text = "每日</br>限3";
              break;
            case 23:
            case 24:
              text = "每日</br>限1";
              break;
            case 15:
            case 18:
            case 19:
            case 20:
            case 25:
              text = "每帳號</br>限1";
              break;
          }

          if ([4, 5, 6, 8, 11, 13, 14].includes(itemid)) {
            $(this).find(".tipG").show();
          } else if ([15, 18, 19, 20, 21, 22, 23, 24, 25].includes(itemid)) {
            $(this).find(".tipB").show().html(text);
          }

          /*是否可兌換*/
          var itemstatus = $(this).data('status');
          if (["N", "Z", "L"].includes(itemstatus)) {
            $(this).find(".price").removeAttr("onclick");
            $(this).find(".priceBox button").removeClass("price");
            $(this).find(".priceBox button").addClass("priceN");
            if (itemstatus == "N") {
              $(this).find(".priceN").html("已兌換完畢");
            } else if (itemstatus == "Z") {
              $(this).find(".priceN").html("已達本日兌換上限");
            } else if (itemstatus == "L") {
              $(this).find(".priceN").html("已達帳號兌換上限");
            }
          }
        });

        /*道具說明*/
        $(".itemInfo").hide();
        $(".itemBg").on("mouseenter", function () {
          var itemid = $(this).data('id');
          var price;
          switch (itemid) {
            case 15: {
              price = "2,000";
              break;
            }
            case 18: {
              price = "3,690";
              break;
            }
            case 19:
            case 20: {
              price = "3,990";
              break;
            }
          }
          if ([25].includes(itemid)) {
            $(this).find(
              ".itemInfo"
            ).html(`<span>數量有限</span></br><span>兌完即止</span>`);
            $(this).find(".itemInfo").show();
          } else if ([15, 18, 19, 20].includes(itemid)) {
            $(this).find(
              ".itemInfo"
            ).html(`價值` + price + `元</br>兌換時需填寫</br>「機會中獎憑證」</br><span>數量有限</span></br><span>兌完即止</span>`);
            $(this).find(".itemInfo").show();
          } else if ([2, 7, 8, 9, 13, 14].includes(itemid)) {
            $(this).find(
              ".itemInfo"
            ).html(`隨機一個</br>不選樣式`);
            $(this).find(".itemInfo").show();
          }
        });
        $(".itemBg").on("mouseleave", function () {
          $(".itemInfo").hide();
        });
      }
    }
    // )
  }
// }

//確認兌換
function remindExchange(points, game, item_name, id) {
  $(".maskS,.popS").fadeIn();
  $(".popS").find(".popScontent").html(
    `<p>是否消耗<span>` + points + `</span>積分兌換</br><span>` + game + item_name + `</span>?​</p>`
  );
  $(".btnHome").hide();
  $(".btnYes,.btnNo").show();
  if (loginStatus == -99) {
    $(".btnYes").removeAttr("onclick");
    $(".btnYes").on("click", function () {
      $(".popScontent").html("<p>請先登入<br>掘夢網會員!</p>");
      $(".btnYes").hide();
      $(".btnNo,.btnHome").show();
      $(".btnHome a").html("前往登入");
      $(".btnHome a").attr("href", "https://www.digeam.com/login");
    })
  } else {
    $('.btnYes').attr("onclick", "exchange(" + id + ",'" + game + "','" + item_name + "')");
  }
};


//兌換商品
var exchangeLock = "open";
function exchange(id, game, item_name) {
  $(".maskLock").show();
  if (exchangeLock == "open") {
    exchangeLock = "lock"
    // $.post(data_api, {
    //   type: "exchange",
    //   user: user,
    //   id: id,
    // }, function (_res) {
      $(".maskLock").fadeOut(300);
      exchangeLock = "open";
      var _res = exchangeres;
      switch (_res.status) {
        case 1:
          text = "已成功兌換" + game + item_name;
          break;
        case -98:
          text = "​積分不足，無法兌換​";
          break;
        case -97:
          text = "此商品已兌換完畢";
          break;
        case -96:
          text = "今日兌換次數已達上限";
          break;
      }
      if (_res.status == -90) {
        $(".popS").find(".popScontent").html(`
        <div class="popStitle">活動已截止！</div>
        <p>感謝您的支持！</p>`
        );
        $(".btnNo,.btnYes").hide();
        $(".btnHome").show();
        $(".btnHome a").html("前往官網");
        $(".btnHome a").attr("href", "https://www.digeam.com/index");
      }
      else if (_res.status == 1) {
        if ([15, 18, 19, 20].includes(id)) {
          $(".popS").find(".popScontent").html(
            `<p>
      `+ text + `
      </p>
      <p>
      此商品須填寫<a href="https://download.digeam.com/download/digeam/DiGeam_OWC.zip" target="_blank">機會中獎憑證</a>並回傳<a href="https://www.digeam.com/cs/report" target="_blank">客服中心</a>
      </p>`);
        } else {
          $(".popS").find(".popScontent").html(
            `<p>
      `+ text + `
      </p>`);
        }
        $(".btnNo,.btnHome").hide();
        $(".btnYes").show();
        $('.btnYes').attr("onclick", "popSCloseGet()");
      }
      else {
        $(".popS").find(".popScontent").html(
          `<p>
    `+ text + `
    </p>`);
        $(".btnNo,.btnHome").hide();
        $(".btnYes").show();
        if (_res.status == -98) {
          $('.btnYes').attr("onclick", "popSClose()");
        } else {
          $('.btnYes').attr("onclick", "popSCloseGet()");
        }
      }
    }
    // )
  }
// }


//是否略過狀態
if (localStorage.getItem('skip') == 'true') {
  $('.cheak').removeClass('cheakF');
  $('.cheak').addClass('cheakT');
  $('.cheak').attr('data-skipClicked', 'true');
}

$('.cheak').on('click', function () {
  let check = $('.cheak').attr('data-skipClicked');
  if (check == 'false') {
    $('.cheak').removeClass('cheakF');
    $('.cheak').addClass('cheakT');
    $('.cheak').attr('data-skipClicked', 'true');
    if (loginStatus == 1) {
      $('.dartsYbtn').attr('onclick', 'FirstDarts("y_darts","Y")');
      $('.dartsBbtn').attr('onclick', 'FirstDarts("b_darts","Y")');
      $('.dartsRbtn').attr('onclick', 'FirstDarts("r_darts","Y")');
    }
    skip(true);
  } else if (check == 'true') {
    $('.cheak').removeClass('cheakT');
    $('.cheak').addClass('cheakF');
    $('.cheak').attr('data-skipClicked', 'false');
    if (loginStatus == 1) {
      $('.dartsYbtn').attr('onclick', 'FirstDarts("y_darts","N")');
      $('.dartsBbtn').attr('onclick', 'FirstDarts("b_darts","N")');
      $('.dartsRbtn').attr('onclick', 'FirstDarts("r_darts","N")');
    }
    skip(false);
  }
})
function skip(val) {
  localStorage.setItem('skip', val);
}

//神射手
var keyLock = false;
var keyLockTime = 5000;

function FirstDarts(darts, skip) {
  if (!keyLock) {
    keyLock = true;
    $(".dartsYbtn,.dartsBbtn,.dartsRbtn").prop("disabled", true);
    trueDarts(darts, skip);
  }
}

var dartsLock = "open";
function trueDarts(darts, skip) {
  $(".maskLock").show();
  if (dartsLock == "open") {
    dartsLock = "lock";
    // $.post(data_api, {
    //   type: "darts",
    //   user: user,
    //   darts: darts,
    //   skip: skip,
    // }, function (_res) {
      $(".maskLock").fadeOut(300);
      dartsLock = "open";
      $(".dartsYbtn,.dartsBbtn,.dartsRbtn").prop("disabled", false);
      keyLock = false;
      var _res = dartsres;
      if (_res.status == 1) {
        //成功
        $('.maskS').fadeIn();
        $(".popS").find(".popScontent").html(
          `<div class="popStitle">射中氣球！</div>
                <p>您獲得了<span>`+ _res.b_point + `</span>點週年紅利點數！</p>`);
        $(".btnNo,.btnHome").hide();
        $(".btnYes").show();
        $('.btnYes').attr("onclick", "reload()");
        //不略過動畫
        if ($('.cheak').attr('data-skipClicked') == 'false') {
          $('.animationBalloom,.animationDarts').fadeIn();
          if (darts == "y_darts") {
            $('.animationBalloom').css("backgroundImage", "url(./img/balloomY.png)");
            $('.animationDarts').css("backgroundImage", "url(./img/dartsY.png)");
          } else if (darts == "b_darts") {
            $('.animationBalloom').css("backgroundImage", "url(./img/balloomB.png)");
            $('.animationDarts').css("backgroundImage", "url(./img/dartsB.png)");
          } else if (darts == "r_darts") {
            $('.animationBalloom').css("backgroundImage", "url(./img/balloomR.png)");
            $('.animationDarts').css("backgroundImage", "url(./img/dartsR.png)");
          };
          setTimeout(function () {
            $('.popS').fadeIn();
          }, 3400);
        }
        //略過動畫
        else if ($('.cheak').attr('data-skipClicked') == 'true') {
          $('.popS').fadeIn();
        }
      } else {
        //失敗
        $('.popS,.maskS').fadeIn();
        if (_res.status == -90) {
          $(".popS").find(".popScontent").html(`
        <div class="popStitle">活動已截止！</div>
        <p>感謝您的支持！</p>`
          );
          $(".btnNo,.btnYes").hide();
          $(".btnHome").show();
          $(".btnHome a").html("前往官網");
          $(".btnHome a").attr("href", "https://www.digeam.com/index");
        } else if (_res.status == -98) {
          $(".popS").find(".popScontent").html(`
        <p>持有飛鏢不足</br>是否前往儲值商店儲值以獲取飛鏢？</p>`
          );
          $(".btnYes").hide();
          $(".btnHome,.btnNo").show();
          $(".btnHome a").attr("href", "https://www.digeam.com/member/billing");
          $(".btnHome a").html("前往儲值");
        } else if (_res.status == -97) {
          $(".popS").find(".popScontent").html(`
        <p>今日次數已使用</p>`
          );
          $(".btnNo,.btnHome").hide();
          $(".btnYes").show();
          $(".btnYes").attr('onclick', 'popSClose()');
        }
      }
    }
    // )
  }
// }

//活動紀錄
var recodeLock = "open";
function recode() {
  if (recodeLock == "open") {
    recodeLock = "lock"
    // $.post(data_api, {
    //   type: "record",
    //   user: user,
    // }, function (_res) {
      recodeLock = "open";
      var _res = recoderes;

      if (_res.status == -90) {
        $(".popS,.maskS").fadeIn();
        $(".popS").find(".popScontent").html(`
          <div class="popStitle">活動已截止！</div>
          <p>感謝您的支持！</p>`
        );
        $(".btnNo,.btnYes").hide();
        $(".btnHome").show();
        $(".btnHome a").html("前往官網");
        $(".btnHome a").attr("href", "https://www.digeam.com/index");
      } else if (_res.status == 1) {
        $(".mask").fadeIn();
        $("#recode").show();
        let str1 = "";
        let str2 = "";
        if (_res.balloon_record.length === 0) {
          $("#balloomRecode").find(".tableBox").hide;
          $("#balloomRecode").html(
            `<p>尚無紀錄</p>`
          );
        } else {
          _res.balloon_record.forEach((i) => {
            str1 += `<tr>
          <td>${i.created_at}</td>
          <td>${i.activity}</td>
          <td>${i.method}</td>
          <td>${i.content}</td>
      </tr>>`;
          });
          $('tbody.balloomRecode').html(str1);
        };
        if (_res.darts_record.length === 0) {
          $("#dartsRecode").find(".tableBox").hide;
          $("#dartsRecode").html(
            `<p>尚無紀錄</p>`
          );
        } else {
          _res.darts_record.forEach((i) => {
            str2 += `<tr>
                   <td>${i.created_at}</td>
                   <td>${i.activity}</td>
                   <td>${i.method}</td>
                   <td>${i.content}</td>
               </tr>`;
          });
          $('tbody.dartsRecode').html(str2);
        }
      }
    }
    // )
  }
// }


