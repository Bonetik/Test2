"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); //yak scroll

  $(document).ready(function () {
    $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
    $(document).ready(function () {
      $('.header__menu-burger').click(function () {
        $('.header__menu-burger').toggleClass('menu__open');
        $('.header__menu').toggleClass('menu__open');
        $('.header__submenu-mobile').toggleClass('menu__open');
        $('.menu__img').toggleClass('menu__img-remove');
      });
    });
  });
  var bg = document.querySelectorAll('.content__paralacs');

  var _loop = function _loop(i) {
    window.addEventListener('mousemove', function (e) {
      var x = e.clientX / window.innerWidth;
      var y = e.clientY / window.innerHeight;
      bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
  };

  for (var i = 0; i < bg.length; i++) {
    _loop(i);
  }
});