/*Раскрытие футера*/

$(document).ready(function() {
  $('.footer__name').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).next().removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).next().addClass('active');
    }
  });
});

/*Табы*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.task__slider');
    tabContainers.hide().filter(':first').show();
    $('.task__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.task__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Слайдер*/

$(document).ready(function() {
  swiperPromotion = new Swiper('#promotion .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    /*freeMode: true,*/
    spaceBetween: 30,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: "#promotion .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '#promotion .swiper-button-next',
      prevEl: '#promotion .swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 15
      },
    }
  });
  swiperAutomation = new Swiper('#automation .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    /*freeMode: true,*/
    spaceBetween: 30,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: "#automation .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '#automation .swiper-button-next',
      prevEl: '#automation .swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 15
      },
    }
  });
  swiperIT = new Swiper('#it .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    /*freeMode: true,*/
    spaceBetween: 30,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: "#it .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '#it .swiper-button-next',
      prevEl: '#it .swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 15
      },
    }
  });
  swiperClients = new Swiper('#clients .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    /*freeMode: true,*/
    spaceBetween: 30,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: "#clients .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '#clients .swiper-button-next',
      prevEl: '#clients .swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 15
      },
    }
  });
});