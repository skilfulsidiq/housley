<template>
  <div>
     <main class="page-content">
             <section>
                  <div class="padded-content mt-183">
                    <property-search-bar/>
                     <div class="ppt-heading">
                        <h3 class="title bold big-font">Neighborhood, City, State</h3>
                        <p class="sub-title color1">
                          200+ properties from Brains & Hammers listed on Houzzley
                        </p>
                      </div>
                      
                     <section class="paginate">
                          <div class="grid-ppt-cards grid">
                                <property-card/>
                                <property-card/>
                                <property-card/>
                                <property-card/>
                                <property-card/>
                          </div>
                     </section>
                  </div>
             </section>
     </main>
       <property-page-pagination/>
  </div>
</template>

<script>
import PropertyCard from '@/components/property/PropertyCard.vue'
import PropertyPagePagination from '@/components/property/PropertyPagePagination.vue'
import PropertySearchBar from '../../components/property/PropertySearchBar.vue'
  export default {
  components: { PropertyCard,PropertyPagePagination,PropertySearchBar },
    auth:false,
    layout:"default"
  }
</script>

<style lang="scss" scoped>

</style>
