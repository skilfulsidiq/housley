<template>
  <div>
     <main class="page-content">
       <div v-if="!loading">
           <section v-if="property">
        <div class="padded-content mt-183 relative">
          <nuxt-link to="/properties" class="abs-text flex back bold color1" >


          <img
              src="/img/properties/green-back.svg"
              alt="back to search"
            /><span>Back to Search</span></nuxt-link
          >
          <section class="upper-ppt-detail-page" v-if="property.property_photos">
            <div class="grid gridy-pic">
                <div class="property-photo a"
                :style="{backgroundImage:'url('+property.property_photos[0]+')'}">
               </div>

                <div class="b property-photo "
                :style="{backgroundImage:'url('+property.property_photos[1]+')'}">
                 </div>

                <div class="c property-photo"
                :style="{backgroundImage:'url('+property.property_photos[2]+')'}">
                </div>
            </div>
          </section>

          <section class="lower-ppt-detail-page">
            <div class="grid gridy">
              <div class="left">
                <div class="ppt-card-details">
                  <div class="upper grid">
                    <div class="lhs">
                      <p class="bold color1 big-text">
                       {{property.property_name}}
                      </p>
                      <div class="located flex">
                        <img
                          src="/img/properties/locationIcon.svg"
                          alt="locationIcon"
                        /><span class="color1"
                          >  {{property.city.name}} {{property.state.name}}, Nigeria</span
                        >
                      </div>
                    </div>
                    <div class="rhs">
                      <p class="color1 bold">From</p>
                      <p class="color1 bold big-text">{{property.property_price | price}}.00</p>
                    </div>
                  </div>
                  <div class="lower flex-wrap" id="grand-parent">
                    <div class=" icons" id="icon-parent">
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bed.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">{{property.property_bedrooms}} Beds</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bath.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">{{property.property_bathrooms}} Baths</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/building.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">{{property.property_size}} sqft</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/car.svg"
                            alt="bed"
                          />
                        </div>
                        <p>{{property.property_garages}} Cars</p>
                      </div>
                    </div>

                      <app-button text="Get Prequalified" btnclass="green-btn s-bold hoverable" :action="chooseProperty">
                          Get Prequalified
                    </app-button>
                  </div>
                </div>
                <div class="description">
                  <div class="brief-detail grid">
                    <div>
                      <p class="color1">Property Status</p>
                      <p v-if="property.property_status" class="color1 bold">{{property.property_status.name}}</p>
                    </div>
                    <div>
                      <p class="color1">Property Title</p>
                      <p class="color1 bold">Not Available</p>
                    </div>
                    <div>
                      <p class="color1">Building Permit</p>
                      <p class="color1 bold">No</p>
                    </div>
                  </div>
                  <div class="ppt-descriptive">
                    <p class="color1 bold">Description</p>
                    <p class="color1">{{property.property_description}}</p>
                  </div>
                </div>
              </div>

             <schedule-tour-form  :property="property"/>
            </div>
            <div class="amenities-grid">
              <div class="boxed-details">
                <p class="boxed-title bold color1 upward">Amenities</p>
                <div class="boxed-body boxed-body-grid grid" v-if="property.property_amenities">
                  <div class="ticked flex" v-for="(item,i) in property.property_amenities" :key="i">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">{{item.name}}</p>
                  </div>

                </div>
                <!-- <div class="boxed-details boxed-details-scroll">
                  <p class="boxed-title bold color1">Property Types</p>
                  <div class="scrolly">
                    <div class="boxed-body boxed-body-table">
                      <div class="box">
                        <p class="color1">Terrace</p>
                        <p class="color1">₦ 27,000,000.00</p>
                        <p class="status green bold">Available</p>
                      </div>
                      <div class="box">
                        <p class="color1">Semi-detached</p>
                        <p class="color1">₦ 38,000,000.00</p>
                        <p class="status red bold">Sold out</p>
                      </div>
                      <div class="box">
                        <p class="color1">Detached</p>
                        <p class="color1">₦ 47,000,000.00</p>
                        <p class="status green bold">Available</p>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
              <div class="text-slide">
                <p class="color1 slide-title">Lender Rate</p>
                <div class="mySlides flex j-btw" style="display:flex">
                  <img
                    src="/img/properties/firstTrust.png"
                    alt="firstTrust"
                  />
                  <p class="bold color1">12.2%</p>
                </div>

                <div class="mySlides" style="display:flex">
                  <q
                    >But man is not made for defeat. A man can be destroyed but
                    not defeated.</q
                  >
                  <p class="author">- Ernest Hemingway</p>
                </div>

                <div class="mySlides" style="display:flex">
                  <q
                    >I have not failed. I've just found 10,000 ways that won't
                    work.</q
                  >
                  <p class="author">- Thomas A. Edison</p>
                </div>

                <div class="flex control">
                  <button class="fade-btn prev" onclick="plusSlides(-1)">
                    <img src="/img/properties/prev.svg" alt="prev" />
                  </button>
                  <button class="fade-btn next" onclick="plusSlides(1)">
                    <img src="/img/properties/next.svg" alt="next" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
       </div>

       <property-loading v-if="loading"/>
    </main>
  </div>
