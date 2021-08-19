<template>
<div>
     <v-card
      :hover="true"

                  class="mx-auto my-12"
                  max-width="374"
                  height="500px"
                >
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                  <div class="mt-4 px-5 subtitle-1">
                     {{property.property_name}}
                    </div>
                  <v-card-title>{{property.price}}</v-card-title>

<!-- :style="{ backgroundImage: ' url(' + require(`assets/images/${ program.image }`) + ')' }" -->
                  <v-card-text>
                    <v-row
                      align="center"
                      class="mx-0"
                    >
                      <span class="grey--text">
                        <v-icon>mdi-bed-king-outline</v-icon>
                        {{property.property_bedroom}} beds
                      </span>
                      <span class="grey--text ml-4">
                        <v-icon>mdi-shower</v-icon>
                        {{property.property_bathroom}} baths
                      </span>
                    </v-row>
                      <div class="border-row mt-8 mr-10">
                            <!-- <span class="grey--text">Property Status: </span><span class="green--text">{{property.property_status}} </span> -->
                      </div>
                  </v-card-text>

                  <v-card-actions >
                    <action-button class="pro-btn mr-8 ml-3"
                     height="35" text="Choose this property" type="button" block :action="chooseProperty" />
                    <!-- <v-btn class="pro-btn mr-3 ml-2" style="color:#fff !important;text-transform:capitalize"
                      color="secondary"
                      block

                    >
                      Choose this Property
                    </v-btn> -->
                  </v-card-actions>
                </v-card>

      <div class="home-card">
        <div class="card-image">
          <img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="">
        </div>
        <div class="card-content">
          <div class="top-div">
            <div class="left-content">
              <div class="bold-text">₦ 27,000,000</div>
              <div class="light-text">
                <span class="icon"> <v-icon></v-icon></span>
                Lekki Pearl Estate II, Lagos, Nigeria
              </div>
            </div>
            <div class="right-content">
              <div class="light-text">Financial Status</div>
              <div class="mortgage-text">Mortgage</div>
            </div>
          </div>
          <div class="middle-div">
            <div class="left-content">
              <a href=""> <div class="icon-box"> <v-icon></v-icon> <div class="light-text">4 Beds</div> </div> </a>
              <a href=""> <div class="icon-box"> <v-icon></v-icon> <div class="light-text">4 Baths</div> </div> </a>
              <a href=""> <div class="icon-box"> <v-icon></v-icon> <div class="light-text">2980 sqft</div> </div> </a>
            </div>
            <div class="right-content">
              <v-btn depressed dark class="detail-btn">See details</v-btn>
            </div>
          </div>
          <div class="bottom-div">
            <div class="left-content">
              <div class="fade-text">Buy on Mortgage</div>
              <div class="bold-text">₦ 227,723 <div class="fade-text">/ Month</div></div>
            </div>
            <div class="right-content">
              <div class="fade-text">Payback Over</div>
              <div class="bold-text">20 <div class="fade-text">/ Years</div></div>
            </div>
          </div>
        </div>
      </div>
</div>         
</template>
<script>
// import {loadingMixin} from '@/mixins/Loading'
// import EventBus from '../../../services/Event'
export default {
    name: "dashboard",
    // mixins:[loadingMixin],
    props:{
      property:{type:Object,required:true}
    },
    data(){
        return{

        }
    },
    methods:{
      chooseProperty(){
        console.log("i choose");
        this.$store.commit("property/SELECTED_PROPERTY",this.property);
        this.$nuxt.$emit("selected_property",{status:true,property:this.property});
        // EventBus.$emit("showModal",true);
      }
    }
}
</script>
<style scoped>
.v-card__title{
  font-size: 1.2rem !important;
   line-height: 1.5rem!important;
}
.v-application .subtitle-1 {
    font-size: 0.8rem !important;
    font-weight: normal;
    letter-spacing: 0.009375em !important;
    line-height: 1rem!important;
}
.border-row{
  border:1px solid #eee;
  /* width:100%; */
  padding:1rem;
  border-radius:10px;
  /* margin:5px 2px; */
  }
  .v-card__actions{
    position:absolute;
    bottom:0 !important;
    margin-bottom: 1rem !important;
    left:0;
    text-align: center;
    /* width:100%; */
  }
  .pro-btn{
    margin-right:3rem;
    /* width:100%; */
    /* position:absolute;
    margin-bottom: 2rem !important;
    left:0; */
  }


  .card-image{
    clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
  }
  .top-div,.middle-div,.bottom-div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
