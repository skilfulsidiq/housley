<template>
  <div>
      <div class="swiper-container">
<!-- Additional required wrapper -->
    <div class="swiper-wrapper">

    <!-- SLIDER ONE -->
        <section    class="swiper-slide promotion">

            <div class="promotion-container one">


                            <!-- Slides -->
                            <div class="promotion-slider" id="promotion-slide1">

                                <div class="promotion-slider-container" >


                                            <div class="left">

                                            <!-- <img src="/img/home/promotion/user.png"> -->
                                            </div>

                                            <div class="right">
                                                <h1>Not sure what amount you qualify for? Take the affordability test and get a pre approval. </h1>
                                                <!-- <h1></h1> -->
                                                <h3>With your pre-approval, connect with developers and lenders, view available properties and start your journey</h3>
                                                <!-- <h3></h3> -->
                                           <div class="button">
                           <app-button btnclass="" btnid="modal-trigger" text=" Take the Affordability Test "
                      :action="showModal"/>
                      </div>

                                            </div>

                                </div>



                            </div>








            </div>
        <!-- Section Container -->
        </section>

        <!-- SLIDER TWO -->
        <section    class="swiper-slide promotion">
          <div class="promotion-container two">


                          <!-- Slides -->
                          <div class="promotion-slider" id="promotion-slide1">

                              <div class="promotion-slider-container" >


                                          <div class="left">

                                          <!-- <img src="/img/home/promotion/user.png"> -->
                                          </div>

                                          <div class="right">
                                              <h1>Not sure what amount you qualify for? Take the affordability test and get a pre approval. </h1>
                                              <h3>With your pre-approval, connect with developers and lenders, view available properties and start your journey</h3>
                                        <div class="button">
                           <app-button btnclass="" btnid="modal-trigger" text=" Take the Affordability Test "
                      :action="showModal"/>
                      </div>

                                          </div>

                              </div>



                          </div>








          </div>
        <!-- Section Container -->
        </section>


        <!-- SLIDER THREE -->
        <section    class="swiper-slide promotion">
          <div class="promotion-container three">
            <div class="promotion-slider" id="promotion-slide1">

                <div class="promotion-slider-container" >
                  <div class="left">
                  </div>
                  <div class="right">
                      <h1>Not sure what amount you qualify for? Take the affordability test and get a pre approval. </h1>
                      <h3>With your pre-approval, connect with developers and lenders, view available properties and start your journey</h3>
                      <div class="button">
                           <app-button btnclass="" btnid="modal-trigger" text=" Take the Affordability Test "
                      :action="showModal"/>
                      </div>

                      <!-- <div class='button cursor' @click="showModal"> -->
                        <!-- <button type="button" id="modal-trigger" data-toggle="modal" data-target="#AffordabilityTestModal"> Take the Affordability Test </button>
                        </div> -->
                  </div>
                </div>
            </div>
          </div>
        </section>
        <div class="swiper-pagination paginate"></div>


    </div>
</div>

  </div>
</template>

<script>
import AppButton from './AppButton.vue';
  export default {
  components: { AppButton },
    methods:{
      showModal(){
        this.$router.push("/pre-approval")
        // $("#AffordabilityTestModal").modal("show");
      }
    }
  }
</script>

<style lang="scss" >

  .affbtn{

    background: #006633;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    border-radius: 15px;
    padding: 15px;
    color: #fff;
    max-width: 70%;
  }
</style>