</template>

<script>
import ScheduleTourForm from '@/components/property/ScheduleTourForm.vue';
import general_mixin from "@/mixins/general_mixin"
  export default {
  components: { ScheduleTourForm },
  mixins:[general_mixin],
    auth:false,
      head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
      // validate({ params, query, store }) {
      //   if(params.slug=='all'|| params.type=='search'){
      //     return true;
      //   }
      //   return false;
      // },
        data(){
          return{
            slug:this.$route.params.slug
          }
        },
         computed:{
            property(){
                let p = this.$store.state.property.property;
                return p;
            },
               selected_id:{
            get(){
                return this.property.id;
            },
            set(v){
                this.form.property_id = v;
            }
        }
         },
        methods: {
          chooseProperty(){
            this.$store.commit("property/SELECTED_PROPERTY", this.property);
             this.$store.commit("calculator/PROPERTY_IS_SELECTED",true);
            this.$store.commit("calculator/GO_TO_STEP",1);
            this.$router.push("/affordability")
          },
           fetchProperty(slug){
              this.appLoading(true);
            this.$store.dispatch("property/propertyDetailAction",slug).then(res=>{
               this.appLoading(false);
            })
        },
      },
      created(){
        this.fetchProperty(this.slug)

      },
      mounted(){
        this.$store.commit("calculator/GO_TO_STEP",1);
      }
  }
</script>

<style lang="scss" scoped>
/*-------------------------------------------------------------------
      icon div with right button adjustment
 --------------------------------------------------------------*/
#grand-parent{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%
}
#icon-parent{
  width: 35%;
  display: flex;
}

/*-------------------------------------------------------------------
      End of Icon with right button
 --------------------------------------------------------------*/


 /*-------------------------------------------------------------------
      property type div adjustment
 --------------------------------------------------------------*/

.boxed-details .boxed-body {
    margin-top: 15px;
    overflow: hidden;
}
.tab button {
    color: #0d4566!important;
}
.box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 1.5rem 0;
  border-bottom: 1px solid #3aaa35;
}
.box:nth-child(3){
  border-bottom: none;
}
.box >*{
  width: 200px;
}
.property-photo{
  background-position: center;
  background-size: cover;
  width:100%;
  min-height: 12rem;
  background-repeat: no-repeat;
}
.property-photo .a{
  height: 100%;
}
/*-------------------------------------------------------------------
      end of property
 --------------------------------------------------------------*/
@media(max-width: 500px){
  #grand-parent{
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  #icon-parent{
    width: 80%;
    margin-bottom:0.25rem;
  }
}
</style>
