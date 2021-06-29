$(function(){
    $('.testimonials-slider').slick({
        dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="testimonials-prev"><img src="img/testimonials/arrow-left.svg" alt="arrow"/></button>',
  nextArrow: '<button type="button" class="testimonials-next"><img src="img/testimonials/arrow-left.svg" alt="arrow"/></button>',
  responsive: [
    {
      breakpoint: 992,
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
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    $('.top-nav__hamburger').on('click', function(){
      $('.mobile-menu').toggleClass('is-active');
    });
    $('.mobile-menu li').on('click', function(){
      $('.mobile-menu').removeClass('is-active');
    });
    $('#popup-more').on('click',function(){
      $('.popup-wrap').addClass('info-active');
      $('.popup-info').addClass('is-active');
    });
    $('#info-close').on('click',function(){
      $('.popup-wrap').removeClass('info-active');
      $('.popup-info').removeClass('is-active');
    });
    $('.software-picture').on('click',function(){
      $('.popup-offer').addClass('is-active');
      $('.overflow').addClass('is-active');
    });

    $('#offer-close').on('click',function(){
      $('.popup-offer').removeClass('is-active');
      $('.overflow').removeClass('is-active');
    });
});