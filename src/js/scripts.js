(function ($) {
  "use strict";

  $(window).on('load', function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
    initOwlCarousel();

    $(window).trigger("resize");
    initScrollReveal();
  });

  $(window).resize(function () {
    stickyNavRemove();

    if(minWidth(992)) {
      $('.local-scroll.mobile-offset-0').localScroll({offset: {top: -60}, duration: 1500, easing: 'easeInOutExpo'});
      $('.local-scroll.desktop-offset-0').localScroll({offset: {top: 0}, duration: 1500, easing: 'easeInOutExpo'});
    } else {
      $('.local-scroll.desktop-offset-0').localScroll({offset: {top: -60}, duration: 1500, easing: 'easeInOutExpo'});
      $('.local-scroll.mobile-offset-0').localScroll({offset: {top: 0}, duration: 1500, easing: 'easeInOutExpo'});
    }
  });


  /* Detect Browser Size
  -------------------------------------------------------*/
  var minWidth;

  if(Modernizr.mq('(min-width: 0px)')) {
    // Browsers that support media queries
    minWidth = function (width) {
      return Modernizr.mq('(min-width: ' + width + 'px)');
    };
  } else {
    // Fallback for browsers that does not support media queries
    minWidth = function (width) {
      return $(window).width() >= width;
    };
  }

  /* Mobile Detect
  -------------------------------------------------------*/
  if(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    $("html").addClass("mobile");
  } else {
    $("html").removeClass("mobile");
  }

  /* IE Detect
  -------------------------------------------------------*/
  if(Function('/*@cc_on return document.documentMode===10@*/')()) {$("html").addClass("ie");}

  /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function () {
    scrollToTop();
    var $stickyNav = $('#sticky-nav');

    if($(window).scrollTop() > 75 & minWidth(992)) {
      $stickyNav.addClass('scrolling sticky');
    } else {
      $stickyNav.removeClass('scrolling sticky');
    }
  });

  function stickyNavRemove() {
    if(!minWidth(992)) {
      $('#sticky-nav').removeClass('sticky offset scrolling');
    }
  }

  /* Onepage Nav
  -------------------------------------------------------*/
  $('#onepage-nav').on('click', 'li > a', function () {
    $("#navbar-collapse").collapse('hide');
  });

  // Smooth Scroll Navigation
  $('.local-scroll').localScroll({offset: {top: -60}, duration: 1500, easing: 'easeInOutExpo'});
  $('.local-scroll-no-offset').localScroll({offset: {top: 0}, duration: 1500, easing: 'easeInOutExpo'});


  /* Mobile Navigation
  -------------------------------------------------------*/
  $('.nav__dropdown-trigger').on('click', function () {
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else {
      $(this).addClass("active");
    }
  });

  if($('html').hasClass('mobile')) {
    $('body').on('click', function () {
      $('.nav__dropdown-menu').addClass('hide-dropdown');
    });

    $('.nav__dropdown').on('click', '> a', function (e) {
      e.preventDefault();
    });

    $('.nav__dropdown').on('click', function (e) {
      e.stopPropagation();
      $('.nav__dropdown-menu').removeClass('hide-dropdown');
    });
  }

  /* Owl Carousel
  -------------------------------------------------------*/
  function initOwlCarousel() {
    (function ($) {
      "use strict";

      /* Testimonials
      -------------------------------------------------------*/
      $("#owl-testimonials").owlCarousel({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],
          [450, 1],
          [500, 2],
          [1200, 3]
        ]
      })


      /* Apps Slider
      -------------------------------------------------------*/
      $("#owl-apps-slider").owlCarousel({
        autoPlay: 3000,
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],
          [450, 1],
          [500, 2],
          [1200, 3]
        ]
      })

    })(jQuery);
  };

  /* Lightbox popup
  -------------------------------------------------------*/
  $('.lightbox-img, .lightbox-video').magnificPopup({
    callbacks: {
      elementParse: function (item) {
        if(item.el.context.className == 'lightbox-video') {
          item.type = 'iframe';
        } else {
          item.type = 'image';
        }
      }
    },
    type: 'image',
    closeBtnInside: false,
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: 'title',
      verticalFit: true
    }
  });

  // Single video lightbox
  $('.single-video-lightbox').magnificPopup({
    type: 'iframe',
    closeBtnInside: false,
    tLoading: 'Loading image #%curr%...'
  });

  /* Scroll reveal
  -------------------------------------------------------*/
  function initScrollReveal() {
    window.sr = ScrollReveal();

    sr.reveal('.animate', {
      reset: false,
      duration: 1000,
      distance: '40px',
      easing: 'ease-out',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'bottom',
      viewOffset: {top: 200, right: 0, bottom: 0, left: 0}
    });

    sr.reveal('.animate-right', {
      reset: false,
      duration: 1000,
      distance: '40px',
      easing: 'ease-out',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'right',
      viewOffset: {top: 200, right: 0, bottom: 0, left: 0}
    });

    sr.reveal('.animate-left', {
      reset: false,
      duration: 1000,
      distance: '40px',
      easing: 'ease-out',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'left',
      viewOffset: {top: 200, right: 0, bottom: 0, left: 0}
    });

    // interval and custom config passed to reveal
    sr.reveal('.animate-delay', {
      reset: false,
      distance: '40px',
      easing: 'ease-out',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'bottom',
      viewOffset: {top: 200, right: 0, bottom: 0, left: 0},
      duration: 1000
    }, 200);
  }


  /* Scroll to Top
  -------------------------------------------------------*/
  function scrollToTop() {
    var scroll = $(window).scrollTop();
    var $backToTop = $("#back-to-top");
    if(scroll >= 50) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }
  }

  $('a[href="#top"]').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
    return false;
  });
})(jQuery);
