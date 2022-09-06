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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });