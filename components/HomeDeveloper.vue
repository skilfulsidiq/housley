<template>
  <div class="p-dev">
     <section   class="real-estate-developer">

          <div class="real-estate-developer-container">

                <div class="heading">
                  <h2>Real Estate Developer</h2> <span class="line"></span>

                </div>
                  <splide :options="options" class="developers mobile2">
                  <splide-slide>
                <!-- <div class="logo-for-desktop"> -->
                  <div class="dev-logo" >
                        <img src="/img/home/developer/hsf/Alpha-logo.svg" class="margin-dev2">
                        <!-- <div class="button"><a href="#">View Properties 1</a></div>
                        :style="{backgroundImage:'url(/img/home/developer/hsf/Alpha-logo.svg)'}"-->
                  </div>
                  </splide-slide>
                   <splide-slide>
                  <div class="dev-logo" >
                        <img src="/img/home/developer/hsf/brains-hammers-logo2-2.png" class="margin-dev">
                        <!-- <div class="button"><a href="#">View Properties 1 & 1</a></div>
                        :style="{backgroundImage:'url(/img/home/developer/hsf/brains-hammers-logo2-2.png)'}"-->
                  </div>
                   </splide-slide>
                      <splide-slide>
                   <div class="dev-logo" >
                        <img src="/img/home/developer/hsf/mixta.png" class="margin-dev">
                          <!-- <div class="button"><a href="#">View Properties 2</a></div>
                          :style="{backgroundImage:'url(/img/home/developer/hsf/mixta.svg)'}"-->
                  </div>
                      </splide-slide>
                         <splide-slide>
                  <div class="dev-logo" >
                        <img src="/img/home/developer/hsf/shelter.svg" class="margin-dev">
                        <!-- <div class="button"><a href="#">View Properties 3</a></div>
                        :style="{backgroundImage:'url(/img/home/developer/hsf/shelter.svg)'}" -->
                    </div>
                         </splide-slide>
                    <!-- <div class="dev-logo" > -->
                        <!-- <img src="/img/home/developer/hsf/alpha.svg"> -->
                        <!-- <div class="button"><a href="#">View Properties 4</a></div>
                        :style="{backgroundImage:'url(/img/home/developer/hsf/alpha.svg)'}" -->
                    <!-- </div> -->
                  </splide>
                <!-- </div> -->



          </div>

      </section>


        <section   class="lending-institution">

          <div class="lending-institution-container">

                <div class="heading">
                <h2>Lending Institution</h2> <span class="line"></span>

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
// .real-estate-developer {
//   display:block;
// }
.real-estate-developer-container .developers {
    padding: 70px 40px 70px 0;
    width: 100%;
}
.real-estate-developer-container .heading {
    // grid-template-columns: 250px 20%;
}
  .real-estate-developer,.lending-institution{
    // background-color: #fff;
    background-color: #f6f6f3;
    height: 20rem;
  }
  .lending-institution-container {
    display: block;
    /* grid-template-columns: 1fr; */
}
  .lending-institution-container .institutions{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lending-institution-container .institutions div img{
    width: 200px;
    height: 55px;
  }

  .margin-dev{
    // margin:0 3rem;
    // margin-left:3rem;
  }
  .dev-logo{
    // width:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1.5rem 0;
  }
  .dev-logo img{
    object-fit: contain;
    width:200px;
    height: 60px;
    vertical-align: middle;
        // margin:1.5rem;
  }
  .logo-for-desktop{
      width: 100%;
      display: flex;
      justify-content: center;
  }



  @media  (max-width:900px){
     .logo-for-desktop{
       margin-top:10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // flex-wrap: wrap;
  }
  .dev-logo{
      margin:0;

      // margin-right: 2rem;
   }

  }

</style>
