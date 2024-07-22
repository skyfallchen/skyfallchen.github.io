//整頁滾動
const $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'),//根據瀏覽器的不同，選擇適當的滾動容器
  $section = $('.section');
let numOfPages = $section.length - 1 // 取得 section 的數量
scrollLock = false

var curPage // 起始頁
let scrollPos = $(document).scrollTop()
if(scrollPos > 946){
  curPage = 1
}else{
  curPage = 0
}


// 檢查是否為移動裝置
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}



function scrollPage() {
  if (!isMobileDevice()) {
  // 滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else
    navigateDown();
}
);
}

// 鍵盤上下鍵
$(document).on("keydown", function (e) {
  if (scrollLock) return;
  if (e.which === 38)
    navigateUp();
  else if (e.which === 40)
    navigateDown();
});
}

// 上滾動
function navigateUp() {
  if (curPage === 0) return;
  curPage--;
  pagination();
}

// 下滾動
function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
}

// 滾動至上/下區塊
function pagination() {
  scrollLock = true;
  $body.stop().animate({
    scrollTop: $section.eq(curPage).offset().top
  }, 100, 'swing', function () {
    scrollLock = false;
  });
}

// 初始化滾動事件
scrollPage();


$(function () {
  $(".menuBtn").on('click',function () {
    $(".leftbar").toggleClass("active");
    $(".menuBtn").toggleClass("active");
  });
});

//tab切換
$(function () {
  $('.tabBtn').on('click',function () {
    var target = $(this).data('target');
    $(target).show().siblings('.tabTextBox').hide();
    $(this).addClass('active').siblings('.tabBtn').removeClass('active');
  });
});



// 進入page時判斷位置
// let scrollPos = $(document).scrollTop();
if(scrollPos > 946){
  $('.leftbarBtn').removeClass('active');
  $('.sideBarSectionB').addClass('active');
  $(".tabBtn").removeClass('active');
  $(".dartsRule,.dartsNotice,.dartsRecode").addClass('active');
  $("#dartsRule,#dartsNotice,#dartsRecode").show();
  $("#balloomRule,#balloomNotice,#balloomRecode,#shopNotice").hide();
}else{
  $(".tabBtn").removeClass('active');
  $(".balloomRule,.balloomNotice,.balloomRecode").addClass('active');
  $("#balloomRule,#balloomNotice,#balloomRecode").show();
  $("#dartsRule,#dartsNotice,#dartsRecode,#shopNotice").hide();
}

//左側按鈕樣式切換&判斷跳窗tab位置
$(function () {
  $('.leftbarBtn').on('click',function () {
    var target = $(this).attr('data-section');
    if (target == 'section1') {
      $('.sideBarSectionB').removeClass('active');
      $('.sideBarSectionA').addClass('active');
      $(".tabBtn").removeClass('active');
      $(".balloomRule,.balloomNotice,.balloomRecode").addClass('active');
      $("#balloomRule,#balloomNotice,#balloomRecode").show();
      $("#dartsRule,#dartsNotice,#dartsRecode,shopNotice").hide();
    } else if(target == 'section2'){
      $('.sideBarSectionA').removeClass('active');
      $('.sideBarSectionB').addClass('active');
      $(".tabBtn").removeClass('active');
      $(".dartsRule,.dartsNotice,.dartsRecode").addClass('active');
      $("#dartsRule,#dartsNotice,#dartsRecode").show();
      $("#balloomRule,#balloomNotice,#balloomRecode,shopNotice").hide();
    }
  });
});

// 當畫面移動時,讀取距離DOM(body的top位置),再做active更新
$(window).on('scroll',function(){
  let scrollPos = $(document).scrollTop();
  if(scrollPos > 946){
    $('.sideBarSectionA').removeClass('active');
    $('.sideBarSectionB').addClass('active');
    $(".tabBtn").removeClass('active');
    $(".dartsRule,.dartsNotice,.dartsRecode").addClass('active');
    $("#dartsRule,#dartsNotice,#dartsRecode").show();
    $("#balloomRule,#balloomNotice,#balloomRecode,#shopNotice").hide();
  }else{
    $('.sideBarSectionB').removeClass('active');
    $('.sideBarSectionA').addClass('active');
    $(".tabBtn").removeClass('active');
    $(".balloomRule,.balloomNotice,.balloomRecode").addClass('active');
    $("#balloomRule,#balloomNotice,#balloomRecode").show();
    $("#dartsRule,#dartsNotice,#dartsRecode,#shopNotice").hide();
  }
})

//跳窗
$(function () {
  $('.leftbarBtn').on('click',function () {
    var target = $(this).data('target');
    if (target == "none") {
    } else {
      $(".pop").css({
        transform: 'translate(-50%, -50%) rotate(0deg)',
        opacity: 1
      });
      $(".mask").fadeIn();
      scrollLock = true;
      $(".mask").on('click',function () {
        popClose()
      })
      if (target == "#event" || target == "#notice") {
        let scrollPos = $(document).scrollTop();
        if(scrollPos > 946){
          $(".tabBtn").removeClass('active');
          $(".dartsRule,.dartsNotice").addClass('active');
          $("#dartsRule,#dartsNotice").show();
          $("#balloomRule,#balloomNotice,#shopNotice").hide();
        }else{
          $(".tabBtn").removeClass('active');
          $(".balloomRule,.balloomNotice").addClass('active');
          $("#balloomRule,#balloomNotice").show();
          $("#dartsRule,#dartsNotice,#shopNotice").hide();
        }
        $(target).show();
      } else if(target == "#shop") {
        shop()
      }else if(target == "#recode") {
        let scrollPos = $(document).scrollTop();
        if(scrollPos > 946){
          $(".tabBtn").removeClass('active');
          $(".dartsRecode").addClass('active');
          $("#dartsRecode").show();
          $("#balloomRecode").hide();
        }else{
          $(".tabBtn").removeClass('active');
          $(".balloomRecode").addClass('active');
          $("#balloomRecode").show();
          $("#dartsRecode").hide();
        }
        recode()
      }
    }
  });
});

//關閉跳窗
function popClose() {
  $(".pop").css({
    transition: 'transform 0.7s ease, opacity 0.7s ease',
    transform: 'rotate(90deg)',
    opacity: 0
  });
  $(".pop,.mask").fadeOut();
  scrollLock = false;
}
//關閉小跳窗
function popSClose() {
  $(".popS,.maskS").fadeOut();
}

//重整頁面
function reload() {
  location.reload();
}

//關閉小彈窗&重讀資料
function popSCloseGet() {
  $(".popS,.maskS").fadeOut();
  get_setting();
  shop();
}

let c = 0;
let footerlock = false;
$('.footerBtnbox').on('click',function(){
  if (!footerlock) {
    footerlock = true;
    //上
    if(c == 0){
        c += 1;
        $('footer').animate({
            bottom:'0px'
        },500);
        $('.footerBtnbox').css({
            "background-color":"rgb(36, 89, 185)"
        });
        $('.footerBtn p').delay(150).fadeOut(500);
        $('.footerBtnball').animate({
            marginLeft:'29px',
            rotate:'90deg'
        },500);
    }
    //下
    else{
        c -= 1;
        $('footer').animate({
            bottom:'-500px'
        },800);
        $('.footerBtnbox').css({
            "background-color":"rgba(0, 0, 0, 0.5)"
        });
        $('.footerBtn p').fadeIn(500);
        $('.footerBtnball').animate({
            marginLeft:'3px',
            rotate:'0deg'
        },500);
    }
    setTimeout(function () {
      footerlock = false;
    }, 600);
  }
});
