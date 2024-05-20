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
      // var res = JSON.parse(_res);
  var res = loginres;
  if (res.status == -99) {
    //不明錯誤
    alert("請重整頁面");
  } else if (res.status == 1) {
    //已登入
    console.log(res);
    $(".unlockCard").html(res.lottery);
    $(".ex_point").html(res.point);
    $("#count").html(res.userinfo[1]);
    if (res.pass == "y") {
      $(".buy_btn_none").css({ display: "block" });
      $(".buy_btn").css({ display: "none" });
      //黃金獎勵解鎖
      for (var i = 0; i <= 18; i++) {
        var elementId = "#day" + i + "_g";
        var removeClass = "day" + i + "_g_L";
        var addClass = "day" + i + "_g_N";
        $(elementId).removeClass(removeClass);
        $(elementId).addClass(addClass);
      }
    } else if (res.pass == "n") {
      $(".buy_btn").css({ display: "block" });
      $(".buy_btn_none").css({ display: "none" });
      //確定購買通行證
      $(".red_btn").attr("onclick", "buypass()");
    }
    // 黃金獎勵
    if (res.pass == "y" && res.today_g == "y") {
      $("#" + res.light + "_g").removeClass(res.light + "_g_N");
      $("#" + res.light + "_g").addClass(res.light + "_g");
      $("#" + res.light + "_g").addClass("pass_item");
    }
    // 幸運獎勵
    if (res.today_l == "y") {
      $("#" + res.light + "_l").removeClass(res.light + "_l_N");
      $("#" + res.light + "_l").addClass(res.light + "_l");
      $("#" + res.light + "_l").addClass("pass_item");
    }
    //可補簽獎勵圖示發亮
    res.light_resign.forEach(function (value) {
      $("#" + value).addClass("pass_item");
      $("#" + value).removeClass(value + "_L");
      $("#" + value).removeClass(value + "_N");
      $("#" + value).addClass(value + "_R");
      $("#" + value).attr("id", value + "_R");
    });
    //確認是否補簽
    res.light_resign.forEach(function (value) {
      $("#" + value + "_R").on("click", function () {
        $(".mask_b").fadeIn();
        $(".pop_s").fadeIn();
        $(".pop_s_wrap")
          .html(`<div class="pop_s_title">你確定要消耗<span>1</span>次補簽機會嗎?</div>
                <div class="pop_s_content">
                您目前擁有` +
            res.resign +
            `次補簽機會
                </div>`);
        $(".red_btn").attr("onclick", "resign(" + value + "_R)");
      })
    });
  };
}
//簽到
$(".pass_item").on("click",function(){
  resign();
})

