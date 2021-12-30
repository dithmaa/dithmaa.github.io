const 
    hamburgerButton = document.querySelector('.hamburger'),
    topNav = document.querySelector('.top-nav'),
    menuMobile = document.querySelector('.menu-mobile');

hamburgerButton.addEventListener('click', ()=>{
    hamburgerButton.classList.toggle('is-active');
    menuMobile.classList.toggle('active');
	topNav.classList.toggle('active');
})

$('.popup-close').on('click',function(e){
    $('.popup-info').removeClass('is-active');
    $('.overflow').removeClass('is-active');
  });

  for(let i = 1; i <= 10; i++){

    $(" #product"+i+" ").on('click',function(){
      $("#popup"+i+" .popup").addClass('is-active');
      $('.overflow').addClass('is-active');
    });

  }

$(".menu, .menu-mobile, .main-bottom").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();
	//забираем идентификатор бока с атрибута href
	let id = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	
	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({scrollTop: top}, 1000);
});