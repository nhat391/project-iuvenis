$(document).ready(function () {
	$('.visual-img .thumb img').click(function () {
		var s = $(this).attr('big-photo');
		$('.visual-img #big-photo').attr('src', s);

		$('.visual-img .thumb img').removeClass('active'); // Remove class 'active' ra khỏi TẤT CẢ các thumb
		$(this).addClass('active'); // Add class 'active' vào thumb vừa click
	});
});

$(document).ready(function(){
	$('.related-product-list-item').slick({
		slidesToShow: 4,
		slidesToScroll: 4
	});
  });







