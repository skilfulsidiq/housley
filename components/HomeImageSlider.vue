<template>
  <div>
      <section   class="slider">
        <!-- Slider main container -->
        <div class="swiper-container header-swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">

                <!-- Slides -->
                <div class="swiper-slide" id="slide1">
                   <home-slider-text/>

                </div>
                <div class="swiper-slide" id="slide2">
                    <home-slider-text/>
                    <!-- <div class='slider' >
                        <div class="slider-container" >
                         <h2>Your journey to <br> home ownership<br> starts here.</h2>
                        </div>
                        <div>

                        </div>

                     </div> -->

                </div>
                <div class="swiper-slide" id="slide3">
                   <home-slider-text/>
                    <!-- <div class='slider' >
                        <div class="slider-container" >
                         <h2>Your journey to <br> home ownership<br> starts here.</h2>
                        </div>
                    <div>

                </div>

                     </div> -->

                </div>

            </div>
            <div class="swiper-pagination"></div>

        </div>

        <!-- <section   class="news-updates">
            <div class="news-updates-container">
               <div>
                <p>Mortgage Rate: Imperial Homes Mortgage Bank Limited = Prime at 15%</p>
               </div>
            </div>
        </section> -->


  </section>
  </div>
</template>

<script>
  export default {
    // mounted(){
    //   let s = ['/js/libraries/swiper/swiper-bundle.min.js','/js/libraries/swiper/init.js'];
    //   for(let i = 0; i <= s.length;i++){
    //     let link = s[i];
    //     const script = document.createElement("script");
    //   script.onload = this.onScriptLoaded;
    //   script.type = "text/javascript";
    //   script.src = link;
    //   document.body.appendChild(script);
    //   }
    // }
  }
</script>

<style lang="scss" scoped>

</style>
