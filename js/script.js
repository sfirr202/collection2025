// svgmove
new Vivus( 'move',{
	duration: 100,
	forceRender: false,
});

// range before after 切り替え
$(function () {
	$(".image .range").each(function () {
		$(this).parent(".image").css("--pos",$(this).val() + "%");
	});
	$(".image .range").on("input", function () {
		$(this).parent(".image").css("--pos",$(this).val() + "%");
	});
});

// swiper
const mySwiper = new Swiper('.swiper', {
	slidesPerView:3.5,
	spaceBetween: 10,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
		767: {
			slidesPerView:6,
			spaceBetween:10,
		}
	}
});

// fv テキスト順番
$("h2 span").each(function (i) {
	setTimeout(function () {
		$("h2 span").eq(i).addClass("active");
	},65*i);
});

// fadein呼び出し
new WOW().init();


// active fadein順番
$(window).scroll(function () { 
	var scroll = $(window).scrollTop();
	var pos = $(".about").offset().top;
	if (scroll > pos - $(window).height()*0.5) {
		$(".about").addClass("active");
	}
});

// スクロールアニメーション
$(function(){
	$('a[href^="#"]').click(function(){
		var adjust = 0;
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top + adjust;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});