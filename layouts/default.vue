<template>
  <div>
    <!-- Loader -->
    <!-- <client-only> -->
      <div class="se-pre-con" ref="preloader"></div>
      <AppHeader/>
        <nuxt/>
      <AppFooter/>
    <!-- </client-only> -->
  </div>
</template>

<script>
  export default {
  
    created(){

      //  $(".se-pre-con").fadeOut(1000);
    },
    mounted(){
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
    }
  }
</script>

<style lang="scss" >




</style>
