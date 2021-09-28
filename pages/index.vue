<template>
  <div>
      <HomeImageSlider/>
      <HomeMarquee/>
      <HomeSearchBar/>
      <HomeBenefit/>
      <!-- <AppButton width="200px" height="45px" text="text btn"/> -->
      <CtaHeading/>
      <HowItWork/>
      <HomePromotion/>
     <section   class="real-estate-developer">

          <div class="real-estate-developer-container">

                <div class="heading">
              <h2>Real Estate Developer</h2> <span class="line"></span>

                </div>

                <div class="developers splide">
                        <div class="splide__track">
                            <div class=" splide__list">

                                <div class="developer splide__slide">
                                    <img src="/img/home/real-estate-developer/alpha.svg">
                                    <div class="button"><a href="#">View Properties 1</a></div>
                                </div>

                                <div class="developer splide__slide">
                                    <img src="/img/home/real-estate-developer/brain.svg">
                                    <div class="button"><a href="#">View Properties 1 & 1</a></div>
                                </div>
                                <div class="developer splide__slide">
                                    <img src="/img/home/real-estate-developer/mixta.svg">
                                    <div class="button"><a href="#">View Properties 2</a></div>
                                </div>
                                <div class="developer splide__slide">
                                    <img src="/img/home/real-estate-developer/urban.svg">
                                    <div class="button"><a href="#">View Properties 3</a></div>
                                </div>
                                <div class="developer splide__slide">
                                    <img src="/img/home/real-estate-developer/alpha.svg">
                                    <div class="button"><a href="#">View Properties 4</a></div>
                                </div>

                            </div>
                        </div>
                </div>

          </div>

      </section>


        <section   class="lending-institution">

          <div class="lending-institution-container">

                <div class="heading">
                <h2>Lending Institution</h2> <span class="line"></span>

                </div>

                <div class="institutions">


                                <div class="">
                                    <img src="/img/mortgage/first-trust.svg">

                                </div>

                                <div class="">
                                    <img src="/img/mortgage/imperial-home.png">

                                </div>



                </div>

          </div>

        </section>

      <HomeStatistic/>
      <HomeFeedback/>
      <!-- <affordability-modal/> -->
  </div>
</template>

<script>
  export default {
  // components: { AffordabilityModal },
    auth:false,
      head(){return{
        // script:[
        //   //  {src: "/js/libraries/swiper/swiper-bundle.min.js",body: true},
        //    {src: "js/slide.js",body: true},
        //     {src: "/js/libraries/siema/splide.js",body: true},
        // ]
      }},
      methods:{
        runScript(){
         let link3= '/js/libraries/siema/slide.js';
           const script3 = document.createElement("script");
          script3.onload = this.onScriptLoaded;
          script3.type = "text/javascript";
          script3.src = link3;
          document.body.appendChild(script3);

      }
      },
      // mounted(){
      //   this.runScript();
      // },
    mounted(){
        let link = '/js/libraries/swiper/init.js';
        const script = document.createElement("script");
        script.onload = this.onScriptLoaded;
        script.type = "text/javascript";
        script.src = link;
        document.body.appendChild(script);

        let link2 = "/js/libraries/ticker/init.js";
        const script2 = document.createElement("script");
        script2.onload = this.onScriptLoaded;
        script2.type = "text/javascript";
        script2.src = link2;
        document.body.appendChild(script2);

        // let link3 = "/js/libraries/siema/splide.js";
        // const script3 = document.createElement("script");
        // script2.onload = this.onScriptLoaded;
        // script2.type = "text/javascript";
        // script2.src = link3;
        // document.body.appendChild(script3);
    }

  }
</script>

<style lang="scss" scoped>

</style>
