$(function() {

	$(".main-slider").slick({
		// autoplay: true,
		dots: true,
		adaptiveHeight: true,
		autoplaySpeed: 10000,
		arrows: true,
		nextArrow: '<button style="outline: none" type="button" class="main-arrow main-arrow-right"><i class="icon-next-arrow"></i></button>',
		prevArrow: '<button style="outline: none" type="button" class="main-arrow main-arrow-left"><i class="icon-prev-arrow"></i></button>'
	});
	$('.recent-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: true,
		  nextArrow: '<button style="outline: none" type="button" class="recent-arrow recent-arrow-right"><i class="icon-keyboard_arrow_right"></i></button>',
		  prevArrow: '<button style="outline: none" type="button" class="recent-arrow recent-arrow-left"><i class="icon-keyboard_arrow_left"></i></button>',
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	});
	$(".hamburger").click(function() {
		$(".hamburger").toggleClass('is-active').
		toggleClass('hamburger-fixed-property');
		$(".menu-mobile").toggleClass('flex-property');
		$(".main-slider, section, .logo, footer, .search").toggleClass('blur-property');
	});
	$(".menu-mobile").click(function() {
		$(".menu-mobile").removeClass('flex-property');
		$(".hamburger").removeClass('is-active').
		toggleClass('hamburger-fixed-property');
		$(".main-slider, section, .logo, .footer, .search").removeClass('blur-property');
	});
	$(window).on('resize', function(){
		var win = $(this);
		if(win.width() >= 992){
			$('.menu-mobile').removeClass("flex-property");
			$(".hamburger").removeClass('is-active');
			$(".main-slider, section, .logo, .footer, .search").removeClass('blur-property');
		}
	});
	$('.our-project-item').isotope({
		itemSelector: '.gallery-items',
		layoutMode: 'masonry',
		masonry: {
	    	columnWidth: 370,
	    	gutter: 30
	    }
	});
	$(window).on('resize', function(){
		var wind = $(this);
		if(wind.width() <= 1200){
			$('.our-project-item').isotope({
				itemSelector: '.gallery-items',
				layoutMode: 'masonry',
				masonry: {
			    	columnWidth: 370,
			    	gutter: 30
			    }
			});
		}	else{
			$('.our-project-item').isotope({
				itemSelector: '.gallery-items',
				layoutMode: 'masonry',
				masonry: {
			    	columnWidth: 370,
			    	gutter: 30
			    }
			});
		}
	});
	$('.our-project-tabs ul li').click(function(){
		$('.our-project-tabs ul li').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.our-project-item').isotope({
			filter: selector
		});
		return false;
	});
	$(window).scroll(function() {
	   if($(window).scrollTop() >= 100) {
	   		$('.header').addClass('header-fixed');
		} else {
			$('.header').removeClass('header-fixed');
	   	}   
	});﻿
	
	//Chrome Smooth Scroll
		try {
			$.browserSelector();
			if($("html").hasClass("chrome")) {
				$.smoothScroll();
			}
			} catch(err) {

		};
	$('.top-anchor').click(function() {
		$('html, body').stop().animate({scrollTop: 0},'slow','swing');
	});
	$(window).scroll(function() {
		if( $(this).scrollTop() >= $(this).height() ){
			$('.top-anchor').addClass('active');
		} else{
			$('.top-anchor').removeClass('active');
		}
	});

	$(document).ready(function(){ $('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').remove(); });
	$('a[href^="#"]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
	   scrollTop: $(anchor.attr("href")).offset().top
	  }, 1000);
	  e.preventDefault();
	 });
	 return false;﻿
});
