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
                    <div v-if="!loading">
                         <div class="" v-if="properties&& properties.length>0">
                          <div class="ppt-heading" >
                            <h3 class="title bold big-font">Neighborhood, City, State</h3>
                            <p class="sub-title color1">
                              {{property_length}} + properties from Brains & Hammers listed on Houzzley
                            </p>
                          </div>
                            <property-list :properties="properties"/>
                        </div>
                        <div v-if="!properties || properties.length<=0">
                              <no-property title="No Property Found" :showRequestBtn="false" rightBtnText="View All Properties"
                              :rightAction="viewAllProperty"
                              />
                        </div>
                    </div>

                    <property-loading v-if="loading"/>
                  </div>
             </section>
     </main>
     <!-- </client-only> -->
    <property-page-pagination :pagination="pagination"  mutator="ALL_PROPERTIES" :method="list_type=='all'?'get':'post'" />

       <request-mailing-card/>
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
import RequestMailingCard from '@/components/RequestMailingCard.vue'
import NoProperty from '@/components/property/NoProperty.vue'
import PropertyLoading from '@/components/property/PropertyLoading.vue'
  export default {
    mixins:[form,general_mixin],
  components: { PropertyCard,PropertySearchBar,PropertyPagePagination,PropertyList,RequestMailingCard,NoProperty,PropertyLoading},
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
      },
      list_type(){
              let type = this.$store.state.property.list_style;
              return type;
      }
     },
      methods:{
    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
    },
    viewAllProperty(){
       this.$store.dispatch("property/allPropertiesAction")
    },
    fetchProperties(){

        if(this.list_type == 'all'){
           this.appLoading(true);
           this.$store.dispatch("property/allPropertiesAction").then((res)=>{
             this.appLoading(false);
           })
        }else{

        }

      // this.$store.dispatch("property/allPropertiesAction")

    }
  },
  updated(){
    // window.screenTop
     window.scrollTo(0,0);
  },
  created(){
    this.fetchProperties();
     this.$store.commit("property/CLEAR_SELECTED_PROPERTY",'');
      this.$store.commit("calculator/PROPERTY_IS_SELECTED",true);
    console.log(process.env.NODE_ENV)

  }
  }
</script>

<style lang="scss" scoped>

</style>
