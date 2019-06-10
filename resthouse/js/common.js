
lightbox.option({
	alwaysShowNavOnTouchDevices: true,
	wrapAround: true,
	fixedNavigation: true
});
$('#tarif-common').on('mouseenter', function(){
	$('#tarif-common').addClass('tarifUp');
	$('#tarif-comfort').addClass('tarifDown');
});
$('#tarif-common').on('mouseleave', function(){
	$('#tarif-common').removeClass('tarifUp');
	$('#tarif-comfort').removeClass('tarifDown');
});

$('#tarif-vip').on('mouseenter', function(){
	$('#tarif-vip').addClass('tarifUp');
	$('#tarif-comfort').addClass('tarifDown');
});
$('#tarif-vip').on('mouseleave', function(){
	$('#tarif-vip').removeClass('tarifUp');
	$('#tarif-comfort').removeClass('tarifDown');
});
$('#tarif-comfort').on('mouseenter', function(){
	$('#tarif-comfort').addClass('tarifUp');
});
$('#tarif-comfort').on('mouseleave', function(){
	$('#tarif-comfort').removeClass('tarifUp');
});


$(function() {

	$('a[href^="#"]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
	   scrollTop: $(anchor.attr("href")).offset().top
	  }, 1000);
	  e.preventDefault();
	 });
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
	$("#date").mask("99/99/9999");
    $("#phone").mask("+7(999) 999-99-99");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
});
