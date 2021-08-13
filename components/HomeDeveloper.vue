<template>
  <div>
      <section   class="real-estate-developer">

        <div class="real-estate-developer-container">

              <div class="heading">
              <div class="title"><h1>Real Estate Developer</h1> <span class="line"></span> </div>

              </div>
                    <div class="developers splide">
                      <div class="splide__track">
                          <div class=" splide__list">
                              <div class="developer splide__slide">
                                  <img src="/img/home/real-estate-developer/alpha.svg">
                                  <!-- <div class="button"><a href="#">View Properties 1</a></div> -->
                              </div>
                              <div class="developer splide__slide">
                                  <img src="/img/home/real-estate-developer/brain.svg">
                                  <!-- <div class="button"><a href="#">View Properties 1 & 1</a></div> -->
                              </div>
                              <div class="developer splide__slide">
                                  <img src="/img/home/real-estate-developer/mixta.svg">
                                  <!-- <div class="button"><a href="#">View Properties 2</a></div> -->
                              </div>
                              <div class="developer splide__slide">
                                  <img src="/img/home/real-estate-developer/urban.svg">
                                  <!-- <div class="button"><a href="#">View Properties 3</a></div> -->
                              </div>
                              <div class="developer splide__slide">
                                  <img src="/img/home/real-estate-developer/alpha.svg">
                                  <!-- <div class="button"><a href="#">View Properties 4</a></div> -->
                              </div>

                          </div>
                      </div>
              </div>

        </div>

      </section>

  </div>
</template>

<script>
export default {
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
    mounted(){
        // this.runScript()
    }
  }
</script>

<style lang="scss" scoped>

</style>
