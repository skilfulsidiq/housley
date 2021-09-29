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
      <HomeDeveloper/>

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
      },
    mounted(){
      if (!process.server && window.jQuery) {
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
        // script3.onload = this.onScriptLoaded;
        // script3.type = "text/javascript";
        // script3.src = link3;
        // document.body.appendChild(script3);
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
