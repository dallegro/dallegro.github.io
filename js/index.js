 $(window).load(function () {
 	$(".loading").fadeOut(1000,function(){
	 $("section").fadeIn("slow");
	});

 });

 /*//////////////////////////////////////////////////////
 				함수명 : check();
 				기능 : 유효성 체크
 ///////////////////////////////////////////////////////*/
 function check() {
 	var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
 	var getName = RegExp(/^[가-힣]+$/);
 	var getPhone = RegExp(/(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g);
 	var Email = $('input[name=email]').val();
 	var Name = $('input[name=name]').val();
 	var Company = $('input[name=company]').val();
 	var Message = $('textarea[name=message]').val();
 	//이메일 유효성 검사 
 	if (!getMail.test(Email)) {
 		alert("이메일형식에 맞게 입력해주세요");
 		$(Email).val("");
 		$(Email).focus();
 		return false;
 	}
 	//이름 유효성 검사 
 	if (!getName.test(Name)) {
 		alert("이름형식에 맞게 입력해주세요");
 		$(Name).val("");
 		$(Name).focus();
 		return false;
 	}
 	//번호 유효성 검사
 	/*if (!getPhone.test($('input[name=phone]').val())) {
 		alert("번호형식에 맞게 입력해주세요");
 		$('input[name=phone]').val("");
 		$('input[name=phone]').focus();
 		return false;
 	}*/
 	//이메일 공백 확인 
 	if (Email == "") {
 		alert("이메일을 입력해주세요");
 		$(Email).focus();
 		return false;
 	}
 	//이름 공백 검사 
 	if (Name == "") {
 		alert("이름을 입력해주세요");
 		$(Name).focus();
 		return false;
 	}
 	//내용 공백 검사 
 	if (Message == "") {
 		alert("내용을 입력해주세요")
 		$(Message).val("");
 		$(Message).focus();
 		return false;
 	}
 	if (Company == "") {
 		alert("회사명을 입력해주세요")
 		$(Company).val("");
 		$(Company).focus();
 		return false;
 	}
 }


 window.onload = function () {
 	document.getElementById('contactForm')
 		.addEventListener('submit', function (e) {
 			e.preventDefault();

 			this.contact_number.value = Math.random() * 100000 | 0;

 			emailjs.sendForm("gmail", "template_bd27j7a", this)
 				.then(function (response) {
 					alert('메일이 발송되었습니다! 감사합니다.', response.status, response.text);
 				}, function (error) {
 					alert('메일 발송이 실패하였습니다! 다시 한번 확인 바랍니다.', error);
 				});
 		}); //contact message form;
 }

 $(document).ready(function () {
 	setTimeout(function () {
 		$('html, body').scrollTop(0);
 	}, 1000);

 	$(".loading").delay(1000).fadeOut();
 	//loading 
 	$(".gnb li a").click(function () {
 		let scrollPosition = $($(this).attr("href")).offset().top;
 		$('html, body').animate({
 			scrollTop: scrollPosition
 		}, 700);
 	}); //gnb scroll animate



 	$(document).scroll(function () {
 		let changeColor = $(document).scrollTop();
 		let scroll = $(document).scrollTop();
 		console.log('스크롤값' + scroll);
 		if (scroll > 850) {
 			$("#pro1").delay(500);
 			$("#pro2").delay(1000);
 			$("#pro3").delay(1500);
 			$("#pro4").delay(2000);
 			$("#pro5").delay(2500);
 			$("#pro6").delay(3000);

 			$("#pro1").animate({
 				"value": 95
 			});
 			$("#pro2").animate({
 				"value": 90
 			});
 			$("#pro3").animate({
 				"value": 87
 			});
 			$("#pro4").animate({
 				"value": 90
 			});
 			$("#pro5").animate({
 				"value": 85
 			});
 			$("#pro6").animate({
 				"value": 90
 			});
 		} //progress 

 		if (changeColor >= 450) {
 			$(".about .title").addClass('colorChange');
 		}
 		if (changeColor >= 1500) {
 			$(".mywork .title").addClass('colorChange');
 		}
 		if (changeColor >= 2600) {
 			$(".contact .title").addClass('colorChange');
 		} //타이틀 컬러변경
 	});

 	$("a.logo").click(function (e) {
 		e.preventDefault();
 		$('html, body').stop().animate({
 			scrollTop: 0
 		}, 700);
 	}); // pagetop scroll animate
 	$(".top_btn").click(function (e) {
 		e.preventDefault();
 		$('html, body').stop().animate({
 			scrollTop: 0
 		}, 700);
 	}); // pagetop scroll animate

 	$('.scroll').click(function (e) {
 		e.preventDefault();
 		$('html, body').stop().animate({
 			scrollTop: "+800px"
 		}, 700);
 	})

 	$(".mobile_gnb").click(function () {
 		$(".humbermenu").addClass("humbermenu_on");
 	});

 	$(".x_btn").click(function () {
 		$(".humbermenu").removeClass("humbermenu_on");
 	});

 	$(".menu_list li a").click(function () {
 		$(".humbermenu").removeClass("humbermenu_on");

 		$(".menu_list li a").click(function () {
 			let scrollPosition2 = $($(this).attr("href")).offset().top;
 			$('html, body').animate({
 				scrollTop: scrollPosition2
 			}, 300);
 		});
 	}); //gnb full 


 	$(".intro_more").click(function () {
 		$(".aboutme_more").addClass("on2");
 	});

 	$(".aboutme_more .x_btn").click(function () {
 		$(".aboutme_more").removeClass("on2");
 	}); //aboutme pop


 	$(".message").click(function () {
 		$(".send").addClass("send_move");
 		$("#dimmed").fadeIn();
 	});


 	$(".send_close").click(function (e) {
 		e.preventDefault;
 		$(".send").removeClass("send_move");
 		$("#dimmed").fadeOut();
 	}); //contact message form



 	$('#overview_btn').click(function () {
 		if ($(this).html() == '- CLOSE -') {
 			$(this).html('MORE +');
 			$(".overview").css("display", "none");
 		} else {
 			$(this).html('- CLOSE -');
 			$(".overview").css("display", "block");
 		}
 	});


 });
