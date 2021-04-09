    $(document).ready(function () {

    	$(".loading").delay(1000).fadeOut();
    	//loading 


    	$(".gnb li a").click(function () {
    		var scrollPosition = $($(this).attr("href")).offset().top;
    		$('html, body').animate({
    			scrollTop: scrollPosition
    		}, 700);
    	}); //gnb scroll animate



    	$(document).scroll(function () {
    		var changeColor = $(document).scrollTop();
    		var scroll = $(document).scrollTop();
			//console.log('스크롤값'+scroll);
    		if (scroll > 680) {
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

    		if (changeColor > 650) {
    			$(".about .title").addClass('colorChange');
    		}
    		if (changeColor > 1700) {
    			$(".mywork1 .title").addClass('colorChange');
    		}
    		if (changeColor > 2800) {
    			$(".mywork2 .title").addClass('colorChange');
    		}
    		if (changeColor >= 3000) {
    			$(".contact .title").addClass('colorChange');
    		} //타이틀 컬러변경
    	});
		
    	$(".top_btn").click(function (e) {
			e.preventDefault();
    		$('html, body').stop().animate({
    			scrollTop: 0
    		}, 700);
    	}); // pagetop scroll animate
		
		$('.scroll').click(function(e){
			e.preventDefault();
				$('html, body').stop().animate({
    			scrollTop:  "+800px"
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
    			var scrollPosition2 = $($(this).attr("href")).offset().top;
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
    		$(".dimmed").fadeIn(300);
    	});

    	$(".send_close").click(function () {
    		$(".send").removeClass("send_move");
    		$(".dimmed").fadeOut(300);
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


    	$("form").on("submit", function (event) {
    		event.preventDefault();
    		// submit 리부트 막기
    	});


    });
