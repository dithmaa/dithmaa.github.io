$(function() {

	$('.hamburger').click(function(event) {
		$(this).toggleClass('active');
		$('.top-menu__mobile').toggleClass('active');
	});
	$('.slider-for').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  variableWidth: true,	
	  infinite: true,
	  arrows: true,
	  asNavFor: '.slider-nav',
	  centerMode: true,
	  focusOnSelect: true,
	  draggable: false,
	  prevArrow: "<button type='button' class='portfolio-prev portfolio-arrow'>←</button>",
	  nextArrow: "<button type='button' class='portfolio-next portfolio-arrow'>→</button>",
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	      	draggable: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 842,
	      settings: {
	      	draggable: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }	    
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.slider-nav').slick({
	  slidesToShow: 8,
	  slidesToScroll: 1,
	  infinite: true,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  variableWidth: true
	});
	$(".slider-for").on('afterChange', function(event, slick, currentSlide){
	   $("#cp").text(currentSlide + 1);
	});
	$('.faq-item').on('click', function(event) {
		event.preventDefault();
		$('.faq-item').removeClass('active');
		$(this).toggleClass('active');
	});



	//team slider 
	$('.team-slider').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1650,
		  settings: {
		    slidesToShow: 4,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: false
		  }
		},
		{
		  breakpoint: 1196,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 996,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 596,
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
