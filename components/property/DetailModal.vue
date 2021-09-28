<template>
  <div>
      <div id="detailModal" class="modal" v-if="property">
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <div class="grid gridy">
                  <div class="lhs">
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
                              >{{property.city.name}}, {{property.state.name}}, Nigeria</span
                            >
                          </div>
                        </div>
                        <div class="rhs">
                          <p class="color1 bold">From</p>
                          <p class="color1 bold big-text">{{property.property_price| price}}</p>
                        </div>
                      </div>
                      <div class="lower flex j-btw flex-wrap">
                        <div class="flex icons">
                          <div class="with-icon flex j-btw">
                            <div>
                              <img
                                src="/img/properties/bed.svg"
                                alt="bed"
                              />
                            </div>
                            <p class="color1">{{property.property_bedrooms}}  Beds</p>
                          </div>
                          <div class="with-icon flex j-btw">
                            <div>
                              <img
                                src="/img/properties/bath.svg"
                                alt="bed"
                              />
                            </div>
                            <p class="color1">{{property.property_bathrooms}}  Baths</p>
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
                    <img
                      src="/img/properties/modal-img.png"
                      alt="single property"
                    />
                    <!-- <nuxt-link :to="{name:'properties-slug',params:{slug:property.slug}}" class="last-btn flex"> -->
                      <!-- <button type="button" class="green-btn s-bold" @click="moreDetail">
                        View More
                      </button> -->
                      <a href="#" class="last-btn flex" @click="moreDetail">
                      <app-button text="View More" btnclass="green-btn s-bold hoverable" :action="moreDetail"/>
                      </a>
                    <!-- </nuxt-link> -->
                  </div>
                  <schedule-tour-form :property="property"/>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
import ScheduleTourForm from './ScheduleTourForm.vue';
  export default {
  components: { ScheduleTourForm },
    data(){
      return{
        property:''
      }
    },

    methods:{
      showModal(){
        $('#detailModal').modal('show');
      },
      closeModal(){
         $('#detailModal').modal('hide');
        //  this.$nuxt.$emit("show_detail_modal",false);
      },
      moreDetail(){
        this.closeModal();
        this.$router.push({name:"properties-slug",params:{slug:this.property.slug}});
      },
      chooseProperty(){
        //  this.$store.dispatch("property/selectPropertyAction",this.property);
           this.closeModal();
          this.$store.commit("property/SELECTED_PROPERTY",this.property);
          this.$router.push("/affordability")

          // this.$store.dispatch("formStepAction",2);
      }
    },
    created(){
      this.$nuxt.$on("show_detail_modal",(details)=>{
        if(details.status){
          this.showModal();
          this.property = details.property;
        }else{
          this.closeModal();
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
