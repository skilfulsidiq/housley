<template>
  <div>
    <v-row justify="center">
          <v-dialog :fullscreen="$vuetify.breakpoint.smAndDown?true:false"
            v-model="modal"
            persistent
            max-width="650px"
          >

            <v-card class="">
              <v-card-title >
                 <h3 class="headline text-center" >Property Details</h3>
                 <v-spacer></v-spacer>
                 <v-btn icon @click="closeModal"><v-icon>mdi-close</v-icon></v-btn>
              </v-card-title>
              <v-card-text>
                <div class="images" v-if="property">
                    <property-images-carousel :photos="property.property_photos"/>
                </div>
                <div class="property-info" v-if="property">
                  <v-row reverse>
                    <v-col cols="12" md="8">
                      <div class="location2">
                        <h3> {{property.property_name}}</h3>
                        <p > <v-icon color="#0D4566">mdi-map-marker-outline</v-icon>   {{property.city.name}}, {{property.state.name}},  Nigeria </p>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4">
                      <div  class="property-price">
                        <!-- <span>From</span> -->
                        <h2 >₦ {{formatCurrency(property.property_price)}}.<small >00</small></h2>
                      </div>
                    </v-col>
                  </v-row>
                  <div class="middle-div" v-if="property">
                      <div class="featured mt-2" >
                          <amenity-card icon="mdi-bed-king-outline" alt="bed" cls="bed" :title="property.property_bedrooms+' beds'"/>
                          <amenity-card icon="mdi-shower" alt="bath" cls="bath" :title="property.property_bathrooms+' baths'"/>
                          <amenity-card icon="mdi-home-city-outline" alt="sqft" cls="dimension" :title="property.property_size+' sqft'"/>
                          <amenity-card icon="mdi-car-multiple" alt="cars"  cls="dimension" :title="property.property_garages+' cars'"/>

                      </div>
                      <!-- <action-button :outlined="false" class="detail-btn" type="button"  color="secondary" height="37px" width="6rem" text="Select" :block="false" :action="showDetail"/> -->
                  </div>


                  <div class="options" v-if="property">
                    <v-row>
                      <v-col cols="6" md="4">
                         <property-option title="Property Status" :value="property.property_status.name"/>
                      </v-col>
                      <v-col cols="6" md="4">
                          <property-option title="Property Title" value=""/>
                      </v-col>
                      <v-col cols="6" md="4">
                         <property-option title="Building Permit" value=""/>
                      </v-col>
                    </v-row>



                  </div>
                  <div class="desc">
                      <h3>Description</h3>
                      <p v-if="property">{{property.property_description}}
                      </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
  </div>
</template>

<script>
import AmenityCard from './AmenityCard.vue';
import PropertyImagesCarousel from './PropertyImagesCarousel.vue';
import PropertyOption from './PropertyOption.vue';
import general_mixin from '@/mixins/general_mixin'
  export default {
    mixins:[general_mixin],
  components: { PropertyImagesCarousel, AmenityCard, PropertyOption },
    data(){
      return{
        modal:false,
        property:''
      }
    },
    computed:{

    },
    methods:{
      openModal(){
        this.modal=true;
      },
      closeModal(){
        this.modal=false;
      }
    },
    created(){
      this.$nuxt.$on('property-detail',(t)=>{
        if(t.status){
           this.property =t.property;
          this.openModal();
        }else{
          this.closeModal();
        }
      })
      this.$nuxt.$on('show_property_detail',(t)=>{

      })
    }
  }
</script>

<style lang="scss" >
.v-dialog--scrollable {
    -webkit-backface-visibility:hidden;
    backface-visibility: hidden;
    flex: 1 1 auto;
    overflow-y: hidden;
}
/* .v-dialog--scrollable > .v-card > .v-card__text, .v-dialog--scrollable > form > .v-card > .v-card__text {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    flex: 1 1 auto;
    overflow-y: hidden;
} */
 .dialog-is-open{
      overflow-x: hidden;
      overflow: hidden;
      height: 100vh;
    overflow-y: hidden;
      /* overflow-y: hidden !important; */
    }
    .v-dialog::-webkit-scrollbar{
        width:1px;
    }
.v-dialog > .v-card > .v-card__text {
    padding: 0;
}
.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 0;
}
.property-info{
  padding:16px;
}
.middle-div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.featured{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:20rem;
}
.options{
   margin-top: 2.5rem;
  // display:flex;
  // justify-content: space-between;
  // flex-direction: row;
  // flex-wrap: wrap;
  // align-items: center;
  // width:20rem;
}
.desc{
   margin-top: 2.5rem;
}
@media (max-width:800px){
  .featured{
    margin-top: 2.5rem;
  }
}
</style>
