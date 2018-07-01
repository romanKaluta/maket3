$(document).ready(function() {
	$('.acordeon_item_btn').on('click', function() {
		$(this).parent().toggleClass('open');
		$(this).parent().siblings().removeClass('open');	
	});

	$('.slick').slick({
		prevArrow: '<img src="img/prew.png" alt="">',
		nextArrow: '<img src="img/next.png" alt="">',
 		infinite: true,
 		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.carousel')
	});
});

var sms = document.querySelector('#log');
var key = document.querySelector('.word');
function myFunction() {
	if (sms.value == 'admin') {
		alert('Now enter your password');
		key.classList.add('show');
	} else {
		alert('Who are you???');
	}
}

