$.post(
  "get_setting.php",
  {
    type: "login",
    user: user,
    char: char,
  },
  function (_res) {
    var res = JSON.parse(_res);
    $(".unlockCard").html(res.lottery);
    $(".ex_point").html(res.point);
  }
);
