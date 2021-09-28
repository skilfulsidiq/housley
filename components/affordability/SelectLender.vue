<template>
  <div>
    <div class=" gri">
        <div class="grid-child">
          <h6 class="select-heading">Select Lending Institution</h6>
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
      selectLender(){
         this.$store.dispatch("calculator/formStepAction",3);
      }
    },
    created(){
      this.$nuxt.$on("submitLender",()=>{
          this.selectLender();
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
