$(window).scroll(function () {
	var ram = window.pageYOffset || document.documentElement.scrollTop;
	if (ram > 65) {
		if (document.documentElement.clientWidth < 767.98) {
			$('.header').addClass("header_fixed");
		}
		else {
			$('.header-bottom').addClass("header-bottom_fixed");
		}
	};
	if (ram < 65) {
		if (document.documentElement.clientWidth < 767.98) {
			$('.header').removeClass("header_fixed");
		}
		else {
			$('.header-bottom').removeClass("header-bottom_fixed");
		}
	};
});

$('.sale-slider').slick({
	infinite: true,
	centerMode: true,
	variableWidth: true,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991.98,
			settings: {
				variableWidth: false,
				centerMode: false
			}
		}]
});

$('.add-goods__slider').slick({
	infinite: true,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575.98,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(document).ready(function () {
	$('.header-top__burger').click(function (e) {
		$('.header-top__burger').toggleClass('header-top__burger_active');
		$('.header-bottom__menu').toggle("medium");
		$('body').toggleClass('lock');
	});
});

$('.price').click(function (e) {
	e.preventDefault();
	$('.price').toggleClass('price_active');
	$('.cart').fadeToggle();
});

$('.checkout-variant').change(function (e) {
	e.preventDefault();
	$('.checkout__variant').hide();
	if (this.checked) {
		console.log()
		switch ($(this).attr('id')) {
			case 'courier-radio':
				$('.checkout__variant_courier').css("display", "flex");
				break
			case 'bank-radio':
				$('.checkout__variant_bank').css("display", "flex");
				break
			case 'card-radio':
				$('.checkout__variant_card').css("display", "flex");
				break
		}
	}
});