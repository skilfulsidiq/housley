<template>
  <div>
    {{request_data}}
       <v-row>
      <v-col class="col-12" md="12">

        <v-card class="" :loading="loading">
           <div v-if="request.property">
              <property-images-carousel :photos="request.property.property_photos" v-if="request.property.property_photos"/>
             <div v-if="!request.property.property_photos" class="card-image"

             >
                  <h4 class="card-image-name">Property Not Found</h4>
              </div>
               <!-- :style="{ backgroundImage: 'url(/image/no-property.jpg)' }" -->
           </div>
            <div class="top d-flex justify-space-between pa-5" >
              <h3 class="document-text property">Requested Property</h3>
              <!-- <v-btn dark depressed color="accent" class="construction">Under Construction</v-btn> -->
            </div>
            <v-divider class=""></v-divider>
             <div class="table-parent " >
                  <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td class="b-right text-left"> Property Type</td>
                        <td class="text-left font-weight-bold" v-if="request.property_type"> {{request.property_type.name}}</td>
                      </tr>
                      <tr>
                        <td class="b-right text-left"> Property Bedrooms </td>
                        <td class="text-left font-weight-bold" v-if="request"> {{request.property_bedroom}} bedrooms</td>
                      </tr>
                      <tr>
                        <td class="b-right text-left"> Property Location</td>
                        <td class="text-left font-weight-bold" v-if="request.city&&request.state"> {{request.city.name}}, {{request.state.name}}</td>
                      </tr>
                      <tr>
                        <td class="b-right text-left"> Property Value </td>
                        <td class="text-left font-weight-bold" v-if="request"> N {{formatCurrency(request.property_value)}}</td>
                      </tr>

                    </tbody>
                  </template>
               </v-simple-table>
             </div>
            <v-divider class="pb-8"></v-divider>


        </v-card>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin';
import PropertyImagesCarousel from '../property/PropertyImagesCarousel.vue';
  export default {
  components: { PropertyImagesCarousel },
    mixins:[general_mixin],
    data(){
      return{
        request:{}
      }
    },
    computed:{
      request_data(){
        let r = this.$store.state.dashboard.property_request;
        this.request = r;
      }
    },

  }
</script>

<style lang="scss" scoped>
.b-right{
  border-right:1px solid rgba(0, 0, 0, 0.1);
  width:50%;
}
.card-image{
  display: flex;
  justify-content: center;
    height:15rem;
    width: 100%;
    background-color: $green_lighten_five;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius:10px;
    border-top-left-radius: 10px;
    /* clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
    clip-path: polygon(50% 22%, 100% 38%, 100% 100%, 0 100%, 0% 38%); */
    .card-image-name{
      color: $dashboard_color;
    }
  }
.contruction{
  background-color: rgb(99, 152, 201);
}
</style>
