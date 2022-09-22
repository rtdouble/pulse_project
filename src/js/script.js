$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
                dotsClass: 'slick-dots'
              }
            }
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal 

    $('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn();
    });

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		});
	});

	function validateForm(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}			
			},
			messages: {
				name: "Пожалуйста, напишите свое имя",
				phone: "Пожалуйста, напишите свой номер телефона",
				email: {
				  required: "Пожалуйста, напишите свой имейл",
				  email: "Ваш имейл адрес должен быть формата name@domain.com"
				}
			  }
		});
	}

	validateForm('#main-form');
	validateForm('#order form');
	validateForm('#consultation form');

	$('input[name=phone]').mask("(999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		};

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();
			
			$('form').trigger('reset');
		});
		return false;
	});
});