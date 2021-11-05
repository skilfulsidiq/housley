<template>
  <div>
      <div class="se-pre-con" ref="preloader"></div>
      <AppHeader/>
       <client-only>
          <nuxt/>
        <affordability-modal/>
        <property-request-modal/>
        <detail-modal/>
        <congration-modal/>
        </client-only>
      <AppFooter/>
  </div>
</template>

<script>
import headScript from '@/static/headScript'
import AffordabilityModal from '@/components/affordability/AffordabilityModal.vue';
import PropertyRequestModal from '@/components/property/PropertyRequestModal.vue';
import CongrationModal from '@/components/affordability/CongrationModal.vue';
import DetailModal from '@/components/property/DetailModal.vue';
  export default {
  components: { AffordabilityModal,PropertyRequestModal,CongrationModal,DetailModal },

    head(){
      return headScript;
    },

    methods:{
        fetchGeneralData(){
      // this.$store.dispatch("general/getClientAction")
      this.$store.dispatch("general/getPropertyTypeAction")
      this.$store.dispatch("general/getPropertyStatusAction")
      this.$store.dispatch("general/getAllStatesAction")
      this.$store.dispatch("general/getAllFinanceOptionAction")

      this.$store.dispatch("general/getLenderRateAction")
      this.$store.dispatch("general/getPartnerType",'lender')
      this.$store.dispatch("general/getPartnerType",'developer')
      this.$store.dispatch("general/getPartnerType",'broker')
    }
    },
    watch:{
      '$route':function(v){
        // if(v.path=='')
      }
    },
    created(){

      this.fetchGeneralData();
      //  $(".se-pre-con").fadeOut(1000);
    },
    mounted(){
      $(document).ready(function() {
    // Animate loader off screen
        $(".se-pre-con").fadeOut(200);
      //    const script = document.createElement("script");
      // script.onload = this.onScriptLoaded;
      // script.type = "text/javascript";
      // script.src = "/js/custom/range.js";
      // document.body.appendChild(script);
    });
    //       let p = this.$refs.preloader;
    //   var fadeEffect = setInterval(function () {
    //     if (!p.style.opacity) {
    //         p.style.opacity = 1;
    //     }
    //     if (p.style.opacity > 0) {
    //         p.style.opacity -= 0.1;
    //     } else {
    //         clearInterval(fadeEffect);
    //     }
    // }, 150);
      // let s = ['/js/libraries/swiper/swiper-bundle.min.js','/js/libraries/swiper/init.js'];
      // for(let i = 0; i <= s.length;i++){
      //   let link = s[i];
      //   const script = document.createElement("script");
      // script.onload = this.onScriptLoaded;
      // script.type = "text/javascript";
      // script.src = link;
      // document.body.appendChild(script);
      // }

    }
  }
</script>

<style lang="scss" >
// @import '@assets/scss/variables.scss';
@include range_slider();



</style>
