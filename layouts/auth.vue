<template>
  <div>
      <div class="se-pre-con" ref="preloader"></div>
      <AppHeader/>
         <section   :class="classMonitor.top">
            <div :class="classMonitor.down">
                <div class="left item">

                </div>
                <div class="right item">
                <nuxt/>
                </div>
            </div>
         </section>
  </div>
</template>
<script>
import headScript from '@/static/headScript'
  export default {

    head(){
      return headScript;
    },
        auth:false,
        computed:{
            classMonitor(){
                if(this.$route.path=='/register'){
                    return {top:'signup',down:'signup-container'}
                }
                return {top:'login',down:'login-container'};
            },

        },
        mounted(){
             $(document).ready(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut(200);
    });
        }
    }
</script>

<style lang="scss" scoped>
  .right{
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
