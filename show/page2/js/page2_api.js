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
  } else if (res.status == 1) {
    //已登入
    $(".unlockCard").html(res.lottery);
    $(".ex_point").html(res.point);
    $("#count").html(res.userinfo.distanc);
  }
}
//   );
// }

//轉盤
function play(i) {
  console.log(111)
  $(".mask_b2").fadeIn();
    // $.post(
    //   "get_setting.php",
    //   {
    //     type: "roulette",
    //     user: user,
    //     char: char,
    //     frequency: i,
    //   },
    //   function (_res) {
    // var res = JSON.parse(_res);
    var res = rouletteres;
    $(".mask_b2").fadeOut();
    //轉11次
    if (res.status == 1 && i == 100) {
      //轉盤動畫
      $(".pop_s").fadeOut();
      $(".roulette_box").css({ "z-index": "101" });
      $(".skip").css({ display: "block" });
      $(".skip").css({ "z-index": "101" });

      var skipClicked = false; //skip是否被點擊

      $(".skip").on("click", function () {
        skipClicked = true;
        $(".roulette").stop();
        $(".pop_r").fadeIn();
      });

      $(".roulette").css({ transform: "rotate(720deg)" });

      if (!skipClicked) {
        // 1.5秒後執行
        setTimeout(function () {
          $(".pop_r").fadeIn();
        }, 1500);
      }

      $(".pop_r_wrap").html(
        `<div class="pop_s_title">以下為您獲得的<span>黃金輪盤</span>獎勵​​</div>
          <div class="pop_r_content">
          <table class="table_11">
          <tr>
              <td width="50px"><div class="item_` +
        res.item[0]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[0]["item_name"] +
        `</td>
              <td width="50px"><div class="item_` +
        res.item[1]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[1]["item_name"] +
        `</td>
              <td width="50px"><div class="item_` +
        res.item[2]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[2]["item_name"] +
        `</td>
          </tr>
          <tr>
              <td><div class="item_` +
        res.item[3]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[3]["item_name"] +
        `</td>
              <td><div class="item_` +
        res.item[4]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[4]["item_name"] +
        `</td>
              <td><div class="item_` +
        res.item[5]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[5]["item_name"] +
        `</td>
          </tr>
          <tr>
              <td><div class="item_` +
        res.item[6]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[6]["item_name"] +
        `</td>
              <td><div class="item_` +
        res.item[7]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[7]["item_name"] +
        `</td>
              <td><div class="item_` +
        res.item[8]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[8]["item_name"] +
        `</td>
          </tr>
          <tr>
              <td><div class="item_` +
        res.item[9]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[9]["item_name"] +
        `</td>
              <td><div class="item_` +
        res.item[10]["img"] +
        `"></div></td>
              <td width="100px">` +
        res.item[10]["item_name"] +
        `</td>
          </tr>
      </table>
          ※道具將於30分鐘內發送至角色提領中心。
          </div>`
      );
    }
    //轉1次
    else if (res.status == 1 && i == 10) {
      console.log(res.item)
      //轉盤動畫
      $(".pop_s").fadeOut();
      $(".roulette_box").css({ "z-index": "101" });
      $(".skip").css({ display: "block" });
      $(".skip").css({ "z-index": "101" });

      var skipClicked = false; //skip是否被點擊

      $(".skip").on("click", function () {
        skipClicked = true;
        $(".roulette").stop();
        $(".pop_r").fadeIn();
      });

      $(".roulette").css({ transform: "rotate(720deg)" });

      if (!skipClicked) {
        // 1.5秒後執行
        setTimeout(function () {
          $(".pop_r").fadeIn();
        }, 1500);
      }

      $(".pop_r_wrap").html(
        `<div class="pop_s_title">以下為您獲得的<span>黃金輪盤</span>獎勵​​</div>
        <div class="pop_r_content">
        <table class="table_1">
        <tr>
            <td width="50px"><div class="item_` +
        res.item[0]["img"] +
        `"></div></td>
            <td width="100px">` +
        res.item[0]["item_name"] +
        `</td>
        </tr>
    </table>
        ※道具將於30分鐘內發送至角色提領中心。
        </div>`
      );
    }
    //點數不足
    else if (res.status == -99) {
      $(".pop_s").fadeOut();
      $(".mask_b").fadeIn();
      $(".pop_s_yesonly").fadeIn();
      $(".pop_s_yesonly_wrap")
        .html(`<div class="pop_s_title">轉輪盤失敗​​​</div>
    <div class="pop_s_content">
    ​所持有的黃金積分不足。
    </div>`);
    }
      }
  //   );
  // }

/*   let base = 2160; */ //先转满360×6圈
/*   let result = getRandom(-30,330); */ // 最后一圈角度，获取-30到330的随机数
/*   let angelEnd = -(base+result) */ // 结束角度数，负数代表逆时针旋转
/* $(".roulette").css({"transform":"rotate(720deg)"}); */ // 设置CSS
