<template>
  <div>
     <section   class="how-it-works">
    <div class="how-it-works-container">
        <div class="heading">
            <h1> How it Works</h1>

        </div>


      <!-- Vertical Timeline -->
      <section   id="conference-timeline">
          <!-- <div class="timeline-start">  </div> -->
          <div class="conference-center-line"></div>
          <div class="conference-timeline-content">
            <!-- Article -->
            <div class="timeline-article">
                <div class="content-left-container">
                  <div class="content-left timeline-content">

                    <img class="timeline-icon" src='/img/home/how-it-works/search-icon.svg' >
                    <h3 class="timeline-heading deep-green">Register</h3>
                    <p class="timeline-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl sed adipiscing id egestas scelerisque ipsum tristique consectetur adipiscing elit. Praesent non nisl sed adipiscing.</p>


                  </div>

                </div>
                <div class="content-right-container">
                  <div class="content-right">

                    <img class="timeline-img" src='/img/home/how-it-works/properties.png'  >


                  </div>

                </div>

                <div class="meta-date">
                  <span class="date">
                  <img  src='/img/home/how-it-works/step1.svg' >
                </span>
                  <!-- <span class="month">1</span> -->
                </div>
            </div>
              <!-- // Article -->
            <!-- Article -->
            <div class="timeline-article">
              <div class="content-left-container">
                <div class="content-left timeline-content">
                  <img class="timeline-img" src='/img/home/how-it-works/affodability.png' >


                </div>

              </div>
              <div class="content-right-container">
                <div class="content-right timeline-content">
                  <img class="timeline-icon" src='/img/home/how-it-works/bank.svg' >
                  <h3 class="timeline-heading orange"> Take the affordability test</h3>
                  <p class="timeline-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl sed adipiscing id egestas scelerisque ipsum tristique consectetur adipiscing elit. Praesent non nisl sed adipiscing.</p>


                </div>

              </div>

              <div class="meta-date">
                <span class="date">
                <img  src='/img/home/how-it-works/step2.svg' >
              </span>
                <!-- <span class="month">1</span> -->
              </div>
            </div>
            <!-- // Article -->

            <!-- Article -->
            <div class="timeline-article">
              <div class="content-left-container">
                <div class="content-left timeline-content">

                  <img class="timeline-icon" src='/img/home/how-it-works/search-icon.svg' >
                  <h3 class="timeline-heading army-green">Find a Property within your Loanable Amount</h3>
                  <p class="timeline-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl sed adipiscing id egestas scelerisque ipsum tristique consectetur adipiscing elit. Praesent non nisl sed adipiscing.</p>


                </div>

              </div>
              <div class="content-right-container">
                <div class="content-right">

                  <img class="timeline-img" src='/img/home/how-it-works/properties.png'  >


                </div>

              </div>

              <div class="meta-date">
                <span class="date">
                <img  src='/img/home/how-it-works/step3.svg' >
              </span>
                <!-- <span class="month">1</span> -->
              </div>
            </div>
            <!-- // Article -->



            <!-- Article -->
            <div class="timeline-article">
              <div class="content-left-container">
                <div class="content-left timeline-content">
                  <img class="timeline-img" src='/img/home/how-it-works/bank.jpg' >


                </div>

              </div>
              <div class="content-right-container">
                <div class="content-right timeline-content">
                  <img class="timeline-icon" src='/img/home/how-it-works/dream.svg' >
                  <h3 class="timeline-heading  orange ">Select your Lending Institution</h3>
                  <p class="timeline-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl sed adipiscing id egestas scelerisque ipsum tristique consectetur adipiscing elit. Praesent non nisl sed adipiscing.</p>


                </div>

              </div>

              <div class="meta-date">
                <span class="date">
                <img  src='/img/home/how-it-works/step4.svg' >
              </span>
                <!-- <span class="month">1</span> -->
              </div>
            </div>
            <!-- // Article -->

              <!-- Article -->
              <div class="timeline-article">
                <div class="content-left-container">
                  <div class="content-left timeline-content">

                    <img class="timeline-icon" src='/img/home/how-it-works/dream.svg' >
                    <h3 class="timeline-heading army-green">Contact a Loan Advisor</h3>
                    <p class="timeline-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl sed adipiscing id egestas scelerisque ipsum tristique consectetur adipiscing elit. Praesent non nisl sed adipiscing.</p>


                  </div>

                </div>
                <div class="content-right-container">
                  <div class="content-right">

                    <img class="timeline-img" src='/img/home/how-it-works/dream.png'  >


                  </div>

                </div>

                <div class="meta-date">
                  <span class="date">
                  <img  src='/img/home/how-it-works/step5.svg' >
                </span>
                  <!-- <span class="month">1</span> -->
                </div>
              </div>
          <!-- // Article -->
          </div>

          <div class="timeline-end" >
            <img  src='/img/home/how-it-works/deam-home.svg' >

          </div>

          <div class="timeline-en final" >

            Get your dream home
          </div>

      </section>
    </div>
     </section>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
  export default {
  components: { AppButton },
  methods:{
    showModal(){
      $("#AffordabilityTestModal").modal("show")
    }
  }

  }
</script>

<style lang="scss" scoped>

</style>
