<template>
  <div>
      <div id="detailModal" class="modal" aria-hidden="true" v-if="property">
          <div class="modal-dialog ">
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close"  @click="closeModal">&times;</span>
                <div class="grid gridy2">
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

                      </div>
                    </div>

                      <div class="main-parent">
                          <div class="full-image"  :style="{backgroundImage:'url('+active_img+')'}"></div>
                          <div class="small-images row">
                              <div v-for="img in property.property_photos" :key="img.id" @click="changeImage(img)"  class=" img cursor" :style="{backgroundImage:'url('+img+')'}"></div>
                          </div>
                      </div>



                  </div>
                  <div class="boxed-details">
                <p class="boxed-title bold color1 upward">Amenities</p>
                <div class="boxed-body boxed-body-grid grid" v-if="property.property_amenities">
                  <div class="ticked flex" v-for="(item,i) in property.property_amenities" :key="i">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">{{item.name}}</p>
                  </div>

                </div>
              </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PropertyImageGlide from './PropertyImageGlide.vue';
import ScheduleTourForm from './ScheduleTourForm.vue';
  export default {
  components: { ScheduleTourForm, PropertyImageGlide },
    data(){
      return{
        property:'',
        modal:'',
        active_img:''
      }
    },

    methods:{
      changeImage(img){
        this.active_img = img;
      },
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
       this.active_img = this.property.property_cover_image;
      this.$nuxt.$on("show_selected_property_modal",(details)=>{
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
  .main-parent{
    width:100%;
    
    // display: flex;
    // flex-direction: column;
    // justify-content: center;

    .full-image{
      @include img-background(100%,30rem,10px);
      margin-bottom: 1rem;
      vertical-align: middle;
      // background-color: $card-border-color;
    }
    .small-images{

     display: flex;
     overflow: scroll;
    }
     .img{
         @include img-background(100px,100px,10px);
        // width:80px;
        // height: 80px;
        margin: 0 5px;
        // vertical-align: middle;
      }
    .small-images::-webkit-scrollbar{
      width:0;
    }
    // ..small-images::-moz-sc
  }
</style>
