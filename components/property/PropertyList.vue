<template>
  <div>
         <section class="paginate">
            <div class="grid-ppt-cards grid">
                <property-card v-for="property in properties" :key="property.id"
                  :property="property"  :isChoose="isChoose"
                />


            </div>
        </section>

  </div>
</template>

<script>
import PropertyCard from './PropertyCard.vue'
  export default {
  components: { PropertyCard},
    props:{
      properties:{type:Array},
       isChoose:{type:Boolean,default:false}
    }
  }
</script>

<style lang="scss" scoped>

</style>
