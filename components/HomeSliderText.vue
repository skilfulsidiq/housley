<template>
  <div>
        <div class='slider' >
            <div class="slider-container" >
              <h2>Your journey to home ownership<br> starts here.</h2>
              <app-button  btnclass="appbtntwo hoverable mt-3" btnid="model-trigge" text="Start your journey" :action="startJourney"    />
            </div>
             <div>

            </div>

        </div>
  </div>
</template>

<script>
  export default {
    methods:{
      startJourney(){
        this.$router.push('/pre-approval')
      }
    }
  }
</script>

<style lang="scss" >
.slider-container{
  // width:50% !important;
  text-align: center;
  flex-direction: column;
  padding-top:15rem;

}
.appbtntwo{
    font-weight: 500;
    font-family: Poppins;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    padding: 10px 41px;
    background-color: $search_color;
    font-size: 14px;
    cursor: pointer;
    line-height: 24px;
}

@media screen and (max-width: 1000px){
  .slider-container {
      padding-top: 15rem !important;
  }
}
</style>
