$(function() {
	$('.hamburger').click(function(event) {
		$(this).toggleClass('is-active');

		$('.mobile-menu').slideToggle(500);
	});
	$('.hamburger').on('click', function(event) {
		event.preventDefault();
	});

	$('.lastnews-slider').slick({
		dots: false,
		infinite: false,
		speed: 200,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="lastnews-prev"><img src="img/lastnews/prev-arrow.png" alt="prevarrow" /></button>',
		nextArrow: '<button type="button" class="lastnews-next"><img src="img/lastnews/next-arrow.png" alt="nextarrow" /></button>',
		responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
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

});
