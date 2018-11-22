var vid = document.getElementById("my-video"); 

function playVid() { 
    vid.play();
    $('.play').fadeOut(200);
} 

function pauseVid() { 
    vid.pause(); 
    $('.play').fadeIn(200);
} 

$(function() {
	$(".clients-carousel").owlCarousel({
		loop: true,
	 	nav: true,
	 	dots: false, 
	 	responsive:{
	        0:{
	            items:1

	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	$(".testimonials-carousels").owlCarousel({
	 	loop: true,
	 	autoHeight: true,
	 	nav: true,
	    responsive:{
	        0:{
	            items:1

	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
	    responsive:{
	        0:{
	            items:2,
	            nav: true

	        },
	        600:{
	            items:3,
	            nav: true
	        },
	        1000:{
	            items:4
	        }
	    }
	});


});

//css burger code
jQuery(document).ready(function($) {
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
	});
	$(".menu-mobile").hide();
	$(".hamburger").on('click', function() {
		event.preventDefault();
		$(".menu-mobile").slideToggle(500);
	});
	$('.menu-mobile a, .menu-mobile li').click(function() {
		$(".menu-mobile").slideUp(500);
		$('.hamburger').removeClass('is-active');
	});
	//change code
	var $containerWidth = $(window).width();
	if ($containerWidth <= 768) {
        $('.header > .container').
        addClass('container-fluid')
        .removeClass('container');
    }
    //onresize
    $(window).on('resize', function(){
	    var win = $(this); //this = window
	    if (win.width() <= 768) {
			$('.header > .container').
		    addClass('container-fluid')
		    .removeClass('container');    	
	    }
	});
    $(window).on('resize', function(){
	    var win = $(this); //this = window
	    if (win.width() >= 767) {
			$('.header > .container-fluid').
		   	removeClass("container-fluid").
		   	addClass('container');
	        $('.menu-mobile').slideUp(200);
	    }
	});
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
		} catch(err) {

	};
});
