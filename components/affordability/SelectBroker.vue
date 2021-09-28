<template>
  <div>
    <div class=" gri">
        <div class="grid-child">
          <h6 class="select-heading">Select Home Loan Advisor</h6>
            <div class="select select-modal2">
              <select id="location">
                <option value="Institution 1">Institution 1</option>
                <option value="Institution 2">Institution 2</option>
                <option value="Institution 3">Institution 3</option>
              </select>
              <span class="focus"></span>
            </div>

        </div>

      </div>
  </div>
</template>

<script>
  export default {
    computed:{
      lenders(){

      }
    },
    methods:{
      selectBroker(){
         this.$store.dispatch("calculator/formStepAction",4);
      }
    },
    created(){
      this.$nuxt.$on("submitBroker",()=>{
          this.selectBroker();
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
