<template>
  <div>
      <section   class="ctas-heading">
        <div class="container">
            <h4>How much can you afford?  What type of home are you <br>looking for? We can help your journey to home ownership</h4>
        </div>
    </section>
    <section   class="ctas">
  <div class="ctas-container">
    <service-step-card img="/img/home/benefits-cta/find-home.svg" title="Find a home" details="Search and select affordable home built by pre-qualified property developers on our portal." btn="Search Home" action="search"/>

    <service-step-card img="/img/home/benefits-cta/find-lender.svg" title="Find a lender" details="Take an affordability test, pre-qualify for a home loan and find a lender with competitive lending rates." btn="View rates" action="lender"/>

    <service-step-card img="/img/home/benefits-cta/own-home.svg" title="Own a Home" details="Satisfy loan conditions, access an affordable home loan and buy your home from the developer" btn="Get screened" action="screened"/>
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
