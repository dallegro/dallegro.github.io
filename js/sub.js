//sub.js

/* 전역변수 구역 */
/* 전역변수 구역 */
let startN = 0; // 0- 실행전 , 1- 실행후
let prot = 0; //광클금지(0-허용, 1-금지)

/*  함수 구역 */

/*//////////////////////////////////////////////////////
    함수명 : headerStyle
    기능 : header 스크롤 디자인 변경 함수
/////////////////////////////////////////////////////*/
function headerStyle() {
  let scTop = $(this).scrollTop(); //세로 스크롤 위치값
  console.log("세로 스크롤 위치값 : " + scTop);

  if (scTop > 500 && startN === 0) {
    startN = 1; //한번만 실행!
    $("header")
      .css("transition", "all .6s ease-out")
      .animate({ top: 0 }, 800, "easeOutQuint")
      .addClass("newTM");
  } else if (scTop <= 500 && startN === 1) {
    startN = 0; //초기 값으로 상태변경
    $("header")
      .css("transition", "all .6s ease-out")
      .animate({ top: 0 }, 800, "easeOutQuint")
      .removeClass("newTM");
  }
}

/*//////////////////////////////////////////////////////
    함수명 : navMenu
    기능 : 아코디언 메뉴
/////////////////////////////////////////////////////*/
function navMenu() {
  $("#header").append('<div id="black"></div>');
  $("#black").hide();

  $(".menu_btn").click(function (e) {
    e.preventDefault();
    $("div.slide_menu").animate({ left: 0 }, 500); //메뉴열고
    $("#black").fadeIn();

    $("li.depth1>span").click(function () {
      $(this)
        .next()
        .slideDown(500)
        .parent()
        .siblings()
        .find("ul.depth2")
        .slideUp(500);
    }); //depth1 클릭하면 해당 자식 depth2들이 보이고 나머지는 숨기기
    $("li.depth1>span");
    $("a.close").click(function (e) {
      e.preventDefault();
      $("ul.depth2").slideUp(500);
      $(".slide_menu").animate(
        {
          left: "-23%",
        },
        500
      );
      $("#black").fadeOut();
    });
    $("#black").click(function () {
      $("ul.depth2").slideUp(500);
      $(".slide_menu").animate(
        {
          left: "-23%",
        },
        500
      );
      $("#black").fadeOut();
    });
  });
}

/*//////////////////////////////////////////////////////
    함수명 : btnAction
    기능 : 새로고침 + 아이콘,버튼 클릭 이벤트
/////////////////////////////////////////////////////*/

function btnAction() {
  /* 새로고침 */
  $("html, body").stop().animate({ scrollTop: "0px" }, 1000, "easeOutQuad");

  /*로그인*/
  $("#header a.user_btn").click(function (e) {
    e.preventDefault();
    $("div#user_box").fadeIn(200);
    $("div#user_box div.bg").click(function () {
      $("div#user_box").fadeOut(200);
    });
  });

  /* 로고 */
  $("h1.logo").click(function (/* e */) {
    /* e.preventDefault(); */
    $("html, body").stop().animate({ scrollTop: "0px" }, 800, "easeOutQuad");
  });

  /*검색창*/
  $("#header a.search_btn").click(function (e) {
    e.preventDefault();
    $("#search_box").fadeIn(200);
    $("#search_box .bg").click(function () {
      $("#search_box").fadeOut(200);
    });
  });

  /* 관람시간 */
  $(".opening_btn > table").hide();
  $("#header .opening_btn").hover(
    function () {
      $(this).children(".opening_btn > table").stop().fadeIn(300);
    },
    function () {
      $(".opening_btn > table").stop().fadeOut(300);
    }
  );
  /* 스크롤 */
  $(".scroll").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: "+800px" }, 600, "easeOutQuad");
  });
  /* 탑버튼 */
  $("a.top").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: "0px",
      },
      1000,
      "easeOutQuad"
    );
  });
}

$(function () {
  //썸네일 클릭 시 메인이미지 src 변경
  $(".thumbs a").click(function (e) {
    //1. a태그 기본 이동 없애기
    e.preventDefault();

    //2. a태그의 href값 구하기
    var imgsrc = $(this).attr("href");
    console.log("이미지 경로: " + imgsrc);

    //3. 이미지 경로값을 대상요소의 src값으로 세팅
    $("#largeImg img").attr("src", imgsrc);
    //a태그의 href값을 img태그의 src 로 넣어주기!
  }); //click
}); //jQuery

/* jQuery 구역 */

$(window).scroll(function () {
  headerStyle();
}); //스크롤 이벤트

$(document).ready(function () {
  /* 헤더 */
  btnAction();
  navMenu();

  /* 갤러리 */
}); //jQuery
