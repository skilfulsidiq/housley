<template>
  <div>
      <section   class="ctas-heading">
        <div class="container">
            <h4>How much can you afford?  What type of home are you <br>looking for? We can help your journey to home ownership</h4>
        </div>
    </section>
    <section   class="ctas">
  <div class="ctas-container">
    <service-step-card img="/img/home/benefits-cta/find-home.svg" title="Find a home" details="Lorem ipsum dolor sit amet, consectetur  consectetur adipiscing elit. Praesent non nisl sed adipiscing." btn="Search Home" action="search"/>

    <service-step-card img="/img/home/benefits-cta/find-lender.svg" title="Find a lender" details="Lorem ipsum dolor sit amet, consectetur  consectetur adipiscing elit. Praesent non nisl sed adipiscing." btn="View rates" action="lender"/>

    <service-step-card img="/img/home/benefits-cta/own-home.svg" title="Own a Home" details="Lorem ipsum dolor sit amet, consectetur  consectetur adipiscing elit. Praesent non nisl sed adipiscing." btn="Get screened" action="screened"/>
    </div>
</section>
  </div>
</template>

<script>
import ServiceStepCard from './ServiceStepCard.vue'
  export default {
  components: { ServiceStepCard },

  }
</script>

<style lang="scss" scoped>

</style>
