<template>
  <div>
      <HomeImageSlider/>
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
        script:[
          //  {src: "/js/libraries/swiper/swiper-bundle.min.js",body: true},
           {src: "js/slide.js",body: true},
            {src: "/js/libraries/siema/splide.js",body: true},
        ]
      }},
      methods:{
             runScript(){
        let s = [  'js/slide.js','/js/libraries/siema/slide.js'];
      for(let i = 0; i <= s.length;i++){
        let link = s[i];
        const script = document.createElement("script");
      script.onload = this.onScriptLoaded;
      script.type = "text/javascript";
      script.src = link;
      document.body.appendChild(script);
      }
      }
      },
    created(){
      // window.scrollTo(0,0)
      let s = ['/js/libraries/swiper/swiper-bundle.min.js','/js/libraries/swiper/init.js'];
      for(let i = 0; i <= s.length;i++){
        let link = s[i];
        const script = document.createElement("script");
      script.onload = this.onScriptLoaded;
      script.type = "text/javascript";
      script.src = link;
      document.body.appendChild(script);
      }
        //  new Splide('.splide',{
        //       type    : 'loop',
        //       perPage : 4,
        //       autoplay: true,

        //       breakpoints: {
        //         '768': {
        //           perPage: 2,
        //           gap    : '1rem',
        //         },
        //         '480': {
        //           perPage: 1,
        //           gap    : '1rem',
        //         },
        //       }

        //     } ).mount();

      // this.runScript();
    }

  }
</script>

<style lang="scss" scoped>

</style>
