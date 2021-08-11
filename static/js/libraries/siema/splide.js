// https://splidejs.com/
// document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.splide',{
    type    : 'loop',
    perPage : 4,
    autoplay: true,

    breakpoints: {
      '768': {
        perPage: 2,
        gap    : '1rem',
      },
      '480': {
        perPage: 1,
        gap    : '1rem',
      },
    }

  } ).mount();
// } );
