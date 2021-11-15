<template>
  <div>
      <div id="detailModal" class="modal" aria-hidden="true" v-if="property">
          <div class="modal-dialog ">
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close"  @click="closeModal">&times;</span>
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

                        <!-- <a @click.prevent="chooseProperty" href="@" class="green-btn s-bold hoverable">Get Prequalified</a> -->
                        <app-button text="Get Prequalified" btnclass="green-btn s-bold hoverable" :action="chooseProperty">
                          Get Prequalified
                        </app-button>

                      </div>
                    </div>
                    <div class="pro-img"
                      :style="{backgroundImage:'url('+property.property_cover_image+')'}">
                    </div>
                    <!-- <img
                    class="pro-img"
                      :src="property.property_cover_image"
                      alt="single property"
                    /> -->
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
  </div>
</template>

<script>
import ScheduleTourForm from './ScheduleTourForm.vue';
  export default {
  components: { ScheduleTourForm },
    data(){
      return{
        property:'',
        modal:''
      }
    },

    methods:{
      showModal(){
        // this.modal.show();
      //  var m =  new bootstrap.Modal(document.getElementById('detailModal'))
      //  m.show();
        $('#detailModal').modal('show');
      },
      closeModal(){
        console.log("closeMe");
        //  this.modal.hide();
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
            this.$store.commit("calculator/PROPERTY_IS_SELECTED",true);
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
      });
      //  this.modal = new bootstrap.Modal(document.getElementById('detailModal'))
    }
  }
</script>

<style lang="scss" scoped>
.modal-dialog{
  max-width:100% !important;
}
.lhs{
  width:100% !important;
}
.flex{
  display:flex;
}
.flex,.child-flex > * {
    flex: none;
    max-width: 100%;
}
.ppt-card-details .lower .with-icon {
  // max-width:5rem;
  // min-width:3rem;
}
.pro-img {
    max-width: 100%;
    vertical-align: middle;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width:100%;
    height: 20rem;
    border-radius: 10px;
}
</style>
