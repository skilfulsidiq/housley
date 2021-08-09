<template>
  <div>
      <section   class="client-feedbacks">

    <div class="client-feedbacks-container">

            <div class="heading item">
                <div class="title"><h1>What our customers say about us</h1> <span class="line"></span> </div>


            </div>



            <div class="feedbacks item">


                <div class="swiper-container feedback">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">

                            <div class="feedback-item">
                                    <div class="left item">
                                            <img src="/img/home/customer-feedback/commenter.jpg">
                                    </div>

                                    <div class="right item">

                                        <h1>"Definitely Recommend"</h1>
                                        <p>Houzzley has gone above and beyond in helping is with our first home. From advice and working around our schedules to sending us assistance and minor renovations</p>

                                        <div class="author">
                                            <h3 class="fullname">Peter Carl</h3>
                                            <span class="position">CEO Brains & Hammers Estates </span>
                                            <span class="ratings">&#9734; &#9734; &#9734; &#9734;</span>
                                        </div>

                                    </div>


                            </div>

                        </div>


                        <div class="swiper-slide">

                            <div class="feedback-item">
                                    <div class="left item">
                                            <img src="/img/home/customer-feedback/commenter-2.png">
                                    </div>

                                    <div class="right item">

                                        <h1>"Definitely Recommend"</h1>
                                        <p>Houzzley has gone above and beyond in helping is with our first home. From advice and working around our schedules to sending us assistance and minor renovations</p>

                                        <div class="author">
                                            <h3 class="fullname">Peter Carl</h3>
                                            <span class="position">CEO Brains & Hammers Estates </span>
                                            <span class="ratings">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</span>
                                        </div>

                                    </div>


                            </div>

                        </div>


                    </div>




                    <div class="feedback-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>



                </div>


            </div>




    </div>

 </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
}
.swiper-pagination-fraction {
    text-align: right;
    margin-left: -45px;
}
</style>
