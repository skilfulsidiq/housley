<template>
        <div class="ppt-card">
                <!-- <img id="property_img" src="/img/properties/house-card.jpg" alt="" /> -->
                <img id="property_img" :src="property.property_cover_image" alt="" />
                <div class="ppt-card-details">
                  <div class="upper">
                    <div class="lhs">
                      <p class="bold color1 font-16">{{property.property_price| price}}</p>
                      <div class="located flex">
                        <img
                          src="/img/properties/locationIcon.svg"
                          alt="locationIcon"
                        /><span class="color1"
                          >{{property.city.name}}, {{property.state.name}}, Nigeria</span
                        >
                      </div>
                    </div>
                    <div class="rhs flex">
                      <p class="color1">Property Status</p>
                      <p class="color1" >{{property_status}}</p>
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
                    </div>
                    <button

                      class="dark-btn see-details"
                      @click="showDetail()"
                    >
                      See details
                    </button>
                  </div>
                  <div class="bottom flex flex-wrap j-btw">
                    <div class="lhs">
                      <p class="upper-case faded">Buy on Mortgage</p>
                      <div class="located flex">
                        <p class="bold color1 font-16">{{property.estimated_repayment.monthly_payment|price}}</p>
                        <span class="slash faded"> / Month</span>
                      </div>
                    </div>
                    <div class="rhs">
                      <p class="upper-case faded">Payback Over</p>
                      <div class="located flex">
                        <p class="bold color1 font-16">{{property.estimated_repayment.tenure}} </p>
                        <span class="slash faded"> / Years</span>
                      </div>
                    </div>
                  </div>

                  <div :class="isChoose?'property-action-btn':''" v-if="isChoose">
                     <!-- <button class="action-btn solid-action-btn" @click="showDetailModal"> -->
                       <!-- <span v-show="loading">loading..</span> <span v-show="!loading">View</span> -->
                       <!-- </button> -->
                         <button class="action-btn outline-action-btn" @click="chooseProperty">Select</button>

                  </div>
                </div>
        </div>

</template>

<script>
    export default {
        name:"PropertyCard",
          props:{
        btnText:{type:String,default:'See details'},
        property:{type:Object},
        isChoose:{type:Boolean,default:false}
    },
    computed:{
      property_status(){
        if(this.property.property_status!= null){
          return this.property.property_status.name
        }
        return ''
      }
    },
    methods:{
        showDetail(){
          let d = {status:true,property:this.property};
          this.$nuxt.$emit("show_detail_modal",d);
        },
        chooseProperty(){
            console.log("choose property")
            if(this.isChoose){
                this.$store.dispatch("property/selectPropertyAction",this.property);
                //  this.$store.commit("property/SAVE_SELECTED_PROPERTY",this.property)
                 this.$store.dispatch("calculator/formStepAction",2);
                 this.$router.push("/affordability");

            }else{
                // go detail page
                this.$router.push({name:"PropertyDetail",params:{slug:this.property.slug}})
            }
        }
    }
    }
</script>

<style lang="scss" scoped>
img{
  max-width:100%;

}
#property_img{
  width:367px;
  height: 256px;
}


.property-action-btn{
  /* border-top:1px solid #f2f2f2; */
  /* ma */
  display: flex;
  justify-content: center;
  padding:1rem 0.5rem;
}
.action-btn{
  padding: 0.4rem 1.5rem !important;
  height: 36px;
  width:100%;
   line-height: 1.5;
  // font-family: "Airbnb Cereal App Light";
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
}
// .solid-action-btn{
//   background-color: #6FA73D;
//     background: linear-gradient(249deg, #6FA73D, #00b1ab);
//     color: #ffffff;
//     border: 1px solid transparent;

// }
.outline-action-btn{
   background: transparent;

    color: #0d4566  !important;
    border: 1px solid #0d4566;
}
.outline-action-btn:hover{
  color:#fff !important;
  background-color: #0d4566;
}
</style>
