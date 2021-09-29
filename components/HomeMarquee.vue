<template>
  <div>
     <section   class="news-updates">
        <div class="news-updates-container">
        <div class="jctkr-label" > << </div>
          <div class="mortgage-rates">
            <ul>
              <li v-for="(r,i) in rates" :key="i">
                <span style="border-right:1px solid gray;margin:0 10px">{{r.client_name}} : {{r.finance_rate}}% &nbsp;&nbsp;
                 </span>
                  <!-- <span class='seperator'><span></span></span> -->
              </li>
              <!-- <li class='seperator'><span></span></li> -->

              <!-- <li >
                <span>Forbearance Will Not Lead to a Huge Wave of Foreclosures</span>
              </li> -->
            </ul>
          </div>

        </div>
    </section>
  </div>
</template>

<script>
  export default {

    computed:{
      rates(){
        return this.$store.state.general.lender_rates;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
