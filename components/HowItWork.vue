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
            <h3 class="timeline-heading">Search your prefered home</h3>
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
        <img class="timeline-img" src='/img/home/how-it-works/bank.jpg' >


      </div>

    </div>
    <div class="content-right-container">
      <div class="content-right timeline-content">
        <img class="timeline-icon" src='/img/home/how-it-works/bank.svg' >
        <h3 class="timeline-heading"> Selects a Lending Bank</h3>
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

        <img class="timeline-icon" src='/img/home/how-it-works/naira.svg' >
        <h3 class="timeline-heading">Check Affordability</h3>
        <p class="timeline-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisl sed adipiscing id egestas scelerisque ipsum tristique consectetur adipiscing elit. Praesent non nisl sed adipiscing.</p>


      </div>

    </div>
    <div class="content-right-container">
      <div class="content-right">

        <img class="timeline-img" src='/img/home/how-it-works/affodability.png'  >


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
        <img class="timeline-img" src='/img/home/how-it-works/dream.png'  >


      </div>

    </div>
    <div class="content-right-container">
      <div class="content-right timeline-content">
        <img class="timeline-icon" src='/img/home/how-it-works/dream.svg' >
        <h3 class="timeline-heading">Get your dream home</h3>
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



    </div>
    <app-button  btnclass="timeline-end hoverable" btnid="model-trigge" text="Start your journey" :action="showModal"    />
    <!-- <button class="timeline-end" type="button" id="modal-trigge" data-toggle="modal" data-target="#AffordabilityTestModal">
     Start your journey
    </button> -->
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
