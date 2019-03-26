$(function() {
	$('.hamburger').on('click', function() {
		event.preventDefault();
		$(this).toggleClass('is-active');
		$('.top-mobile-menu').toggleClass('active');
	});
});