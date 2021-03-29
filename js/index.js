//index_n.js

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

  if (scTop > 300 && startN === 0) {
    startN = 1; //한번만 실행!
    $("header")
      .css("transition", "all .6s ease-out")
      .animate({ top: 0 }, 800, "easeOutQuint")
      .addClass("newTM");
  } else if (scTop <= 300 && startN === 1) {
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

  $(".menu_btn")
    .stop()
    .click(function (e) {
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
  $("h1.logo").click(function (e) {
    e.preventDefault();
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
      2000,
      "easeOutQuad"
    );
  });
}

/*//////////////////////////////////////////////////////
    함수명 : progressBar
    기능 : 메인 진행바!
/////////////////////////////////////////////////////*/
function progressBar() {
  $(".progress").find("span").removeAttr("style");
  $(".progress").find("span").removeClass("active");
  setTimeout(function () {
    $(".progress")
      .find("span")
      .css("transition-duration", "3s")
      .addClass("active");
  }, 100);
}

/*//////////////////////////////////////////////////////
    함수명 : mainAuto
    기능 : 메인 자동실행 이벤트
/////////////////////////////////////////////////////*/
function mainAuto() {
  /* 페이드인아웃 이미지 */
  $(".main_slide img:gt(0)").hide(); //인덱스 0보다 큰 요소 숨기기
  let pageTotal = $(".main_slide img").length;
  $("b.total").text(pageTotal);

  page = 1;
  let mainAuto = setInterval(function () {
    progressBar();
    page++;
    if (page > 4) {
      page = 1;
    }
    $("b.count").text(page);
    console.log(
      pageTotal + "개의 메인 이미지중 " + page + "번째가 보여지고 있습니다."
    );

    let slide = $(".main_slide img:first-child")
      .fadeIn()
      .fadeOut()
      .next("img")
      .fadeIn()
      .end()
      .appendTo(".main_slide");
  }, 3000);
}

/*//////////////////////////////////////////////////////
    함수명 : eventAction
    기능 :  맨 앞의 이벤트 박스를 맨 뒤로 또는 맨 뒤의 이벤트 
    박스를 맨 앞으로 이동 후 class를 다시 순서대로 주어서 
    트랜지션 효과를 이용, 슬라이드가 이동되게 한다.
/////////////////////////////////////////////////////*/
function eventAction(direction) {
  //direction 방향(0-왼쪽, 1-오른쪽)
  if (prot === 1) {
    return false;
  }
  prot = 1; //금지상태 변경!

  let eWrap = document.querySelector(".event_wrap");
  let eBox = eWrap.querySelectorAll("li");
  console.log("이벤트 갯수: " + eBox.length);

  if (direction === 0) {
    eWrap.insertBefore(eBox.item(eBox.length - 1), eBox.item(0));
  } else if (direction === 1) {
    //맨 앞의 이벤트 박스를 맨 뒤로 이동
    eWrap.appendChild(eBox.item(0));
  }
  // 변경된 순서의 이벤트 박스를 다시 읽어오기
  eBox = eWrap.querySelectorAll("li");

  for (let i = 0; i < eBox.length; i++) {
    eBox[i].setAttribute("class", "event" + (i + 1));
    //setAttribute('속성이름','속성값');
  }
  //광클금지 허용상태로 변경
  setTimeout(function () {
    prot = 0;
  }, 500);
}

/*//////////////////////////////////////////////////////
    함수명 : docentAuto
    기능 : 도슨트 박스 자동실행 이벤트
/////////////////////////////////////////////////////*/
box = 0;
function docentAuto() {
  box++;
  $(".btn li:first").css({
    transform: "scale(1)",
  });
  let boxNum = $("#slide li").length;
  if (box == 4) {
    box = 0;
    $("#btn0").css("transform", "scale(1)");
  }
  $(".btn li").css({
    transform: "scale(1)",
  });

  $("#btn" + box).css({
    transform: "scale(1.5)",
  });

  $("#slide").animate({
    left: 500 * -box,
  });
}
function docentbtn() {
  cbtn = $(this).attr("id");
  //   console.log(cAbtn);
  //substr(a, 문자개수) : 문자열 a인덱스부터 지정한 문자개수만큼 문자열 반환
  cbtn = Number(cbtn.substr(3, 1));
  //   console.log(cbtn);
  $(".btn li").css({
    transform: "scale(1)",
  });
  $(this).css({
    transform: "scale(1.5)",
  });
  $("#slide").animate({
    left: 500 * -cbtn,
  });
}

/* jQuery 구역 */

$(window).scroll(function () {
  headerStyle();
}); //스크롤 이벤트

$(document).ready(function () {
  /* 헤더 */
  btnAction();
  navMenu();

  /* 메인 */
  mainAuto();

  /*모달(유튜브, 공지) - 플러그인*/
  $(".youtube").colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390,
  });
  $(".modal").colorbox({
    inline: true,
    width: "50%",
  });

  /* 프로그램 / 이벤트 */
  $(".prev").click(function (e) {
    e.preventDefault();
    eventAction(0); //왼쪽 버튼 클릭
  });
  $(".next").click(function (e) {
    e.preventDefault();
    eventAction(1); //오른쪽 버튼 클릭
  });

  /* 뉴스레터 */
  slideStop = setInterval(function () {
    docentAuto();
  }, 3000);
  $("#slide, .btn li")
    .mouseover(function () {
      clearInterval(slideStop);
    })
    .mouseout(function () {
      slideStop = setInterval(function () {
        docentAuto();
      }, 3000);
    });
  $(".btn li").click(docentbtn);
}); //jQuery
