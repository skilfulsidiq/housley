<template>
  <div>
      <section   class="property-search">
    <div class="property-search-container">


    <!-- <div class="search-bar ">
        <div class="search-bar-tab " id>Properties</div>
        <div class="search-bar-tab" onclick="">Service Plot</div>
    </div> -->

    <div  class="search-container ">
       <div class="search-container-property">
        <form>
            <div class='form-input'>
                <span><img  src='/img/home/header/location.svg' ></span>
                <input type='text' placeholder="Name, State, City...">
            </div>
            <div class='form-input'>
                <span><img  src='/img/home/header/home.svg' ></span>

                <input type='text' placeholder="Property">
            </div>
            <div class='form-input'>
                <span><img   src='/img/home/header/naira.svg' ></span>
                <input type='text' placeholder="Maximum Price" >
            </div>
            <div class='form-input'>

                <input class="submit-property" value='Search' type='submit' id='' name=''>
            </div>
        </form>
       </div>
    </div>

    <div class="search-container " style="display:none">
        <h2>Service Plot</h2>
        <p>Paris is the capital of France.</p>
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

</style>
