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
import AffordabilityModal from '../components/affordability/AffordabilityModal.vue';
  export default {
  // components: { AffordabilityModal },
    auth:false,
      head(){return{
        script:[
           {src: "js/slide.js",body: true},
          {src: "/js/libraries/siema/splide.js",body: true},
        ]
      }},
    mounted(){
      let s = ['/js/libraries/swiper/swiper-bundle.min.js','/js/libraries/swiper/init.js'];
      for(let i = 0; i <= s.length;i++){
        let link = s[i];
        const script = document.createElement("script");
      script.onload = this.onScriptLoaded;
      script.type = "text/javascript";
      script.src = link;
      document.body.appendChild(script);
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
