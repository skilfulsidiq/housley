<template>
  <div>
         <section class="paginate">
            <div class="grid-ppt-cards grid">
                <property-card v-for="property in properties" :key="property.id"
                  :property="property"  :isChoose="false"
                />


            </div>
        </section>
        <detail-modal/>
  </div>
</template>

<script>
import DetailModal from './DetailModal.vue'
import PropertyCard from './PropertyCard.vue'
  export default {
  components: { PropertyCard, DetailModal },
    props:{
      properties:{type:Array}
    }
  }
</script>

<style lang="scss" scoped>

</style>
