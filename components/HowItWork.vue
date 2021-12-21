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
                    <p class="timeline-content">Sign up and register an account with your email address or log into your account with your username and password if already registered.</p>


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
                  <p class="timeline-content">As a responsible platform we want to ensure that you aren't seeking to borrow money from a participating lending bank that you cannot afford and that's why we do affordability checks to work out the maximum loan amount based on your income and your down payment.</p>


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
                  <p class="timeline-content">Your income directly impacts the amount of your home loan and the purchase price of the type of property you can buy, we'll help you find an affordable home from a pre-qualified developer you can be approved for a loan amount.</p>


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
                  <p class="timeline-content">Our platform will allow you to review interest rate quotes from multiple participating lenders and choose which one you would like to work with on your loan. it's important to compare interest rates and fees offered by at least two lenders so you can be sure you have the best deal.</p>


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
                    <p class="timeline-content">Once you decide which offer is best for you , complete the application, our loan advisors will work with you to ensure you have paperwork in order and there aren't financial issues, so that you can look forward to signing your loan documents at closing and moving into your new home.</p>


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
