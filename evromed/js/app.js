// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	
	$(window).on('load resize', function() {
		
		if ($(window).width() <= 1200) {
		  $('.recording-slider:not(.slick-initialized)').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="recording-arrow recording-prev"><img src="../images/recording/arrow-left.png" alt="arrow-prev"></button>',
			nextArrow: '<button type="button" class="recording-arrow recording-next"><img src="../images/recording/arrow-right.png" alt="arrow-next"></button>',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		  });
		} else {
		  $(".recording-slider.slick-initialized").slick("unslick");
		}
	  });
	
})
