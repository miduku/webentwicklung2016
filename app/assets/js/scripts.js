/*!
 * webentwicklung2016
 * Einführung in die Webentwicklung 2016
 * http://webentwicklung16.dustinkummer.com/
 * @author Dustin Kummer
 * @version 1.0.0
 * Copyright 2016. MIT licensed.
 */
(function($, window, document, undefined) {

  'use strict';

  $(function() {
    // create transparent bgr .hamburgerBgr
    $('body').prepend('<div class="hamburgerBgr"></div>');

    // create hamburger menu .navToggle
    $('.nav-main').prepend('<a href="#" class="navToggle"><span></span></a><span class="nav-title"></span>');

    // clone the text from the active menü to the nav-title
    $('.nav-title').append($('.nav-main li.active').text());

    // toggle
    $('.nav-main > ul').hide();
    $('.nav-title').hide();
    $('body')
      .on('click', '.navToggle, .open-hamburger', function(event) {
        event.preventDefault();

        // if active, close nav and shot nav-title
        if ($('.nav-main').hasClass('active')) {
          $('.nav-main')
            .removeClass('active')
            .children('ul')
            .slideUp('fast')
            .siblings('.nav-title')
            // .addClass('visible')
            .show('fast');

          if ($(window).scrollTop() > $('.header').outerHeight()) {
            $('.nav-title').addClass('visible');
          }

          $('.hamburgerBgr').removeClass('active');
        }
        // if not active, open nav and close nav-title
        else {
          $('.nav-main')
            .addClass('active')
            .children('ul')
            .slideDown('fast')
            .siblings('.nav-title')
            .removeClass('visible')
            .hide('fast');

          $('.hamburgerBgr').addClass('active');
        }
      })
      // close nav if click outside
      .on('click', '.hamburgerBgr', function() {
        if ($('.nav-main').hasClass('active')) {
          $(this).removeClass('active');

          $('.nav-main')
            .removeClass('active')
            .children('ul')
            .slideUp('fast')
            .siblings('.nav-title')
            // .addClass('visible')
            .show('fast');

          if ($(window).scrollTop() > $('.header').outerHeight()) {
            $('.nav-title').addClass('visible');
          }
        }
      });

    // show nav-title after scroll
    var isVisible = false;
    $(window).on('scroll resize', function() {
      var shouldBeVisible = $(window).scrollTop() > $('.header').outerHeight();

      if (!$('.nav-main').hasClass('active') && shouldBeVisible && !isVisible) {
        isVisible = true;
        $('.nav-title')
          .addClass('visible')
          .show('fast');
      } else if (!$('.nav-main').hasClass('active') && !shouldBeVisible && isVisible) {
        isVisible = false;
        $('.nav-title')
          .hide('fast')
          .removeClass('visible');
      }


      // console.log(isVisible);
    });
  });

})(jQuery, window, document);
