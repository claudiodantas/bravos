
// Faz o efeito de solidificar o nav-bar transparent
$(function () {
	$(window).on('scroll', function () {
		if ( $(window).scrollTop() > 10 ) {
			$('.navbar').addClass('active');
		} else {
			$('.navbar').removeClass('active');
		}
	});
});


// $('.dropdown-toggle').dropdown()