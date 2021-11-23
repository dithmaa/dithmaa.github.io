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

  
  
  $('.popup-close').on('click',function(){
    $('.popup-info').removeClass('is-active');
    $('.overflow').removeClass('is-active');
  });

  for(let i = 1; i <= 10; i++){

    $(" #product"+i+" ").on('click',function(){
      $("#popup"+i+" .popup").addClass('is-active');
      $('.overflow').addClass('is-active');
    });

  }

  $(".menu, .mobile-menu, .main").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    let id = $(this).attr('href'),
  
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
  });
  
  





});