function resign(name) {
  var id = $(name).attr("id");
  // $.post(
  //   "get_setting.php",
  //   {
  //     type: "sign",
  //     user: user,
  //     char: char,
  //     item: id,
  //   },
  //   function (res) {
  //     var res = JSON.parse(_res);
  var res = signres;
  //未滿70等
  if (res.status == -97) {
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap")
      .html(`<div class="pop_s_title">簽到失敗​​​</div>
              <div class="pop_s_content">
              角色未達Lv.70。
              </div>`);
  }
  //已領過幸運獎勵
  else if (res.status == -99) {
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap")
      .html(`<div class="pop_s_title">簽到失敗​​​</div>
      <div class="pop_s_content">
      已領取過今日幸運獎勵。
      </div>`);
  }
  //未購買通行證
  else if (res.pass == "n" || res.status == -96) {
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap")
      .html(`<div class="pop_s_title">簽到失敗​​​</div>
      <div class="pop_s_content">
      此帳號尚未開通「黃金通行證」，請先點擊頁面下方購買「黃金通行證」後，​再次嘗試領取。
      </div>`);
  }

  //已領過黃金獎勵
  else if (res.status == -98) {
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s_yesonly_wrap")
      .html(`<div class="pop_s_title">簽到失敗​​​</div>
              <div class="pop_s_content">
              已領取過今日黃金獎勵。
              </div>`);
  }
  //簽到成功
  else if (res.status == 1) {
    $(".mask_b").fadeIn();
    // $(".pop_s_yesonly").fadeIn();
    // switch(id){
    //   case'day0_g':{
    //     var text = "獲得黃金積分x4";
    //     break;
    //   }
    // }
    // $(".pop_s_yesonly_wrap")
    //     .html(`<div class="pop_s_title">簽到成功​​​</div>
    //     <div class="pop_s_content">`
    //     +text+
    //     ` </div>`);
    if (
      id == "day0_g" ||
      id == "day1_g" ||
      id == "day3_g" ||
      id == "day4_g" ||
      id == "day6_g" ||
      id == "day7_g" ||
      id == "day9_g" ||
      id == "day10_g" ||
      id == "day12_g" ||
      id == "day13_g" ||
      id == "day15_g" ||
      id == "day16_g" ||
      id == "day17_g"
    ) {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得黃金積分x4
        </div>`);
    } else if (
      id == "day0_l" ||
      id == "day1_l" ||
      id == "day2_l" ||
      id == "day4_l" ||
      id == "day5_l" ||
      id == "day6_l" ||
      id == "day8_l" ||
      id == "day9_l" ||
      id == "day10_l" ||
      id == "day12_l" ||
      id == "day13_l" ||
      id == "day14_l" ||
      id == "day16_l" ||
      id == "day17_l"
    ) {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
      <div class="pop_s_content">
      獲得黃金積分x1
      </div>`);
    } else if (id == "day2_g") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得堅固護盾(7D)x1
        </div>`);
    } else if (id == "day5_g") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得2倍等級經驗券(3H)x1
        </div>`);
    } else if (id == "day8_g") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得氣血翻湧箱x1
        </div>`);
    } else if (id == "day11_g") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得活力百倍箱x1
        </div>`);
    } else if (id == "day14_g") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得寶石剔除工具(單)x3
        </div>`);
    } else if (id == "day15_l") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得寶石剔除工具(單)x1
        </div>`);
    } else if (id == "day3_l") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得50%Buff等級經驗券(3H)x1
        </div>`);
    } else if (id == "day7_l") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得鑲嵌寶石箱x1
        </div>`);
    } else if (id == "day11_l") {
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">簽到成功​​​</div>
        <div class="pop_s_content">
        獲得堅固藥水(5H)x1
        </div>`);
    }
  }
  //補簽成功
  else if (res.status == 2) {
    checkR = id.indexOf("_R");
    if (checkR != -1) {
      id = id.replace("_R", "");
    }
    $(".mask_b").fadeIn();
    $(".pop_s_yesonly").fadeIn();
    $(".pop_s").fadeOut();
    if (
      id == "day0_g" ||
      id == "day1_g" ||
      id == "day3_g" ||
      id == "day4_g" ||
      id == "day6_g" ||
      id == "day7_g" ||
      id == "day9_g" ||
      id == "day10_g" ||
      id == "day12_g" ||
      id == "day13_g" ||
      id == "day15_g" ||
      id == "day16_g" ||
      id == "day17_g"
    ) {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得黃金積分x4
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (
      id == "day0_l" ||
      id == "day1_l" ||
      id == "day2_l" ||
      id == "day4_l" ||
      id == "day5_l" ||
      id == "day6_l" ||
      id == "day8_l" ||
      id == "day9_l" ||
      id == "day10_l" ||
      id == "day12_l" ||
      id == "day13_l" ||
      id == "day14_l" ||
      id == "day16_l" ||
      id == "day17_l"
    ) {
      $(".pop_s_yesonly").fadeIn();
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得黃金積分x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day2_g") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得堅固護盾(7D)x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day5_g") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得2倍等級經驗券(3H)x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day8_g") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得氣血翻湧箱x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day11_g") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得活力百倍箱x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day14_g") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得寶石剔除工具(單)x3
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day15_l") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得寶石剔除工具(單)x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day3_l") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得50%Buff等級經驗券(3H)x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day7_l") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得鑲嵌寶石箱x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    } else if (id == "day11_l") {
      $(".pop_s_yesonly_wrap").html(
        `<div class="pop_s_title">補簽成功​​​</div>
    <div class="pop_s_content">
    獲得堅固藥水(5H)x1
    </br>您剩餘` +
        res.resign +
        `次補簽機會。​
    </div>`
      );
    }

  }
      
   } 
//   )
// }

//   );
// }

//補簽
// function resign(name) {
//   var id = $(name).attr("id");
//   // $.post(
//   //   "get_setting.php",
//   //   {
//   //     type: "sign",
//   //     user: user,
//   //     char: char,
//   //     item: id,
//   //   },
//   //   function (res) {
//   //     var res = JSON.parse(_res);
//   var res = signres;
//   //補簽成功
//   if (res.status == 2) {
//     checkR = id.indexOf("_R");
//     if (checkR != -1) {
//       id = id.replace("_R", "");
//     }
//     $(".mask_b").fadeIn();
//     $(".pop_s_yesonly").fadeIn();
//     $(".pop_s").fadeOut();
//     if (
//       id == "day0_g" ||
//       id == "day1_g" ||
//       id == "day3_g" ||
//       id == "day4_g" ||
//       id == "day6_g" ||
//       id == "day7_g" ||
//       id == "day9_g" ||
//       id == "day10_g" ||
//       id == "day12_g" ||
//       id == "day13_g" ||
//       id == "day15_g" ||
//       id == "day16_g" ||
//       id == "day17_g"
//     ) {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得黃金積分x4
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (
//       id == "day0_l" ||
//       id == "day1_l" ||
//       id == "day2_l" ||
//       id == "day4_l" ||
//       id == "day5_l" ||
//       id == "day6_l" ||
//       id == "day8_l" ||
//       id == "day9_l" ||
//       id == "day10_l" ||
//       id == "day12_l" ||
//       id == "day13_l" ||
//       id == "day14_l" ||
//       id == "day16_l" ||
//       id == "day17_l"
//     ) {
//       $(".pop_s_yesonly").fadeIn();
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得黃金積分x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//       console.log('結束了2');
//     } else if (id == "day2_g") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得堅固護盾(7D)x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day5_g") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得2倍等級經驗券(3H)x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day8_g") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得氣血翻湧箱x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day11_g") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得活力百倍箱x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day14_g") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得寶石剔除工具(單)x3
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day15_l") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得寶石剔除工具(單)x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day3_l") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得50%Buff等級經驗券(3H)x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day7_l") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得鑲嵌寶石箱x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     } else if (id == "day11_l") {
//       $(".pop_s_yesonly_wrap").html(
//         `<div class="pop_s_title">補簽成功​​​</div>
//     <div class="pop_s_content">
//     獲得堅固藥水(5H)x1
//     </br>您剩餘` +
//         res.resign +
//         `次補簽機會。​
//     </div>`
//       );
//     }
//   }
// }
//   )
// }

//購買通行證
function buypass() {
  $(".mask_b2").fadeIn();
  let _radio = $("input[name='gender']:checked").val();
  if (_radio != 0 && _radio != 1) {
    alert("請選取性別");
    $(".mask_b2").fadeOut();
  } else if (_radio == 1 || _radio == 0) {
    // $.post(
    //   "get_setting.php",
    //   {
    //     type: "buypass",
    //     user: user,
    //     char: char,
    //     gender: _radio,
    //   },
    //   function (_res) {
    //     var res = JSON.parse(_res);
        var res = buypassres;
        $(".mask_b2").fadeOut();
        $(".pop_s").fadeOut();
        console.log(res);
        if (res.status == 1) {
          $(".mask_b").fadeIn();
          $(".pop_s_yesonly").fadeIn();
          $(".pop_s_yesonly_wrap")
            .html(`<div class="pop_s_title">開通成功​​​</div>
              <div class="pop_s_content">
              ※道具將於30分鐘內發送至角色提領中心。
              </div>`);
          $(".buy_btn_none").css({ display: "block" });
          $(".buy_btn").css({ display: "none" });
        } else if (res.status == -99) {
          $(".mask_b").fadeIn();
          $(".pop_s_yesonly").fadeIn();
          $(".pop_s_yesonly_wrap")
            .html(`<div class="pop_s_title">開通失敗​​​</div>
              <div class="pop_s_content">
              帳號內點數不足。​
              </div>`);
        }
      }
    // );
  }
// }
