      var myNav = document.getElementById('nav');

      window.onscroll = function () {
        'use strict';
        if (
          document.body.scrollTop >= 280 ||
          document.documentElement.scrollTop >= 280
        ) {
          myNav.classList.add('scroll');
        } else {
          myNav.classList.remove('scroll');
        }
      };

      function myFunction() {
        var x = document.getElementById('myLinks');
        if (x.style.display === 'block') {
          x.style.display = 'none';
        } else {
          x.style.display = 'block';
        }
      }


      //

