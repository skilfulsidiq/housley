(function(){


    const swiper = new Swiper('.header-swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
         delay: 5000,
       },
       pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },



        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
})();





(function(){

// HEADER SWIPER

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
         delay: 5000,
       },
       pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },



        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


// FEEDBACK SWIPER


      const feedback = new Swiper('.feedback', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
         delay: 5000,
       },

       pagination: {
        el: ".feedback-pagination",
        type: "fraction",
        // dynamicBullets: true,
        clickable: true,
      },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },



        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });


})();
