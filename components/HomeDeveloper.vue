<template>
  <div>
     <section   class="real-estate-developer">

          <div class="real-estate-developer-container">

                <div class="heading">
                  <h2>Real Estate Developer</h2> <span class="line"></span>

                </div>
                 <splide :options="options" class="developers">
                  <splide-slide>
                    <div class="developer splide__slide">
                        <img src="/img/home/developer/hsf/Alpha-logo.svg">
                        <!-- <div class="button"><a href="#">View Properties 1</a></div> -->
                    </div>
                  </splide-slide>
                  <splide-slide>
                   <div class="developer splide__slide">
                        <img src="/img/home/developer/hsf/brains-hammers-logo2-2.png">
                        <!-- <div class="button"><a href="#">View Properties 1 & 1</a></div> -->
                    </div>
                  </splide-slide>
                  <splide-slide>
                   <div class="developer splide__slide">
                          <img src="/img/home/developer/hsf/mixta.svg">
                          <!-- <div class="button"><a href="#">View Properties 2</a></div> -->
                      </div>
                  </splide-slide>
                  <splide-slide>
                   <div class="developer splide__slide">
                        <img src="/img/home/developer/hsf/shelter.svg">
                        <!-- <div class="button"><a href="#">View Properties 3</a></div> -->
                    </div>
                  </splide-slide>
                  <splide-slide>
                    <div class="developer splide__slide">
                        <img src="/img/home/developer/hsf/alpha.svg">
                        <!-- <div class="button"><a href="#">View Properties 4</a></div> -->
                    </div>
                  </splide-slide>
                </splide>



          </div>

      </section>


        <section   class="lending-institution">

          <div class="lending-institution-container">

                <div class="heading">
                <h2>Participating Lending Institutions</h2> <span class="line"></span>

                </div>

                <div class="institutions">


                                <div class="">
                                    <img src="/img/home/developer/hsf/first-trust-logo_white.svg">

                                </div>

                                <div class="">
                                    <img src="/img/home/developer/hsf/Imperial-Homes-Logo-Usable-1.svg">

                                </div>



                </div>

          </div>

        </section>

  </div>
</template>

<script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  //  components: {
  //   Splide,
  //   SplideSlide,
  // },
    data() {
		  return {
			  options: {
			  	// rewind : true,
				  gap    : '1rem',
          type: 'loop',
          perPage: 4,
          autoplay: true,

          breakpoints: {
            '768': {
              perPage: 2,
              gap: '1rem',
            },
            '480': {
              perPage: 1,
              gap: '1rem',
            },
          }
			  },
		  };
	  },
    watch:{
      '$route':function(v){

      }
    },
    methods:{
      // runScript(){
      //   let s = [  'js/slide.js','/js/libraries/siema/slide.js'];
      // for(let i = 0; i <= s.length;i++){
      //   let link = s[i];
      //   const script = document.createElement("script");
      // script.onload = this.onScriptLoaded;
      // script.type = "text/javascript";
      // script.src = link;
      // document.body.appendChild(script);
      // }
      // }
    },
    created(){
        // this.runScript()

    }
  }
</script>

<style lang="scss" scoped>
  .real-estate-developer,.lending-institution{
    background-color: #f6f6f3;
  }
</style>
