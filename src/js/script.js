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
  });