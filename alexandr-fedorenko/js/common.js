$(function() {

	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
	$(window).scroll(function () {
		if ( $(this).scrollTop() > $(this).height() ){
			$('.top').addClass('top-active');
		}	else{
			$('.top').removeClass('top-active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
	});
	$('.hamburger').on('click', function() {
		$('.menu-mobile').slideToggle(0, function(){
        	$('.hamburger').addClass('is-active').
        	addClass('hamburger-fixed');
			$('.main-wrap').hide();
			if( $(this).css('display') === "none"){
               $('.hamburger').removeClass('is-active').
               removeClass('hamburger-fixed');
				$('.main-wrap').show();
            }
		});
	});
	$('#popup').click(function() {
		$('.menu-mobile').hide();
		$('.hamburger').removeClass('is-active')
		.removeClass('hamburger-fixed');
		$('.main-wrap').show();
	});
	$(window).on('resize', function(){
	    var win = $(this); //this = window
	    if (win.width() > 992) {
	        $('.menu-mobile').hide(200);
			$('.hamburger').removeClass('is-active');
	        $('.main-wrap').show();
	    }
	});
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
		} catch(err) {

	};
	$('a[href^="#"]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
	   scrollTop: $(anchor.attr("href")).offset().top
	  }, 1000);
	  e.preventDefault();
	 });
	 return false;﻿
});