//------(Плавные якоря)--------------------------------
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			
			const blockID = anchor.getAttribute('href').substr(1);

			if (blockID !== '') {
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}

		})
	}
	// ---------------


//--(Slider)-----------------------------------
$(function(){
	document.querySelector('.js-header__burger').onclick = function () {
		const html = document.querySelector('html');
		const body = document.querySelector('body');
		const burger = document.querySelector('.js-header__burger');
		const nav = document.querySelector('.js-header__nav');
		html.classList.toggle('lock');
		body.classList.toggle('lock');
		burger.classList.toggle('active');
		nav.classList.toggle('active');
	};
	
	$('.slider-thumb').slick({
		autoplay: false,
		vertical: true,
		infinite: true,
		verticalSwiping: true,
		// slidesPerRow: 3,
		slidesToScroll: 4,
		slidesToShow: 4,
		asNavFor: '.slider-preview',
		arrows: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
				}
			},
			// {
			// 	breakpoint: 479,
			// 	settings: {
			// 		vertical: false,
			// 		slidesPerRow: 3,
			// 		slidesToShow: 3,
			// 	}
			// },
		]
	});
	$('.slider-preview').slick({
		autoplay: false,
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		appendArrows: $('.arrows'),
		prevArrow: '<div class="set__up"><img src="img/svg/up.svg" alt="" ></div>',
		nextArrow: '<div class="set__down"><img src="img/svg/down.svg" alt=""></div>',
		arrows: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
					fade: true,
					prevArrow: '<div class="set__up"><img src="img/set/arrow__left.svg" alt="" ></div>',
					nextArrow: '<div class="set__down"><img src="img/set/arrow__right.svg" alt=""></div>',
				}
			},
		]
	});
});
//--------------------------------------------------

//---(всплывающие подсказки)----------------------
$(function () {
	$('[data-toggle="tooltip"]').tooltip({
		placement: 'bottom',
		html: true,
		title: 'Для получения оптовых цен, добавьте в корзину товаров ещё на <strong>10 000 руб</strong> (по оптовым ценам)'
	})
})

  //----------------------------------------
  //---(вкладки и навигация)----------------------

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
	var tabTrigger = new bootstrap.Tab(triggerEl)

	triggerEl.addEventListener('click', function (event) {
		event.preventDefault()
		tabTrigger.show()
	})
})

  //----------------------------------------

  //-----(sleder analogs)----------------------------

  $(document).ready(function(){
	$('.carousel').slick({
	slidesToShow: 4,
	dots:true,
	centerMode: true,
		prevArrow: '<div class="set__up-1"><img src="img/set/arrow__left.svg" alt="" ></div>',
	nextArrow: '<div class="set__down-1"><img src="img/set/arrow__right.svg" alt=""></div>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				centerMode: true, 
				slidesToShow: 2,
				cssEase: 'linear'
			}
		},
		{
			breakpoint: 992,
			settings: {
				centerMode: true, 
				slidesToShow: 1,
				cssEase: 'linear'
			}
		},
	]	
	});
  });
  
//---------------------------------------------
//-------(Валидация e-mail)------------------------------
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

document.getElementById('bottom__button-text').onclick = function(e) {
	e.preventDefault();
	const email = document.getElementById("bottom__mail-2");

	if (validateEmail(email.value)) {
		email.classList.remove('error');
		email.classList.add('ok');
	} else {
		email.classList.remove('ok');
		email.classList.add('error');
	}
	
	return false;
}
// ------------------

//-----(модальное окно)------------------------------------
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
//-----------------------------------------------------------

	// Кнопка наверх
	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goTopBtn.classList.add('back-to-top__show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('back-to-top__show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}

	var goTopBtn = document.querySelector('.back-to-top');

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);

	// ---------------