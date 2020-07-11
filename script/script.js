$(document).ready(function () {
	$('.sample .thumb img').click(function () {
		var s = $(this).attr('big-photo');
		$('.sample #big-photo').attr('src', s);

		$('.sample .thumb img').removeClass('active'); 
		$(this).addClass('active'); // Add class 'active' vào thumb vừa click
	});
});


$('.slider2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });