(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // create transparent bgr .hamburgerBgr
    $('body').prepend('<div class="hamburgerBgr"></div>');

    // create hamburger menu .navToggle
    $('.nav-main').prepend('<button class="navToggle"><span></span></button>');

    // toggle
    $('.nav-main > ul').hide();
    $('body').on('click', '.navToggle', function(event) {
      event.preventDefault();

      if ($('.nav-main').hasClass('active')) {
        $('.nav-main')
          .removeClass('active')
          .children('ul')
          .hide('fast');

        $('.hamburgerBgr').removeClass('active');
      }
      else {
        $('.nav-main')
          .addClass('active')
          .children('ul')
          .show('fast');

        $('.hamburgerBgr').addClass('active');
      }
    }).on('click', '.hamburgerBgr', function(event) {
      if ($('.nav-main').hasClass('active')) {
        $(this).removeClass('active');

      $('.nav-main')
        .removeClass('active')
        .children('ul')
        .hide('fast');
      }
    });
  });

})(jQuery, window, document);
