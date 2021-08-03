/**
* Template Name: Rapid - v2.3.1
* Template URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
    "use strict";
  
    // // Preloader (if the #preloader div exists)
    // $(window).on('load', function() {
    //   if ($('#preloader').length) {
    //     $('#preloader').delay(100).fadeOut('slow', function() {
    //       $(this).remove();
    //     });
    //   }
    // });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        // console.log('Am scrolled')


        
        $('div.logo>a>img').attr('src','/assets/img/logo/Houzzley-Logo.svg');
        $(".trasparent-container .navigation nav ul li a").css({"color":"#0d4566"});
        $(".trasparent-container .action-buttons .login a").css({"color":"#0d4566"});
        $(".trasparent-container .action-buttons .signup a").css({"color":"#0d4566"});
        $(".trasparent-container .action-buttons .signup").css({"border":"1px solid #0d4566"});
        // Hover styles
        // $(".trasparent-container .navigation nav ul li a:hover").css({"color":"#F49800"});
        // $(".trasparent-container .action-buttons .login a:hover").css({"color":"#F49800"});
        // $(".trasparent-container .action-buttons .signup a:hover").css({"color":"#F49800"});

        // $('#topbar').addClass('topbar-scrolled ');
      } else {
        $('#header').removeClass('header-scrolled');
        $('div.logo>a>img').attr('src','/assets/img/logo/houzzley-white-logo.svg');
        $(".trasparent-container .navigation nav ul li a").css({"color":"#ffffff"});
        $(".trasparent-container .action-buttons .login a").css({"color":"#ffffff"});
        $(".trasparent-container .action-buttons .signup a").css({"color":"#ffffff"});


        // $('#topbar').removeClass('topbar-scrolled ');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      // console.log('Am scrolled')
      // $('div.logo>a>img').src('../../img/logo/Houzzley-Logo.svg');
    }
 
    // // Init AOS
    // function aos_init() {
    //   AOS.init({
    //     duration: 1000,
    //     once: true
    //   });
    // }
    // $(window).on('load', function() {
    //   aos_init();
    // });
  
  })(jQuery);