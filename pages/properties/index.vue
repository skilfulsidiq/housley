<template>
  <div>
     <client-only>
       <main class="page-content">
             <section>
                  <div class="padded-content mt-183">
                    <property-search-bar/>
                    <!-- <div class="ppt-heading" v-if="!properties">
                         <h3 class="title bold big-font">No Property found</h3>
                        <p class="sub-title color1">

                        </p>
                    </div> -->
                     <div class="ppt-heading" v-if="properties">
                        <h3 class="title bold big-font">Neighborhood, City, State</h3>
                        <p class="sub-title color1">
                          {{property_length}} + properties from Brains & Hammers listed on Houzzley
                        </p>
                      </div>
                        <property-list :properties="properties"/>
                     <!-- <section class="paginate">
                          <div class="grid-ppt-cards grid">
                              <property-card v-for="property in properties" :key="property.id"
                                :property="property"  :isChoose="false"
                              />


                          </div>
                     </section> -->
                  </div>
             </section>
     </main>
     <!-- </client-only> -->
    <property-page-pagination :pagination="pagination"  mutator="ALL_PROPERTIES" method="get" />
    </client-only>
  </div>
</template>

<script>
import PropertyCard from '@/components/property/PropertyCard.vue'
import PropertyPagePagination from '@/components/property/PropertyPagePagination.vue'
import PropertySearchBar from '@/components/property/PropertySearchBar.vue'
import form from "@/mixins/form_mixin"
import general_mixin from "@/mixins/general_mixin"
import PropertyList from '@/components/property/PropertyList.vue'
  export default {
    mixins:[form,general_mixin],
  components: { PropertyCard,PropertySearchBar,PropertyPagePagination,PropertyList},
    auth:false,
    layout:"default",
      head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },

      data(){
        return{

          property_length:'-',
          pageOfItems: [],
          list_type:this.$route.params.type,
        }
      },
     computed:{
      properties(){
        let all = this.$store.state.property.properties;
         console.log(all)
        let property= all.data;
        this.fillPagination(all);
        this.property_length = all.total;

        return property;
      }
     },
      methods:{
    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
    },
    fetchProperties(){
      // let t = this.$store.state.property.list_style
      //   if(this.$route.query.type != 'search'){
      //   }else{
      //      this.$store.dispatch("property/allPropertiesAction")
      //   }

      this.$store.dispatch("property/allPropertiesAction")

    }
  },
  updated(){
    // window.screenTop
     window.scrollTo(0,0);
  },
  created(){
    console.log(this.list_type)
    this.fetchProperties();
  }
  }
</script>

<style lang="scss" scoped>

</style>
